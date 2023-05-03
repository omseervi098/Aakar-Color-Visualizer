import React from "react";
import './About.css';
import {Container, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";


function About() {
    return (
        <Container fluid className="p-0">
            <h1 className="about-title m-5">About Us</h1>
            <Image src="./images/about.jpg" fluid />
            <Container className="col-lg-6 mx-auto px-4 py-5 my-5 text-center">
             <p className="lead about-text">
                We specialize in Residential Condos, Townhomes, Duplexes and Single Detached home design, remodels and renovations.
                Interior Design Studio is a unique company that combines both Interior Design and Project Management
                (same role as General Contractor) expertise under one roof. By specializing in both
                the design and build role we are able to provide a single point of contact which helps
                eliminate miscommunication between multiple professionals and ultimately providing a simple,
                streamlined experience for our clients. Our approach also allows us to take full ownership of
                every aspect of the project from the Design/planning, Budgeting/bid, Scheduling and Construction Management
                which results in the most effective execution.
             </p>
                <NavLink className="btn btn-secondary btn-lg contact-button" to="/contact">Contact us for a free estimate</NavLink>
            </Container>
        </Container>
    )
}

export default About;
