import React from "react";
import Project from "./index.jsx"; // Import the Project component

const ProjectsPage = () => {
  const projects = [
    {
      name: "Holidaze",
      logo: "Holidaze.png",
      description:
        "Holidaze is a web application designed to provide users with a seamless experience for managing venues and bookings. Whether you're a venue manager or a user looking to book a space, Holidaze offers a user-friendly interface to meet your needs.",
      githubLink: "https://github.com/Ingsy/Holidaze/tree/master/holidaze",
      deployedLink: "https://soft-faun-5457e1.netlify.app",
    },
    {
      name: "Auction Site",
      logo: "BID.png",
      description:
        "BID is an auction website. A registered user may create, view, search and add a bid to other users listings. HTTP methods: POST, GET, PUT, and DELETE to enable CRUD operations. Static host: Build and deployed to github pages",
      githubLink: "https://github.com/Ingsy/ingsy.github.io",
      deployedLink: "https://ingsy.github.io/",
    },
    {
      name: "Online Shop",
      logo: "OnlineShop.png",
      description: "Online Shop is an eCom store build with React",
      githubLink:
        "https://github.com/Ingsy/Javascript-Framework/tree/main/javascript-framework",
      deployedLink: "https://glowing-quokka-a315eb.netlify.app/",
    },
  ];
  return (
    <div className="text-center m-3">
      <h1>My Projects</h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-12 col-lg-4 mb-4">
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
