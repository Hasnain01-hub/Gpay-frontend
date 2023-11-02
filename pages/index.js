import Head from "next/head";
import Image from "next/image";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Feature from "../components/landing/Feature";
import Sale from "../components/landing/Sale";
import Roadmap from "../components/landing/Roadmap";
import Stats from "../components/landing/Stats";
import Market from "../components/landing/Market";
import { Team } from "../components/landing/Team";
import Faq from "../components/landing/Faq";
import Footer from "../components/footer/Footer";
import Blogs from "../components/landing/Blogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Feature />
      <Sale />
      <Stats />
      <Roadmap />
      <Market />
      <Team />
      <Faq />
      <Blogs />
      <Footer />
    </div>
  );
}
