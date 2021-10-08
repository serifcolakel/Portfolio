import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Home from "./components/Home";
export default function Main() {
  return (
    <>
      <link rel="icon" href="/logo.png" />
      <Header />
      <Home />
      <Skills />
      <Footer />
    </>
  );
}

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
