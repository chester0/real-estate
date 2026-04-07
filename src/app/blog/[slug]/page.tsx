import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-brand-gray py-12">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-brand-text-light hover:text-brand-blue transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 mt-4 text-sm text-brand-text-light">
            <CalendarDays size={14} />
            {new Date(post.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          {post.tags && (
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <article className="prose max-w-3xl mx-auto">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </Container>
      </section>

      <CTABanner
        title="Need Expert Guidance?"
        subtitle="Get personalized advice on your Cyprus property or relocation journey."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
