const serviceLinks = ["Web Development", "Mobile Development", "IT Staffing", "Consulting"];
const companyLinks = ["About Us", "Careers", "Blog", "Contact"];
const supportLinks = ["Help Center", "Documentation", "Privacy Policy", "Terms of Service"];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[40px] px-[120px] py-[60px] bg-[#4A6CF7]">
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap-[16px] flex-1">
          <span className="text-[24px] font-bold text-white">Talentify</span>
          <p className="text-[14px] leading-[1.7] text-[#D6DFFF] max-w-[280px]">
            Talentify is a full-service IT company providing website
            development, mobile development, and IT talent resourcing solutions.
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <span className="text-[16px] font-semibold text-white">Services</span>
          {serviceLinks.map(
            (l) => (
              <span key={l} className="text-[14px] text-[#D6DFFF]">
                {l}
              </span>
            )
          )}
        </div>
        <div className="flex flex-col gap-[16px]">
          <span className="text-[16px] font-semibold text-white">Company</span>
          {companyLinks.map((l) => (
            <span key={l} className="text-[14px] text-[#D6DFFF]">
              {l}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          <span className="text-[16px] font-semibold text-white">Support</span>
          {supportLinks.map(
            (l) => (
              <span key={l} className="text-[14px] text-[#D6DFFF]">
                {l}
              </span>
            )
          )}
        </div>
      </div>
      <div className="w-full h-px bg-[#3B5BD9]" />
      <div className="flex items-center justify-center">
        <span className="text-[14px] text-[#D6DFFF]">
          © 2024 Talentify. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
