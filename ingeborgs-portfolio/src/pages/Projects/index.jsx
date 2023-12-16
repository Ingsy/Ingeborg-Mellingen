import React from "react";
import styles from "./projects.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Project = ({ logo, name, description, githubLink, deployedLink }) => {
  return (
    <Card className={`${styles.project} col-sm-12 mb-4`}>
      <Card.Img variant="top" src={logo} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
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
