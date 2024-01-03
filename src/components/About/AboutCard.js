import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jaffy Mellejor Colitoy </span>
            from <span className="purple"> Surigao City, Philippines.</span>
            <br />
            <br />
            I am currently looking for a job as a Full Stack Web Developer.
            <br />
            <br />
            Recent graduate at Kodego with the ability to learn and collaborate in rapid changing programming enviroment. Eager to tackle web development and design challenges to achieve lasting impact on user experience.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening and producing music.
            </li>
            <li className="about-activity">
              <ImPointRight /> Being a full time Dad to two kids. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
