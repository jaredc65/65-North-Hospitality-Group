import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="hero-content">

      <p className="eyebrow">
        NORTH OF ORDINARY HOSPITALITY
      </p>

      <h1>
        Welcome to the
        <br />
        65 North Family
      </h1>

      <p className="hero-description">
        We're excited to have you join our team.
        Complete your onboarding and begin your
        journey with Alaska's premier hospitality group.
      </p>

      <Button text="Begin Your Journey" />

      <div className="scroll-indicator">
        ↓
      </div>

    </div>
  );
}

export default Hero;