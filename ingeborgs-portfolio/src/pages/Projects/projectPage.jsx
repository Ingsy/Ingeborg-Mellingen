import React from "react";
import Project from "./index.jsx"; // Import the Project component

const ProjectsPage = () => {
  const projects = [
    {
      name: "BeFriendMe",
      logo: "project1_logo.png",
      description: "Description for Project 1",
      githubLink: "https://github.com/project1",
      deployedLink: "https://project1.com",
    },
    {
      name: "Auction Site",
      logo: "project2_logo.png",
      description: "Description for Project 2",
      githubLink: "https://github.com/project2",
      deployedLink: "https://project2.com",
    },
    {
      name: "Online Shop",
      logo: "project2_logo.png",
      description: "Description for Project 2",
      githubLink: "https://github.com/project2",
      deployedLink: "https://project2.com",
    },
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
