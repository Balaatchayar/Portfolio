import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stackOverflowClone from "../../Assets/Projects/stackoverflowclone.png";
import techinsight from "../../Assets/Projects/techinsight.png";
import geotracker from "../../Assets/Projects/geotracker.png";
import grilli from "../../Assets/Projects/grilli.png";
import mediflow from "../../Assets/Projects/mediflow.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackOverflowClone}
              isBlog={false}
              title="Stack Overflow Clone"
              description="The Stack Overflow Clone is a web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that emulates the core functionalities of the popular Q&A platform, Stack Overflow. fostering a community-driven knowledge-sharing environment."
              ghLink="https://github.com/Balaatchayar/Stackoverflowclone_Mern"
              demoLink="https://stackoverflowclone-mern.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techinsight}
              isBlog={false}
              title="Tech Insights"
              description="Tech Insights is a dynamic and interactive web application designed to facilitate the sharing and management of technology-related blog posts. This platform allows users to authenticate, register, and manage their blog posts with ease."
              ghLink="https://github.com/Balaatchayar/Tech_Insight"
              demoLink="https://tech-insightt.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geotracker}
              isBlog={false}
              title="Geo-Tracker"
              description="Geo-Tracker is a responsive web application built with ReactJS, designed to track IP addresses using geolocation data. It utilizes the IP Geolocation API to fetch and display detailed geolocation data based on user-provided IP addresses."
              ghLink="https://github.com/Balaatchayar/Geo-Tracker"
              demoLink="https://geo-tracker-one.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediflow}
              isBlog={false}
              title="Mediflow Organizer"
              description="Mediflow Organizer developed using the MERN stack. Empowers users to conveniently store and manage their appointment details, eliminating the need for multiple platforms or manual record-keeping. Used to conveniently store and manage appointment details."
              ghLink="https://github.com/Balaatchayar/Mediflow-Organizer"
              demoLink="https://github.com/Balaatchayar/Mediflow-Organizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli"
              description="Grilli is a responsive web platform designed to showcase the offerings of a fictional restaurant. Crafted using HTML, CSS, and JavaScript, this project seamlessly blends aesthetics with functionality, offering users a delightful browsing experience."
              ghLink="https://github.com/Balaatchayar/Grilli_"
              demoLink="https://grillifoods.vercel.app/"
            />
          </Col>  


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
