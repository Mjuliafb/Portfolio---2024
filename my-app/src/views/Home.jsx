import React from "react";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Technologies } from "../components/Technologies";
import { Portfolio } from "../components/Portfolio";
import { Projects } from "../components/Projects";
import { ContactData } from "../components/ContactData";
import { Footer } from "../components/Footer";
import "../styles/home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Projects />
      <ContactData />
      <Footer />
    </div>
  );
};
