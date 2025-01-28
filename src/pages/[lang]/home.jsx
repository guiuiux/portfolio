import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="text-start bg-zinc-900">
      <section className="w-full flex flex-col items-center">
        <div className="max-w-[900px] w-full z-20">
          <Header
            textColor="text-zinc-100 font-light"
            uxColor="text-pink-500"
          />
        </div>
        {/* Hero Section */}
        <Hero />
      </section>
      <section className="flex flex-col h-full items-center gap-6 sm:translate-y-0 w-full sm:px-6 px-4">
        <ProjectSection />
      </section>
      <section className="h-full w-full flex flex-col gap-12 items-center p-4 mt-12 sm:mt-32 mb-16">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
