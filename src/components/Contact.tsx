export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-[32px] px-[24px] sm:px-[40px] md:px-[120px] lg:px-[300px] py-[40px] md:py-[80px] bg-[var(--agency-white)]"
    >
      <div className="flex flex-col items-center gap-[12px] w-full">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          CONTACT
        </span>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--agency-heading)] text-center">
          Get in Touch
        </h2>
      </div>
      <div className="flex flex-col gap-[12px] md:gap-[20px] w-full max-w-[540px] md:max-w-none">
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px]">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 rounded-[8px] border border-[var(--agency-border)] px-[16px] py-[14px] text-[15px] text-[var(--agency-body)] bg-[#F9FAFB] focus:bg-white focus:border-[var(--agency-blue)] outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Your Company"
            className="flex-1 rounded-[8px] border border-[var(--agency-border)] px-[16px] py-[14px] text-[15px] text-[var(--agency-body)] bg-[#F9FAFB] focus:bg-white focus:border-[var(--agency-blue)] outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[12px] md:gap-[20px]">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 rounded-[8px] border border-[var(--agency-border)] px-[16px] py-[14px] text-[15px] text-[var(--agency-body)] bg-[#F9FAFB] focus:bg-white focus:border-[var(--agency-blue)] outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="flex-1 rounded-[8px] border border-[var(--agency-border)] px-[16px] py-[14px] text-[15px] text-[var(--agency-body)] bg-[#F9FAFB] focus:bg-white focus:border-[var(--agency-blue)] outline-none transition-colors"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full h-[140px] md:h-[120px] rounded-[8px] border border-[var(--agency-border)] p-[16px] text-[15px] text-[var(--agency-body)] bg-[#F9FAFB] focus:bg-white focus:border-[var(--agency-blue)] outline-none resize-none transition-colors"
        />
        <button
          type="button"
          className="self-stretch md:self-start flex items-center justify-center rounded-[8px] md:rounded-[4px] bg-[var(--agency-blue)] px-[32px] md:px-[40px] py-[14px] text-[15px] md:text-[14px] font-semibold text-white"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
