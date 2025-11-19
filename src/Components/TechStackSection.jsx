import React from "react";
import { Element } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

// Tech logos via Simple Icons CDN
const techStacks = [
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "SCSS", logo: "https://cdn.simpleicons.org/sass/CC6699" },
];

const TechStackSection = () => {
  return (
    <Element name="stacks" id="stacks" className="my-5 text-center">
      <h3 className="fw-bold mb-4">Tech Stack</h3>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center justify-content-center tech-circle"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#f3f4f6",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            title={tech.name}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              style={{ width: "50px", height: "50px" }}
            />
            <small className="mt-2">{tech.name}</small>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default TechStackSection;

