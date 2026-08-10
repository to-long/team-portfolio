/**
 * Locale-independent post metadata: the URL, thumbnail and image credit stay
 * the same in every language, so only the prose lives in `translations.ts`.
 *
 * Order is index-matched to `blog.items` there. `postIndex()` is the only place
 * that mapping is resolved, so a detail page can never read the wrong article.
 */
export interface ImageCredit {
  author: string;
  license: string;
  /** Wikimedia Commons file page — the licence and author are verifiable there. */
  source: string;
}

export interface PostMeta {
  slug: string;
  image: string;
  credit: ImageCredit;
}

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const POSTS: PostMeta[] = [
  {
    slug: "big-tech-ai-capex",
    image: "/images/blog-ai-capex.webp",
    credit: {
      author: "Rsparks3",
      license: "CC0",
      source: `${COMMONS}Data_center_roof.jpg`,
    },
  },
  {
    slug: "custom-silicon-land-grab",
    image: "/images/blog-ai-silicon.webp",
    credit: {
      author: "Windell Oskay",
      license: "CC BY 2.0",
      source: `${COMMONS}Wafer_-_2.jpg`,
    },
  },
  {
    slug: "china-frontier-price-war",
    image: "/images/blog-ai-china.webp",
    credit: {
      author: "Larry Qian",
      license: "CC0",
      source: `${COMMONS}Shanghai_Lujiazui_night_skyline_2017_-_Flickr.jpg`,
    },
  },
  {
    slug: "ai-compliance-season",
    image: "/images/blog-ai-rules.webp",
    credit: {
      author: "inyucho",
      license: "CC BY 2.0",
      source: `${COMMONS}Hemicycle_of_European_Parliament,_Strasbourg,_with_chamber_orchestra_performing.jpg`,
    },
  },
  {
    slug: "frontier-talent-war",
    image: "/images/blog-ai-talent.webp",
    credit: {
      author: "Arunvrparavur",
      license: "CC BY-SA 4.0",
      source: `${COMMONS}Bridge_Global_developers%27_bay,_Apr_2019.jpg`,
    },
  },
  {
    slug: "agents-testing-limits",
    image: "/images/blog-ai-agents.webp",
    credit: {
      author: "Auledas",
      license: "CC BY-SA 4.0",
      source: `${COMMONS}UR16e_robot_arm.png`,
    },
  },
];

export function postIndex(slug: string): number {
  return POSTS.findIndex((p) => p.slug === slug);
}
