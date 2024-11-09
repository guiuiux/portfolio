import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";
import heroVid from "../../assets/videos/home.webm";

const Home = () => {
  return (
    <div className="text-start">
      <section>
        <video
          src={heroVid}
          className="absolute inset-0 w-full h-full sm:object-top object-fill -z-10"
          autoPlay
          muted
          loop
        />
        <Header />
        <Hero />
      </section>
      <section className="flex flex-col h-full -translate-y-[152px] items-center gap-6 sm:translate-y-0 w-full sm:px-6 px-4">
        <ProjectSection />
      </section>
      <section className="h-full w-full flex flex-col gap-12 items-center p-4 mt-12 sm:mt-32 mb-16">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
