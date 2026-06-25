import "./Navbar.css";

function App() {
  return (
    <>
      <header className="hero">

        <div className="overlay"></div>

        <nav className="navbar">

          <div className="logo">
            65 NORTH
          </div>

          <ul>
            <li>Home</li>
            <li>Onboarding</li>
            <li>Training</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>

        </nav>

        <div className="hero-content">

          <h4>North of Ordinary Hospitality</h4>

          <h1>
            Welcome to the
            <br />
            65 North Family
          </h1>

          <p>
            Your journey starts here.
          </p>

          <button>
            Begin Your Journey
          </button>

        </div>

      </header>
    </>
  )
}

export default App