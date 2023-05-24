import { NextPage } from "next";
import Hero from "../components/home-sections/Hero";
import About from "../components/home-sections/About";
import Contact from "../components/home-sections/Contact";

const Home: NextPage = () => {
  return (
    <div className="content">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
