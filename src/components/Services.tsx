import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/images/service-website.jpg",
    title: "Website Development",
    desc: "Custom websites built with modern frameworks like Next.js and React — fast, responsive, and optimized for conversions.",
  },
  {
    image: "/images/service-mobile.jpg",
    title: "Mobile Development",
    desc: "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences and drive engagement.",
  },
  {
    image: "/images/service-talent.jpg",
    title: "IT Talent Resource",
    desc: "Access top-tier developers, designers, and engineers on demand. We match the right IT talent to your project needs.",
  },
];

export default function Services() {
  return (
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
  );
}
