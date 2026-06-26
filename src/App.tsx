import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandShowcase from "./components/BrandShowcase/BrandShowcase";

function App() {
  return (
    <>
      <header className="hero">
        <div className="overlay"></div>

        <Navbar />

        <Hero />
      </header>

      <BrandShowcase />
    </>
  );
}

export default App;