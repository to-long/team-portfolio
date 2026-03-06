const navLinks = ["About", "Services", "Team", "Blog"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--agency-white)] border-b border-[var(--agency-border)]">
      <div className="flex items-center justify-between px-[20px] md:px-[120px] h-[60px] md:h-[80px] max-w-[1200px] mx-auto">
        <span className="text-[20px] md:text-[24px] font-bold text-[var(--agency-heading)]">
          Talentifies
        </span>

        <nav className="hidden md:flex items-center gap-[32px] h-full">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[16px] font-medium text-[var(--agency-body)] hover:text-[var(--agency-heading)] transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="flex items-center justify-center rounded-[4px] bg-[var(--agency-blue)] px-[20px] md:px-[28px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] font-semibold text-white"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
