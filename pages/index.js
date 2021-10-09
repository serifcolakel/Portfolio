import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Home from "../components/Home";
import Head from "next/head";
import ContactMe from "./../components/ContactMe";

export default function Main() {
  return (
    <>
      <Head>
        <title>Serif Colakel Portfolio</title>
      </Head>
      <Header />
      <Home />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}
