import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Head from "next/head";
import ContactMe from "./../components/ContactMe";
import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import React, { useState } from "react";

export const MenuState = React.createContext(false);

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuState.Provider value={isOpen}>
      <Head>
        <title>Serif Colakel Portfolio</title>
      </Head>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </MenuState.Provider>
  );
}
