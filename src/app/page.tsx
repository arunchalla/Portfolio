import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollNav from "@/components/ScrollNav";
import ScrollReset from "@/components/ScrollReset";
import PageLoader from "@/components/PageLoader";
import DotNav from "@/components/DotNav";

export default function Home() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ScrollReset />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        <ScrollNav />
        <DotNav />
      </main>
    </PageLoader>
  );
}
