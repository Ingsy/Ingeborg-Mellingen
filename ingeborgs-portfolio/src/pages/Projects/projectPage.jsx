import React from "react";
import Project from "./index.jsx"; // Import the Project component

const ProjectsPage = () => {
  const projects = [
    {
      name: "BeFriendMe",
      logo: "project1_logo.png",
      description:
        "BeFriendMe is a social media application. The API routes requires authorisation via JWT (JSON Web Tokens). localStorage is used for storing JWT  HTTP methods: POST, GET, PUT, and DELETE to enable CRUD operations.",
      githubLink: "https://github.com/project1",
      deployedLink: "https://project1.com",
    },
    {
      name: "Auction Site",
      logo: "BID.png",
      description:
        "BID is an auction website. A registered user may create, view, search and add a bid to other users listings. HTTP methods: POST, GET, PUT, and DELETE to enable CRUD operations. Static host: Build and deployed to github pages",
      githubLink: "https://github.com/Ingsy/ingsy.github.io",
      deployedLink: "ingsy.github.io/",
    },
    {
      name: "Online Shop",
      logo: "Shop.png",
      description: "Online Shop is an eCom store build with React",
      githubLink:
        "https://github.com/Ingsy/Javascript-Framework/tree/main/javascript-framework",
      deployedLink: "https://glowing-quokka-a315eb.netlify.app/",
    },
  ];

  return (
    <div className="text-center m-3">
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
