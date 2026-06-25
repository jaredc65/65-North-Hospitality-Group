import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <header className="hero">

      <div className="overlay"></div>

      <Navbar />

      <Hero />

    </header>
  );
}

export default App;