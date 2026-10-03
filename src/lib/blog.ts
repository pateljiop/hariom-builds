import fs from 'node:fs';
import path from 'node:path';

export type BlogSource = { title: string; url: string };
export type BlogPost = { slug:string; title:string; description:string; category:string; publishedAt:string; updatedAt:string; author:string; readTime:number; keywords:string[]; body:string; sources:BlogSource[] };
const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
function readPost(fileName:string):BlogPost { return JSON.parse(fs.readFileSync(path.join(BLOG_DIR,fileName),'utf8')) as BlogPost; }
export function getAllPosts():BlogPost[] { if (!fs.existsSync(BLOG_DIR)) return []; return fs.readdirSync(BLOG_DIR).filter(n=>n.endsWith('.json')).map(readPost).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)); }
export function getPost(slug:string):BlogPost|undefined { return getAllPosts().find(p=>p.slug===slug); }
