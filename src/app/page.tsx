import {
  Download,
  ArrowRight,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

/* ── data ───────────────────────────────────────────────────────── */

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1601485770245-9abd905abc7b?auto=format&w=800&q=80",
    title: "Website Development",
    desc: "Custom websites built with modern frameworks like Next.js and React — fast, responsive, and optimized for conversions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&w=800&q=80",
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences and drive engagement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1758691736580-a41e0cfe9e9f?auto=format&w=800&q=80",
    title: "IT Talent Resource",
    desc: "Access top-tier developers, designers, and engineers on demand. We match the right IT talent to your project needs.",
  },
];

const cases = [
  {
    image:
      "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?auto=format&w=800&q=80",
    tag: "Website Development",
    title: "FinTech Dashboard Platform",
    desc: "Built a real-time analytics dashboard for a fintech startup, handling 10M+ daily transactions with sub-second response times.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623915695133-d624f7759fd0?auto=format&w=800&q=80",
    tag: "Mobile Development",
    title: "HealthCare Patient App",
    desc: "Cross-platform mobile app for a healthcare provider, enabling appointment booking, telemedicine, and health record access for 500K+ users.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?auto=format&w=800&q=80",
    tag: "Website Development",
    title: "E-Commerce Marketplace",
    desc: "Full-stack e-commerce platform with AI-powered recommendations, multi-vendor support, and integrated payment processing.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1759884247142-028abd1e8ac2?auto=format&w=800&q=80",
    tag: "IT Talent Resource",
    title: "Enterprise Dev Team Scaling",
    desc: "Provided a dedicated team of 25+ engineers to a Fortune 500 company, accelerating their digital transformation roadmap by 18 months.",
  },
];

const team = [
  {
    image:
      "https://images.unsplash.com/photo-1767175620484-1ed37931a0d1?auto=format&w=400&q=80",
    name: "Coriss Ambady",
    role: "Web Developer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1747324831504-5ee9aa8eec59?auto=format&w=400&q=80",
    name: "Glorius Cristian",
    role: "App Developer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616166018818-2d1007e73ded?auto=format&w=400&q=80",
    name: "Jackie Sanders",
    role: "UI/UX Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1658722449397-0f2e9db9d3a4?auto=format&w=400&q=80",
    name: "David Park",
    role: "Mobile Developer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641894252843-9794796577be?auto=format&w=400&q=80",
    name: "Lisa Chen",
    role: "Project Manager",
  },
  {
    image:
      "https://images.unsplash.com/photo-1733433305412-a87e29c25ae5?auto=format&w=400&q=80",
    name: "James Wilson",
    role: "Backend Engineer",
  },
];

const testimonials = [
  {
    quote:
      "\u201CThe team delivered an exceptional website that exceeded our expectations. Their attention to detail and creative approach made all the difference.\u201D",
    avatar:
      "https://images.unsplash.com/photo-1746695387450-309c66e10410?auto=format&w=100&q=80",
    name: "Sarah Johnson",
    company: "CEO, TechStart",
  },
  {
    quote:
      "\u201CWorking with this agency was a game-changer for our brand. They understood our vision perfectly and brought it to life beautifully.\u201D",
    avatar:
      "https://images.unsplash.com/photo-1758523671918-cfe797ba54cb?auto=format&w=100&q=80",
    name: "Michael Chen",
    company: "Founder, Growthly",
  },
  {
    quote:
      "\u201CTalentify provided us with an incredible dev team that integrated seamlessly. They delivered our mobile app ahead of schedule with outstanding quality.\u201D",
    avatar:
      "https://images.unsplash.com/photo-1759607092868-004c71191316?auto=format&w=100&q=80",
    name: "Emily Rodriguez",
    company: "CTO, ScaleUp Inc",
  },
];

const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1636569519531-791141bd7dcc?auto=format&w=800&q=80",
    title: "Exploring the MERN Stack for Modern Web Apps",
    desc: "Discover how the MERN stack can help you build scalable and performant web applications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1649294162230-22e88288a324?auto=format&w=800&q=80",
    title: "Test Webhooks for Seamless Integrations",
    desc: "Learn the best practices for testing webhooks and ensuring reliable data exchange.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641862039942-5815d8f74938?auto=format&w=800&q=80",
    title: "The Power of UI/UX in Digital Products",
    desc: "Great UI/UX design transforms how users interact with your product and drives engagement.",
  },
];

