import "./Section.css";
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

export default Section;