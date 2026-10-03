import fs from 'node:fs/promises';
import path from 'node:path';

const GEMINI_KEY=process.env.GEMINI_API_KEY;
const XAI_KEY=process.env.XAI_API_KEY;
const GEMINI_MODEL=process.env.GEMINI_MODEL||'gemini-3.8-flash';
const GROK_MODEL=process.env.GROK_MODEL||'grok-4.7';
const SITE_AUTHOR='Hariom Patel';
if(!GEMINI_KEY||!XAI_KEY) throw new Error('GEMINI_API_KEY and XAI_API_KEY are required');

async function gemini(prompt){
  const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+GEMINI_MODEL+':generateContent?key='+encodeURIComponent(GEMINI_KEY),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],tools:[{google_search:{}}]})});
  if(!r.ok) throw new Error('Gemini '+r.status+' '+await r.text());
  const j=await r.json(); return j.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
}
async function grok(prompt){
  const r=await fetch('https://api.x.ai/v1/responses',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+XAI_KEY},body:JSON.stringify({model:GROK_MODEL,input:prompt,tools:[{type:'web_search'}]})});
  if(!r.ok) throw new Error('Grok '+r.status+' '+await r.text());
  const j=await r.json(); return j.output_text||j.output?.find(x=>x.type==='message')?.content?.find(x=>x.type==='output_text')?.text||'';
}
function extractJson(text){ const clean=text.trim().replace(/^```json\s*/,'').replace(/\s*```$/,''); return JSON.parse(clean); }
function slugify(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,90);}
const today=new Date().toISOString().slice(0,10);
const topic=await gemini('Act as a technical research editor for Hariom Builds, an independent software studio. Search the web and choose ONE genuinely useful developer problem or automation topic with clear user intent and practical value. Focus on Python automation, web scraping, APIs, debugging, Git/GitHub, web development, AI tooling, Windows automation, or software engineering. Avoid generic news, keyword stuffing, affiliate intent, and topics already saturated by shallow summaries. Return plain text with: topic, target_query, why_useful, 5 research_questions, and 5 primary source URLs.');
const second=await grok('Independently research this proposed topic for a developer audience. Use live web search. Challenge weak assumptions, identify common errors, edge cases, current documentation, and practical examples. Do not write the final article. Proposed research:\n'+topic);
const draft=await gemini('Write a high-quality, people-first technical article for Hariom Builds using the two research notes below. The article must solve a real problem, add practical explanation and examples, avoid invented benchmarks or personal experience, and cite/attribute claims using a Sources section. The author is Hariom Patel. Return ONLY valid JSON with keys title,description,category,keywords,body,readTime,sources. body must be Markdown and include useful H2/H3 sections. sources must be an array of {title,url}. Do not mention this generation pipeline.\n\nRESEARCH A:\n'+topic+'\n\nRESEARCH B:\n'+second);
const review=await grok('You are the final technical editor. Independently inspect the draft below against the research notes. Use web search to verify important current claims. Fix inaccuracies, remove unsupported claims, improve clarity and usefulness, and make sure the result is genuinely helpful rather than written for search engines. Keep the author as Hariom Patel. Return ONLY valid JSON with keys title,description,category,keywords,body,readTime,sources. Preserve source URLs that are real and relevant; add better primary documentation sources when needed.\n\nRESEARCH A:\n'+topic+'\n\nRESEARCH B:\n'+second+'\n\nDRAFT:\n'+draft);
const post=extractJson(review);
if(!post.title||!post.description||!post.body||!Array.isArray(post.sources)) throw new Error('Invalid final article schema');
post.slug=slugify(post.title); post.author=SITE_AUTHOR; post.publishedAt=today; post.updatedAt=today;
const dir=path.join(process.cwd(),'src','content','blog'); await fs.mkdir(dir,{recursive:true});
const file=path.join(dir,post.slug+'.json'); await fs.writeFile(file,JSON.stringify(post,null,2)+'\n');
console.log('Published candidate:',file);
