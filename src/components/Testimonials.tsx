const testimonials = [
  {
    quote:
      "\u201CThe team delivered an exceptional website that exceeded our expectations. Their attention to detail and creative approach made all the difference.\u201D",
    avatar: "/images/avatar-sarah.jpg",
    name: "Sarah Johnson",
    company: "CEO, TechStart",
  },
  {
    quote:
      "\u201CWorking with this agency was a game-changer for our brand. They understood our vision perfectly and brought it to life beautifully.\u201D",
    avatar: "/images/avatar-michael.jpg",
    name: "Michael Chen",
    company: "Founder, Growthly",
  },
  {
    quote:
      "\u201CTalentify provided us with an incredible dev team that integrated seamlessly. They delivered our mobile app ahead of schedule with outstanding quality.\u201D",
    avatar: "/images/avatar-emily.jpg",
    name: "Emily Rodriguez",
    company: "CTO, ScaleUp Inc",
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col items-center gap-[48px] px-[120px] py-[80px] bg-[var(--agency-white)]">
      <div className="flex flex-col items-center gap-[12px] max-w-[500px]">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          TESTIMONIALS
        </span>
        <h2 className="text-[36px] font-bold text-[var(--agency-heading)] text-center">
          What Our Clients Say
        </h2>
      </div>
      <div className="flex gap-[32px] w-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col flex-1 gap-[20px] rounded-[8px] border border-[var(--agency-border)] p-[32px]"
          >
            <p className="text-[15px] leading-[1.7] text-[var(--agency-body)]">
              {t.quote}
            </p>
            <div className="flex items-center gap-[12px]">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-[48px] h-[48px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] font-semibold text-[var(--agency-heading)]">
                  {t.name}
                </span>
                <span className="text-[13px] text-[var(--agency-body)]">
                  {t.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
