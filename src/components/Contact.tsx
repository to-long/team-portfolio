export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-[32px] px-[300px] py-[80px] bg-[var(--agency-white)]"
    >
      <div className="flex flex-col items-center gap-[12px] w-full">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          CONTACT
        </span>
        <h2 className="text-[36px] font-bold text-[var(--agency-heading)] text-center">
          Get in Touch
        </h2>
      </div>
      <div className="flex flex-col gap-[20px] w-full">
        <div className="flex gap-[20px]">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 h-[48px] rounded-[4px] border border-[var(--agency-border)] px-[16px] text-[14px] text-[var(--agency-body)] outline-none"
          />
          <input
            type="text"
            placeholder="Your Company"
            className="flex-1 h-[48px] rounded-[4px] border border-[var(--agency-border)] px-[16px] text-[14px] text-[var(--agency-body)] outline-none"
          />
        </div>
        <div className="flex gap-[20px]">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 h-[48px] rounded-[4px] border border-[var(--agency-border)] px-[16px] text-[14px] text-[var(--agency-body)] outline-none"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="flex-1 h-[48px] rounded-[4px] border border-[var(--agency-border)] px-[16px] text-[14px] text-[var(--agency-body)] outline-none"
          />
        </div>
        <textarea
          placeholder="Your Message"
          className="w-full h-[120px] rounded-[4px] border border-[var(--agency-border)] p-[16px] text-[14px] text-[var(--agency-body)] outline-none resize-none"
        />
        <button
          type="button"
          className="self-start flex items-center justify-center rounded-[4px] bg-[var(--agency-blue)] px-[40px] py-[14px] text-[14px] font-semibold text-white"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
