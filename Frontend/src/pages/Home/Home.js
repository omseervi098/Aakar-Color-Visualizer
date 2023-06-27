import React from "react";
import "./Home.css";
import { Parallax } from "react-parallax";
import { Container, Row } from "react-bootstrap";
import projects from "../../projects";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { NavLink } from "react-router-dom";
import Testimonials from "../../components/Testimonial/Testimonials";
import data from "./data.json";
import Hindilogo from "../../assets/Hindilogo.png";
// import WallPaint from "../../components/wall/WallPaint";

function Home() {
  return (
    <Container fluid className="p-0">
      <Parallax
        className="parallax-container"
        bgImage="../images/sofa.jpg"
        strength={500}
      >
        <Container className="parallax-text">
          <Container className="parallax-title text-center">
            <img src={Hindilogo} alt="AAkar" />
          </Container>
        </Container>
      </Parallax>
      <Container fluid className="features-list py-5 text-center ">
        <Container className="col-md-10 mx-auto px-4">
          <h1 className="text-center projects-title">
            Welcome to the new era of product visualization
          </h1>
          <h3>
            Revolutionizing the way retailers and manufacturers sell finishing
            and home decor products with cutting-edge product
            visualization tools.
          </h3>
        </Container>
      </Container>
      <Container fluid className="projects-list">
        <h1 className="text-center projects-title">Our projects</h1>
        <Row lg={1} className="justify-content-center">
          <col></col>
          {projects.map((project) => (
            <ProjectItem
              key={project.key}
              title={project.title}
              img={project.img}
              path={project.path}
            />
          ))}
        </Row>
      </Container>

      {/* <WallPaint /> */}

      <Testimonials testimonialData={data} />
    </Container>
  );
}

export default Home;
