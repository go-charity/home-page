import About from "@/components/About";
import Contact from "@/components/Contact";
import ContentSection from "@/components/ContentSection";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import data from "@/utils/data.json";

export default function Home() {
  return (
    <main className="app">
      <Header />
      <Landing />
      <About />
      {Array.from(data.contents).map((content, i) => (
        <ContentSection content={content} index={i} key={i} />
      ))}
      <Contact />
    </main>
  );
}
