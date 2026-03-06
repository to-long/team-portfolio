const cases = [
  {
    image: "/images/case-fintech.jpg",
    tag: "Website Development",
    title: "FinTech Dashboard Platform",
    desc: "Built a real-time analytics dashboard for a fintech startup, handling 10M+ daily transactions with sub-second response times.",
  },
  {
    image: "/images/case-healthcare.jpg",
    tag: "Mobile Development",
    title: "HealthCare Patient App",
    desc: "Cross-platform mobile app for a healthcare provider, enabling appointment booking, telemedicine, and health record access for 500K+ users.",
  },
  {
    image: "/images/case-ecommerce.jpg",
    tag: "Website Development",
    title: "E-Commerce Marketplace",
    desc: "Full-stack e-commerce platform with AI-powered recommendations, multi-vendor support, and integrated payment processing.",
  },
  {
    image: "/images/case-enterprise.jpg",
    tag: "IT Talent Resource",
    title: "Enterprise Dev Team Scaling",
    desc: "Provided a dedicated team of 25+ engineers to a Fortune 500 company, accelerating their digital transformation roadmap by 18 months.",
  },
];

function CaseCard({ c }: { c: (typeof cases)[number] }) {
  return (
    <div className="flex flex-col flex-1 rounded-[8px] overflow-hidden border border-[var(--agency-border)] bg-[var(--agency-white)]">
      <img
        src={c.image}
        alt={c.title}
        className="w-full h-[200px] md:h-[240px] object-cover"
      />
      <div className="flex flex-col gap-[8px] p-[20px] md:p-[24px]">
        <span className="text-[12px] font-semibold text-[var(--agency-blue)]">
          {c.tag}
        </span>
        <h3 className="text-[18px] md:text-[20px] font-semibold text-[var(--agency-heading)]">
          {c.title}
        </h3>
        <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
          {c.desc}
        </p>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className="flex flex-col items-center gap-[32px] md:gap-[48px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-blue-light)]">
      <div className="flex flex-col items-center gap-[12px] max-w-[600px]">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          PROJECT CASES
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center">
          Our Recent Work
        </h2>
        <p className="text-[15px] md:text-[16px] text-[var(--agency-body)] text-center">
          Explore how we&apos;ve helped businesses transform with technology
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] md:gap-[32px] w-full">
        {cases.map((c) => (
          <CaseCard key={c.title} c={c} />
        ))}
      </div>
    </section>
  );
}
