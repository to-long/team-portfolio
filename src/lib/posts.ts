/**
 * Locale-independent post metadata: the URL and thumbnail stay the same in
 * every language, so only the prose lives in `translations.ts`.
 *
 * Order is index-matched to `blog.items` there. `postIndex()` is the only place
 * that mapping is resolved, so a detail page can never read the wrong article.
 */
export interface PostMeta {
  slug: string;
  image: string;
}

export const POSTS: PostMeta[] = [
  { slug: "big-tech-ai-capex", image: "/images/blog-ai-capex.svg" },
  { slug: "custom-silicon-land-grab", image: "/images/blog-ai-silicon.svg" },
  { slug: "china-frontier-price-war", image: "/images/blog-ai-china.svg" },
  { slug: "ai-compliance-season", image: "/images/blog-ai-rules.svg" },
  { slug: "frontier-talent-war", image: "/images/blog-ai-talent.svg" },
  { slug: "agents-testing-limits", image: "/images/blog-ai-agents.svg" },
];

export function postIndex(slug: string): number {
  return POSTS.findIndex((p) => p.slug === slug);
}
