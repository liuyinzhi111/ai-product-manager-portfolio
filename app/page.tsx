import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import HowIBuild from "@/components/sections/HowIBuild";
import Projects from "@/components/sections/Projects";
import Notes from "@/components/sections/Notes";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <HowIBuild />
      <Projects />
      <Notes />
      <Contact />
    </>
  );
}
