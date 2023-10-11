import React from "react";
import styles from "./projects.module.css"; // Import a CSS file for styling

const Project = ({ logo, name, description, githubLink, deployedLink }) => {
  return (
    <div className={styles.projects}>
      <img src={logo} alt={name} />
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a
        className={styles.projectLink}
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className={styles.projectLink}
        href={deployedLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Deployed
      </a>
    </div>
  );
};

export default Project;
