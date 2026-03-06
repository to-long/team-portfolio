import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Team from "@/components/Team";
import Divider from "@/components/Divider";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-[1200px] mx-auto w-full">
        <Hero />
        <About />
        <Services />
        <Cases />
        <Team />
        <Divider />
        <Testimonials />
        <Divider />
        <Blog />
        <Divider />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
