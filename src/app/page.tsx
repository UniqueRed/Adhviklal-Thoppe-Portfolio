import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Footer from "@/app/components/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function Home() {
  return (
    <div className="min-h-screen bg-none text-white">
      <div className="fixed top-0 left-0 w-full h-full z-[-2]">
      </div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}