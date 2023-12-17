import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./projects.module.css";

const Project = ({ logo, name, description, githubLink, deployedLink }) => {
  return (
    <Card className={`${styles.project} mb-4 col-12 mx-auto`}>
      <Card.Title className={`${styles.largeTitle} text-center`}>
        {name}
      </Card.Title>
      <Card.Img
        variant="top"
        src={logo}
        alt={name}
        className={styles.cardImage}
      />
      <Card.Body>
        <Card.Text className={styles.description}>{description}</Card.Text>
        <div className={styles.middleSection}>
          <Button
            className={`${styles.button} mb-3`}
            variant="primary"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            className={styles.button2}
            variant="success"
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Project;
