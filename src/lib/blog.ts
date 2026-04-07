import fs from "fs";
import path from "path";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    return parsePost(slug, raw);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  return parsePost(slug, raw);
}

function parsePost(slug: string, raw: string): BlogPost {
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    return { slug, title: slug, date: "", excerpt: "", content: raw };
  }

  const frontmatter = frontmatterMatch[1];
  const content = frontmatterMatch[2].trim();

  const meta: Record<string, string> = {};
  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, "");
    meta[key] = value;
  }

  return {
    slug,
    title: meta.title || slug,
    date: meta.date || "",
    excerpt: meta.excerpt || "",
    content,
    tags: meta.tags ? meta.tags.split(",").map((t) => t.trim()) : undefined,
  };
}
