import React from "react";
import styles from "./projects.module.css"; // Import a CSS file for styling

const Project = ({ logo, name, description, githubLink, deployedLink }) => {
  return (
    <div className={styles.project}>
      <img className={styles.projectImg} src={logo} alt={name} />
      <div className={styles.projectInfo}>
        <div className={styles.middleSection}>
          <h3 className={styles.projectName}>{name}</h3>
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
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </div>
  );
};
export default Project;
