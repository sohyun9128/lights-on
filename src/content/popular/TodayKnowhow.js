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
    display: grid;
    grid-template-columns: 3fr 10px 1fr;
    grid-auto-rows: auto;
    align-items: center;
    grid-template-areas:
      "lf . rt"
      "lf . rt"
      "lf . rt";
  `;

  let [cardContent1, setcardContent1] = useState(popularLeftDataSet);
  let [cardContent2, setcardContent2] = useState(popularRightDataSet);

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
        <div style={{ gridArea: "rt / rt / rt / rt", alignItems: "center" }}>
          {cardContent2.map((content, idx) => (
            <CardRightContent key={idx} content={content} />
          ))}
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

function CardRightContent(params) {
  return (
    <>
      <a href="/">
        <Card
          style={{
            width: "10rem",
            padding: "5px 10px 5px 10px",
            backgroundColor: "lightgrey",
            color: "black",
            marginBottom: "10px",
          }}
        >
          <Card.Body
            style={{
              padding: "0px",
            }}
          >
            <Card.Text
              className="text-left pb-2"
              style={{ wordBreak: "keep-all" }}
            >
              {params.content.sub}
            </Card.Text>
            <Card.Title className="text-left" style={{ marginBottom: "0px" }}>
              {params.content.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default TodayKnowhow;