/* ── page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-[120px] h-[80px] bg-[var(--agency-white)] border-b border-[var(--agency-border)]">
        <span className="text-[24px] font-bold text-[var(--agency-heading)]">
          Talentify
        </span>

        <nav className="flex items-center gap-[32px] h-full">
          {["About", "Services", "Team", "Blog"].map((l) => (
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

      {/* Hero */}
      <section className="flex items-center gap-[60px] px-[120px] py-[80px] bg-[var(--agency-white)]">
        <div className="flex flex-col gap-[24px] flex-1">
          <h1 className="text-[48px] font-bold leading-[1.2] text-[var(--agency-heading)]">
            IT Solutions That Empower Your Business Growth
          </h1>
          <p className="text-[16px] leading-[1.7] text-[var(--agency-body)]">
            Talentify delivers end-to-end IT services — from custom website and
            mobile app development to connecting you with top-tier tech talent.
            We help businesses scale with reliable, modern technology solutions.
          </p>
          <div className="flex items-center gap-[16px]">
            <a
              href="#services"
              className="flex items-center justify-center rounded-[4px] bg-[var(--agency-blue)] px-[32px] py-[14px] text-[16px] font-semibold text-white"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-[8px] px-[24px] py-[14px] text-[16px] font-medium text-[var(--agency-blue)]"
            >
              <Download className="w-[18px] h-[18px]" />
              Get a Free Consultation
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1531746790095-e5995cdd25d4?auto=format&w=800&q=80"
          alt="AI technology and human interaction"
          className="w-[560px] h-[440px] object-cover rounded-[8px]"
        />
      </section>

      {/* About */}
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
            innovation to help businesses thrive in the digital era. From
            building custom web and mobile solutions to providing skilled IT
            professionals, we&apos;re your all-in-one technology partner.
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
            Follow us on social media to stay updated with our latest projects
            and industry insights.
          </p>
          <div className="flex gap-[12px]">
            {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
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

      {/* Services */}
      <section
        id="services"
        className="flex flex-col items-center gap-[48px] px-[120px] py-[80px] bg-[#4A6CF7]"
      >
        <div className="flex flex-col items-center gap-[16px] max-w-[600px]">
          <span className="text-[14px] font-semibold tracking-[2px] text-white">
            WHAT WE DO
          </span>
          <h2 className="text-[36px] font-bold leading-[1.3] text-white text-center">
            Our Services — Built for Your Success
          </h2>
        </div>
        <div className="flex gap-[32px] w-full">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col flex-1 rounded-[8px] overflow-hidden bg-white"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="flex flex-col gap-[12px] p-[24px]">
                <h3 className="text-[20px] font-semibold text-[#212B36]">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#637381]">
                  {s.desc}
                </p>
                <span className="flex items-center gap-[6px] text-[14px] font-medium text-[#212B36]">
                  View Details <ArrowRight className="w-[16px] h-[16px]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Cases */}
      <section
        className="flex flex-col items-center gap-[48px] px-[120px] py-[80px] bg-[var(--agency-blue-light)]"
      >
        <div className="flex flex-col items-center gap-[12px] max-w-[600px]">
          <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
            PROJECT CASES
          </span>
          <h2 className="text-[36px] font-bold text-[var(--agency-heading)] text-center">
            Our Recent Work
          </h2>
          <p className="text-[16px] text-[var(--agency-body)] text-center">
            Explore how we&apos;ve helped businesses transform with technology
          </p>
        </div>
        <div className="flex flex-col gap-[32px] w-full">
          {/* Row 1 */}
          <div className="flex gap-[32px]">
            {cases.slice(0, 2).map((c) => (
              <div
                key={c.title}
                className="flex flex-col flex-1 rounded-[8px] overflow-hidden border border-[var(--agency-border)] bg-[var(--agency-white)]"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="flex flex-col gap-[8px] p-[24px]">
                  <span className="text-[12px] font-semibold text-[var(--agency-blue)]">
                    {c.tag}
                  </span>
                  <h3 className="text-[20px] font-semibold text-[var(--agency-heading)]">
                    {c.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-[32px]">
            {cases.slice(2).map((c) => (
              <div
                key={c.title}
                className="flex flex-col flex-1 rounded-[8px] overflow-hidden border border-[var(--agency-border)] bg-[var(--agency-white)]"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-[240px] object-cover"
                />
                <div className="flex flex-col gap-[8px] p-[24px]">
                  <span className="text-[12px] font-semibold text-[var(--agency-blue)]">
                    {c.tag}
                  </span>
                  <h3 className="text-[20px] font-semibold text-[var(--agency-heading)]">
                    {c.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-[var(--agency-body)]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="flex flex-col items-center gap-[48px] px-[120px] py-[80px] bg-[var(--agency-white)]"
      >
        <div className="flex flex-col items-center gap-[12px] max-w-[500px]">
          <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
            TEAM
          </span>
          <h2 className="text-[36px] font-bold text-[var(--agency-heading)] text-center">
            Our Awesome Team
          </h2>
        </div>
        <div className="flex flex-col gap-[32px] w-full">
          {/* Row 1 */}
          <div className="flex gap-[32px]">
            {team.slice(0, 3).map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center flex-1"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-[260px] object-cover rounded-[8px]"
                />
                <div className="flex flex-col items-center gap-[4px] pt-[16px]">
                  <span className="text-[18px] font-semibold text-[var(--agency-heading)]">
                    {m.name}
                  </span>
                  <span className="text-[14px] text-[var(--agency-body)]">
                    {m.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex gap-[32px]">
            {team.slice(3).map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center flex-1"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-[260px] object-cover rounded-[8px]"
                />
                <div className="flex flex-col items-center gap-[4px] pt-[16px]">
                  <span className="text-[18px] font-semibold text-[var(--agency-heading)]">
                    {m.name}
                  </span>
                  <span className="text-[14px] text-[var(--agency-body)]">
                    {m.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          href="#"
          className="flex items-center gap-[8px] rounded-[4px] border border-[var(--agency-blue)] px-[32px] py-[14px] text-[14px] font-semibold text-[var(--agency-blue)]"
        >
          See All Team Members
          <ArrowRight className="w-[16px] h-[16px]" />
        </a>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-[600px] h-px bg-[var(--agency-border)]" />
      </div>

      {/* Testimonials */}
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

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-[600px] h-px bg-[var(--agency-border)]" />
      </div>

      {/* Blog */}
      <section
        id="blog"
        className="flex flex-col items-center gap-[48px] px-[120px] py-[80px] bg-[var(--agency-white)]"
      >
        <div className="flex flex-col items-center gap-[12px] max-w-[500px]">
          <span className="text-[14px] font-semibold tracking-[2px] text-[var(--agency-blue)]">
            BLOG
          </span>
          <h2 className="text-[36px] font-bold text-[var(--agency-heading)] text-center">
            Latest News &amp; Articles
          </h2>
        </div>
        <div className="flex gap-[32px] w-full">
          {blogPosts.map((p) => (
            <div
              key={p.title}
              className="flex flex-col flex-1 rounded-[8px] overflow-hidden bg-[var(--agency-white)]"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="flex flex-col gap-[12px] p-[24px]">
                <h3 className="text-[18px] font-semibold leading-[1.4] text-[var(--agency-heading)]">
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

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-[600px] h-px bg-[var(--agency-border)]" />
      </div>

      {/* Contact */}
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

      {/* Footer */}
      <footer className="flex flex-col gap-[40px] px-[120px] py-[60px] bg-[#4A6CF7]">
        <div className="flex gap-[60px]">
          <div className="flex flex-col gap-[16px] flex-1">
            <span className="text-[24px] font-bold text-white">Talentify</span>
            <p className="text-[14px] leading-[1.7] text-[#D6DFFF] max-w-[280px]">
              Talentify is a full-service IT company providing website
              development, mobile development, and IT talent resourcing
              solutions.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[16px] font-semibold text-white">
              Services
            </span>
            {["Web Development", "Mobile Development", "IT Staffing", "Consulting"].map(
              (l) => (
                <span key={l} className="text-[14px] text-[#D6DFFF]">
                  {l}
                </span>
              )
            )}
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[16px] font-semibold text-white">
              Company
            </span>
            {["About Us", "Careers", "Blog", "Contact"].map((l) => (
              <span key={l} className="text-[14px] text-[#D6DFFF]">
                {l}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[16px] font-semibold text-white">
              Support
            </span>
            {[
              "Help Center",
              "Documentation",
              "Privacy Policy",
              "Terms of Service",
            ].map((l) => (
              <span key={l} className="text-[14px] text-[#D6DFFF]">
                {l}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-[#3B5BD9]" />
        <div className="flex items-center justify-center">
          <span className="text-[14px] text-[#D6DFFF]">
            © 2024 Talentify. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
