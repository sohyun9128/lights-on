import React, { useState } from "react";
import { CardGroup, Card } from "react-bootstrap";
import { popularDataSet1, popularDataSet2 } from "./js/popularData";

function ContentPopular() {
  let [cardContent1, setcardContent1] = useState(popularDataSet1);
  let [cardContent2, setcardContent2] = useState(popularDataSet2);

  return (
    <>
      <CardGroup>
        {cardContent1.map((content, idx) => (
          <CardContentDiv key={idx} content={content} />
        ))}
      </CardGroup>
      <CardGroup>
        {cardContent2.map((content, idx) => (
          <CardContentDiv key={idx} content={content} />
        ))}
      </CardGroup>
    </>
  );
}

function CardContentDiv(params) {
  return (
    <Card>
      <Card.Img variant="top" src={params.content.src} />
      <Card.Body>
        <Card.Title>{params.content.title}</Card.Title>
        <Card.Text>{params.content.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{params.content.date}</small>
      </Card.Footer>
    </Card>
  );
}

export default ContentPopular;
