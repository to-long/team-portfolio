const blogPosts = [
  {
    image: "/images/blog-mern.jpg",
    title: "Exploring the MERN Stack for Modern Web Apps",
    desc: "Discover how the MERN stack can help you build scalable and performant web applications.",
  },
  {
    image: "/images/blog-webhooks.jpg",
    title: "Test Webhooks for Seamless Integrations",
    desc: "Learn the best practices for testing webhooks and ensuring reliable data exchange.",
  },
  {
    image: "/images/blog-uiux.jpg",
    title: "The Power of UI/UX in Digital Products",
    desc: "Great UI/UX design transforms how users interact with your product and drives engagement.",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-white)]"
    >
      <div className="flex flex-col items-center gap-[12px] max-w-[500px]">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          BLOG
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center">
          Latest News &amp; Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] w-full">
        {blogPosts.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-[8px] overflow-hidden bg-[var(--agency-white)] border border-[var(--agency-border)] lg:border-0"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="flex flex-col gap-[12px] p-[20px] md:p-[24px]">
              <h3 className="text-[17px] md:text-[18px] font-semibold leading-[1.4] text-[var(--agency-heading)]">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                {p.desc}
              </p>
              <span className="text-[14px] font-medium text-[var(--agency-blue)]">
                Read More →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
