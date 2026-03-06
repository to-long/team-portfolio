import { ArrowRight } from "lucide-react";

const team = [
  {
    image: "/images/team-coriss.jpg",
    name: "Coriss Ambady",
    role: "Web Developer",
  },
  {
    image: "/images/team-glorius.jpg",
    name: "Glorius Cristian",
    role: "App Developer",
  },
  {
    image: "/images/team-jackie.jpg",
    name: "Jackie Sanders",
    role: "UI/UX Designer",
  },
  {
    image: "/images/team-david.jpg",
    name: "David Park",
    role: "Mobile Developer",
  },
  {
    image: "/images/team-lisa.jpg",
    name: "Lisa Chen",
    role: "Project Manager",
  },
  {
    image: "/images/team-james.jpg",
    name: "James Wilson",
    role: "Backend Engineer",
  },
];

function MemberCard({ m }: { m: (typeof team)[number] }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <img
        src={m.image}
        alt={m.name}
        className="w-full h-[260px] object-cover rounded-[8px]"
      />
      <div className="flex flex-col items-center gap-[4px] pt-[16px]">
        <span className="text-[18px] font-semibold text-[var(--agency-heading)]">
          {m.name}
        </span>
        <span className="text-[14px] text-[var(--agency-body)]">{m.role}</span>
      </div>
    </div>
  );
}

export default function Team() {
  return (
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
        <div className="flex gap-[32px]">
          {team.slice(0, 3).map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
        <div className="flex gap-[32px]">
          {team.slice(3).map((m) => (
            <MemberCard key={m.name} m={m} />
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
  );
}
