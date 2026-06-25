import "./Navbar.css";
import logo from "../../assets/logos/65north-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="65 North Hospitality Group"
          className="logo-image"
        />
      </div>

      <ul>
        <li>Home</li>
        <li>Onboarding</li>
        <li>Training</li>
        <li>Resources</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;