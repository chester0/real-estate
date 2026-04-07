import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getAllPosts } from "@/lib/blog";
import { IMAGES } from "@/lib/images";

const blogCovers: Record<string, string> = {
  "best-neighborhoods-limassol-2025": IMAGES.blog.neighborhoods,
  "cyprus-relocation-guide-step-by-step": IMAGES.blog.relocation,
  "cyprus-property-investment-roi-2025": IMAGES.blog.investment,
};

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Cyprus real estate, relocation guides, investment analysis, and living tips from ReloKey Cyprus.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Hero
        title="Blog & Insights"
        subtitle="Expert guides on Cyprus real estate, relocation, and investment — helping you make informed decisions."
        backgroundImage={IMAGES.heroBlog}
      />

      <section className="py-16">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-brand-text-light">
              Blog posts coming soon. Stay tuned!
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="flex flex-col h-full">
                    <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={blogCovers[post.slug] || IMAGES.blog.neighborhoods}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-brand-text-light mb-2">
                      <CalendarDays size={12} />
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="text-lg font-heading font-bold text-brand-text">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-brand-text-light leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-brand-blue font-semibold text-sm">
                      Read more <ArrowRight size={14} />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
