import React from "react";
import styles from "./projects.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Project = ({ logo, name, description, githubLink, deployedLink }) => {
  return (
    <Card className={`${styles.project} mb-4 d-flex flex-column flex-grow-1`}>
      <Card.Body className="d-flex flex-column">
        <Card.Title className={styles.largeTitle}>{name}</Card.Title>
        <Card.Img
          variant="top"
          src={logo}
          alt={name}
          className={styles.cardImage}
        />
        <Card.Text className={`${styles.description} flex-grow-1`}>
          {description}
        </Card.Text>
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
