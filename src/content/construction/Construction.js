/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import { CardDeck, Card } from "react-bootstrap";
import constructionDataSet from "../js/constructionData.js";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

import styled from "@emotion/styled";

function Construction(props) {
  let [cardContent, setcardContent] = useState(constructionDataSet);

  const MapDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 1px solid;
      margin: 10px;
      padding: 5px 10px 5px 10px;
      border-radius: 5px;
    }
  `;

  return (
    <>
      <MapDiv>
        <i class="bi bi-geo-alt h3"></i>
        <p className="h5"> 서울시 광진구 화양동</p>
        <button>주소변경</button>

        <Dropdown size="sm" as={ButtonGroup}>
          <Button variant="Secondary" id="amount" style={{ border: "none" }}>
            반경 10km
          </Button>
          <Dropdown.Toggle
            split
            variant="Secondary"
            id="dropdown-split-basic"
            style={{ border: "none" }}
          />
          <Dropdown.Menu>
            <Dropdown.Item>반경 5km</Dropdown.Item>
            <Dropdown.Item>반경 10km</Dropdown.Item>
            <Dropdown.Item>반경 30km</Dropdown.Item>
            <Dropdown.Item>30km 이상</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </MapDiv>

      <div
        className="mt-5"
        onClick={() => {
          props.setconstructSelect(true);
        }}
      >
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
        <Card.Img variant="top" src={params.content.src} />
        <Card.Body style={{ padding: "0.5rem" }}>
          <Card.Title
            className="text-left"
            style={{
              marginBottom: "5px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {params.content.name}
          </Card.Title>
          <Card.Text className="text-left" style={{ fontSize: "12px" }}>
            {params.content.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Construction;
