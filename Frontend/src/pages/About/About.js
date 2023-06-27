import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";

import { Parallax } from "react-parallax";
import { Row, Container, Image } from "react-bootstrap";
function About() {
  return (
    <Container fluid className="p-0">
      <Parallax
        className="parallax-container"
        bgImage="../images/about.jpg"
        strength={600}
      >
        <Container className="parallax-text">
          <Container className="parallax-title text-center">
            <h1 className="text-center projects-title">About Us</h1>
          </Container>
        </Container>
      </Parallax>
      <Container className="col-lg-10 mx-auto px-4  my-5 ">
        <p className="lead about-text">
          We specialize in Residential Condos, Townhomes, Duplexes and Single
          Detached home design, remodels and renovations. Interior Design Studio
          is a unique company that combines both Interior Design and Project
          Management (same role as General Contractor) expertise under one roof.
          By specializing in both the design and build role we are able to
          provide a single point of contact which helps eliminate
          miscommunication between multiple professionals and ultimately
          providing a simple, streamlined experience for our clients. Our
          approach also allows us to take full ownership of every aspect of the
          project from the Design/planning, Budgeting/bid, Scheduling and
          Construction Management which results in the most effective execution.
        </p>
        <NavLink
          className="btn btn-secondary btn-lg contact-button"
          to="/contact"
        >
          Contact us for a free estimate
        </NavLink>
      </Container>
    </Container>
  );
}

export default About;
