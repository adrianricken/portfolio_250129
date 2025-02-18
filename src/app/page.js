import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import TransparentFooter from "@/components/TransparentFooter";
import TransparentHeader from "@/components/TransparentHeader";

export default function Home() {
  return (
    <>
      {/* <TransparentHeader /> */}
      <About />
      <Projects />
      {/* Architekturpart */}
      <Contact />
      {/* <TransparentFooter /> */}
    </>
  );
}
