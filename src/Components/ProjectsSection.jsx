import React from "react";
import { Element } from "react-scroll";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import projectFour from "../assets/projectFour.png";
import projectFive from "../assets/projectFive.png";
import projectTen from "../assets/projectTen.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Exclusive E-Commerce Site",
      tech: "React, Redux, Tailwind, Firebase",
      image: projectTen,
      live: "https://ecommerce-project-site.vercel.app/",
      details: [
        "Built a responsive ecommerce interface with cart and wishlist functionality",
        "Authentication and permission control",
        "Implemented Redux for global state management",
      ],
    },
    {
      title: "CleanCity Plus",
      tech: "React, LocalStorage, Rechart",
      image: projectFive,
      live: "https://cleancity-seven.vercel.app/",
      details: [
        "Created a Waste tracking site that shows visual analysis of wastes log",
        "Let users log wastes and track progress and receive an achievement badge",
        "Clean UI designed for simplicity and usability",
      ],
    },
    {
      title: "Ticket Manager Pro ",
      tech: "React, Tailwindcss, LocalStorage",
      image: projectFour,
      live: "https://ticket-app-react-one.vercel.app/",
      details: [
        "Designed and developed a issue ticketing app",
        "Role based accessibility with dashboard monitoring",
        "LocalStorage for storage and CRUD functionality",
      ],
    },
    
  ];

  return (
    <Element name="projects" className="container my-5">
      <h3 className="fw-bold text-center mb-4">Projects</h3>
      <div className="row justify-content-center">
        {projects.map((project, i) => (
          <div key={i} className="col-12 col-md-6 mb-4 d-flex" >
            <div
              className="card shadow-sm border-0 rounded-3 p-3 w-100"
              style={{ backgroundColor: "#F9FAFB" }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded mb-3"
              />

              {/* Header */}
              <div className="mb-2">
                <h5 className="fw-bold mb-1">{project.title}</h5>
                <p className="mb-0 text-muted">
                  Tech: {project.tech}
                </p>
              </div>

              {/* Details */}
              <ul className="list-unstyled mb-3">
                {project.details.map((item, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start mb-2"
                  >
                    <CheckCircleIcon
                      color="primary"
                      className="me-2 mt-1"
                      fontSize="small"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Live Link */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-auto"
              >
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default ProjectsSection;
