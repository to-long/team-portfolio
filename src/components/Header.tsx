const navLinks = ["About", "Services", "Team", "Blog"];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-[120px] h-[80px] bg-[var(--agency-white)] border-b border-[var(--agency-border)]">
      <span className="text-[24px] font-bold text-[var(--agency-heading)]">
        Talentify
      </span>

      <nav className="flex items-center gap-[32px] h-full">
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
        className="flex items-center justify-center rounded-[4px] bg-[var(--agency-blue)] px-[28px] py-[12px] text-[14px] font-semibold text-white"
      >
        Contact Us
      </a>
    </header>
  );
}
