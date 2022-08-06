import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flutterwave from "../../Assets/Projects/flutterwave.png";
import navigation from "../../Assets/Projects/navigation.png";
import rnblocks from "../../Assets/Projects/rnblocks.png";
import trivia from "../../Assets/Projects/trivia.png";
import blocks from "../../Assets/Projects/blocks.png";

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
              imgPath={rnblocks}
              isBlog={false}
              title="React-Native-Blocks"
              description="An opinionated template to bootstrap your next React Native Dapp with architecture and boilerplate to let you focus on writing features right away."
              ghLink="https://github.com/kpose/react-native-blocks"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blocks}
              isBlog={false}
              title="Blocks"
              description="Blocks is a collection of blockchain Dapps built with React Native while leveraging Ethers.js, Solidity, Hardhat and a collection of tools. Each dapp lives on it's own branch, just pull and run."
              ghLink="https://github.com/kpose/blocks"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navigation}
              isBlog={false}
              title="React Navigation"
              description="I have contributed (and still contributing) immensely to the readability, understanding and general usage of the React Navigation Library since version 5."
              ghLink="https://github.com/react-navigation/react-navigation.github.io"
              // demoLink="https://navigation.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutterwave}
              isBlog={false}
              title="Flutterwave-React-Native"
              description="Easily implement Flutterwave for payments in your React Native appliction. This library supports both Android and iOS, and use the Flutterwave's V3 API."
              ghLink="https://github.com/Flutterwave/React-Native"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trivia}
              isBlog={false}
              title="Trivia24"
              description="Trivia24 is an iOS contest app built with React Native and Expo. This app will allow you to run a trivia contest for a group of people. One person, the admin, will be in control of when a new question is sent to the players. The players will then answer, and a leaderboard will be updated. When the admin chooses, the game can be ended"
              ghLink="https://github.com/kpose/Trivia24"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
