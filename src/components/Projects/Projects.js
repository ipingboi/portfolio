import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sassy from "../../Assets/Projects/sassy.png";
import emotion from "../../Assets/Projects/emotion.png";
import koderesto from "../../Assets/Projects/koderesto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sassy}
              isBlog={false}
              title="Sassy Band Website"
              description="A static website for a local band that utilizes HTML, Bootstrap 5 and a little Javascript."
              ghLink="https://github.com/ipingboi/Sassy-band"
              demoLink="https://sassyband.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={koderesto}
              isBlog={false}
              title="KodeResto"
              description="a static fictitious restaurant website that utilizes Bootstrap 5."
              ghLink="https://github.com/ipingboi/KodeResto"
              demoLink="https://koderestodemo.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/ipingboi/AniFlix"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
