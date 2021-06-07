import React, { useState } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { popularReviewDataSet } from "../js/popularData.js";

function Review() {
  let [cardContent, setcardContent] = useState(popularReviewDataSet);

  return (
    <>
      <div className="mt-5">
        <p className="h3 text-left pb-3" style={{ fontWeight: "bold" }}>
          생생한 시공 리뷰
        </p>

        <CardDeck>
          {cardContent.map((content, idx) => (
            <ReviewContent key={idx} content={content} />
          ))}
        </CardDeck>
      </div>
    </>
  );
}

function ReviewContent(params) {
  return (
    <>
      <Card>
        <a href="/">
          <Card.Img variant="top" src={params.content.src} />
        </a>
        <Card.Body style={{ padding: "0.5rem" }}>
          <Card.Title>
            <i className="bi bi-star-fill" style={{ color: "#CCCC00" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#CCCC00" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#CCCC00" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#CCCC00" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#CCCC00" }}></i>
          </Card.Title>
          <Card.Text className="text-left">{params.content.text}</Card.Text>
          <Card.Title
            className="text-left"
            style={{
              marginBottom: "0px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <i
              className="bi bi-person-circle p-2 h2"
              style={{ color: "grey" }}
            ></i>
            {params.content.name}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default Review;
