import { About, Footer, Header, Skills, Work, Testimonials } from "./container";
import { Navbar } from "./components";
import "./App.scss";

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
