import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article from "@/components/Article";
import { POSTS, postIndex } from "@/lib/posts";
import { translations } from "@/lib/translations";

// All six posts are known at build time, so each detail page is prerendered.
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

// Metadata is emitted at build time, before a locale is known, so it uses the
// English copy. The visible page still follows the reader's language choice.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = translations.en.blog.items[postIndex(slug)];
  if (!post) return {};

  return {
    title: `${post.title} — Teamotion`,
    description: post.desc,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = postIndex(slug);
  if (index === -1) notFound();

  return (
    <>
      <Header />
      <div className="flex flex-col max-w-[1200px] mx-auto w-full">
        <Article index={index} />
      </div>
      <Footer />
    </>
  );
}
