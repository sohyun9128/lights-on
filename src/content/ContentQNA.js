import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";
import qnaData from './js/qnaData.js';


function ContentQNA() {
  const [liList, setliList] = useState(qnaData);
  const [liAnswer, setliAnswer] = useState([]);
  
  useEffect(() => {
   let temp = [];
   for (let i = 0; i < liList.length; i++) {
     temp.push(false);
   }
   setliAnswer(temp);
  }, []);

  return (
    <Accordion>
      {liList.map((content, idx) => (
        <ContentQNABox
          content={content}
          keyValue={idx + 1}
          idx={liList.length - idx}
          key={idx}
        />
      ))}
    </Accordion>
  );
}

function ContentQNABox(props){
  const BadgeClassName = [
    "badge  badge-pill badge-primary",
    "badge  badge-pill badge-secondary",
  ];

  let between = css`
  display:flex;
  justify-content:space-between;
  line-height: 1.2em;
  `;

  let answerP = css`
    margin-bottom: 0px;
    margin-top: 10px;
  `;

  let CardBodyDiv = styled.div`
  text-align:left;
  `

  return (
    <>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={props.keyValue}
          css={between}
        >
          {props.idx}. {props.content.title}
          <span
            className={
              props.content.answer !== undefined
                ? BadgeClassName[0]
                : BadgeClassName[1]
            }
          >
            {props.content.answer !== undefined ? "답변완료" : "답변대기중"}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.keyValue}>
          <Card.Body>
            <CardBodyDiv>
              {props.content.title}
              <br />
              {props.content.desc}
              {props.content.answer !== undefined ? (
                <p css={answerP}>{props.content.answer}</p>
              ) : null}
            </CardBodyDiv>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
}
export default ContentQNA;
