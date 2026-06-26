import "./BrandShowcase.css";
import Section from "../Section/Section";

function BrandShowcase() {
  return (
    <Section>
      <div className="brand-showcase">

        <h2>Our Family of Brands</h2>

        <p className="brand-intro">
          Four unique experiences. One hospitality family.
        </p>

        <div className="brand-grid">

          <div className="brand-card">
            <div className="brand-logo-placeholder">
              Alaska Salmon Bake Logo
            </div>

            <h3>Alaska Salmon Bake</h3>

            <p>
              Authentic Alaskan Dining Since 1979
            </p>
          </div>

          <div className="brand-card">
            <div className="brand-logo-placeholder">
              Riverside Logo
            </div>

            <h3>Riverside Eats & Drinks</h3>

            <p>
              Fresh Alaska-inspired dining.
            </p>
          </div>

          <div className="brand-card">
            <div className="brand-logo-placeholder">
              Happy Husky Logo
            </div>

            <h3>Happy Husky</h3>

            <p>
              Sit. Stay. Drink.
            </p>
          </div>

        </div>

      </div>
    </Section>
  );
}

export default BrandShowcase;