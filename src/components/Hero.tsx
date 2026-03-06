import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[60px] px-[20px] md:px-[120px] py-[40px] md:py-[80px] bg-[var(--agency-white)]">
      <div className="flex flex-col gap-[24px] lg:w-1/2 xl:w-7/12">
        <h1 className="text-[32px] md:text-[48px] font-bold leading-[1.2] text-[var(--agency-heading)]">
          IT Solutions That Empower Your Business Growth
        </h1>
        <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--agency-body)]">
          Talentifies delivers end-to-end IT services — from custom website and
          mobile app development to connecting you with top-tier tech talent. We
          help businesses scale with reliable, modern technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
          <a
            href="#services"
            className="flex items-center justify-center rounded-[4px] bg-[var(--agency-blue)] px-[32px] py-[14px] text-[15px] md:text-[16px] font-semibold text-white"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-[8px] px-[24px] py-[14px] text-[15px] md:text-[16px] font-medium text-[var(--agency-blue)]"
          >
            <Download className="w-[18px] h-[18px]" />
            Get a Free Consultation
          </a>
        </div>
      </div>
      <img
        src="/images/hero-image-01.webp"
        alt="AI technology and human interaction"
        className="w-full lg:w-1/2 xl:w-5/12 h-auto max-h-[440px] object-contain rounded-[8px]"
      />
    </section>
  );
}
