import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { popularLeftDataSet, popularRightDataSet } from "../js/popularData";
import { Card, CardGroup } from "react-bootstrap";

function TodayKnowhow() {
  let LeftArea = css`
    padding-left: 0px;
  `;

  let RightArea = css`
    padding-right: 0px;
  `;

  const PopularKnowhowGrid = styled.div`
    height: auto;
    width: 100%;
  `;

  let [cardContent1, setcardContent1] = useState(popularLeftDataSet);

  return (
    <div className="mt-5">
      <p className="h3 text-left pb-3" style={{ fontWeight: "bold" }}>
        오늘의 노하우
      </p>
      <PopularKnowhowGrid>
        <div style={{ gridArea: "lf / lf / lf / lf" }}>
          <CardGroup>
            {cardContent1.map((content, idx) => (
              <CardLeftContent key={idx} content={content} />
            ))}
          </CardGroup>
        </div>
      </PopularKnowhowGrid>
    </div>
  );
}

function CardLeftContent(params) {
  return (
    <>
      <Card style={{ height: "100%" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={params.content.src} />
        </a>
        <Card.Body style={{ padding: "0.5rem" }}>
          <Card.Title className="text-left">{params.content.title}</Card.Title>
          <Card.Text className="text-left">
            <i
              className="bi bi-person-circle p-2 h2"
              style={{ color: "grey" }}
            ></i>
            {params.content.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default TodayKnowhow;
