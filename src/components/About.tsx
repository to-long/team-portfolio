import { Facebook, Twitter, Youtube, Linkedin, type LucideIcon } from "lucide-react";

const socialIcons: LucideIcon[] = [Facebook, Twitter, Youtube, Linkedin];

export default function About() {
  return (
    <section
      id="about"
      className="flex gap-[60px] px-[120px] py-[80px] bg-[var(--agency-blue-light)]"
    >
      <div className="flex flex-col gap-[20px] flex-1">
        <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
          ABOUT US
        </span>
        <h2 className="text-[36px] font-bold leading-[1.3] text-[var(--agency-heading)]">
          Technology partner you can trust
        </h2>
        <p className="text-[16px] leading-[1.7] text-[var(--agency-body)]">
          At Talentify, we combine deep technical expertise with a passion for
          innovation to help businesses thrive in the digital era. From building
          custom web and mobile solutions to providing skilled IT professionals,
          we&apos;re your all-in-one technology partner.
        </p>
        <p className="text-[16px] leading-[1.7] text-[var(--agency-body)]">
          Our team of experienced developers, designers, and project managers
          work closely with you to deliver solutions that drive real business
          results.
        </p>
      </div>
      <div className="flex flex-col gap-[24px] flex-1">
        <h3 className="text-[20px] font-semibold text-[var(--agency-heading)]">
          Connect With Us
        </h3>
        <p className="text-[16px] leading-[1.7] text-[var(--agency-body)]">
          Follow us on social media to stay updated with our latest projects and
          industry insights.
        </p>
        <div className="flex gap-[12px]">
          {socialIcons.map((Icon, i) => (
            <span
              key={i}
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[var(--agency-border)]"
            >
              <Icon className="w-[18px] h-[18px] text-[var(--agency-body)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
