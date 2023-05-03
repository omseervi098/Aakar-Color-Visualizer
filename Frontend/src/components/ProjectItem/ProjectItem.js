import React from "react";
import {Card} from "react-bootstrap";
import "./ProjectItem.css";

function ProjectItem(props) {
    return (
        <Card className="text-white text-center project-card" >
            <Card.Img src={props.img} alt="Project image"/>
            <Card.ImgOverlay>
                <Card.Title className="card-title">{props.title}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    )
};

export default ProjectItem;
