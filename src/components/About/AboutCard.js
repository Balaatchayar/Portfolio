import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
 I am <span className="purple">Bala Atchaya R </span>
  
 , a passionate and optimistic computer science engineering student with a keen interest in exploring creative ideas and acquiring new skills. I am eager to tackle real-world challenges as an enthusiastic web developer, focused on innovative, user-centric solutions.
      
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
