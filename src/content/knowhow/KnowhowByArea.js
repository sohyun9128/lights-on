import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function KnowhowByArea(props) {
  const AreaKnowHowGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    grid-template-areas: "a b c d e";
  `;

  const AreaKnowHowA = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: a;
  `;

  const AreaKnowHowB = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: b;
  `;

  const AreaKnowHowC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: c;
  `;

  const AreaKnowHowD = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: d;
  `;

  const AreaKnowHowE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: e;
  `;

  return (
    <div className="mt-5">
      <p className="h3 text-left" style={{ fontWeight: "bold" }}>
        공간별 노하우
      </p>
      <AreaKnowHowGroup className="mt-3">
        <AreaKnowHowA
          onClick={() => {
            props.setDetail(!props.Detail);
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/knowhow/logo/1.png"}
            alt=""
            className="img-fluid"
          />
        </AreaKnowHowA>
        <AreaKnowHowB>
          <img
            src={process.env.PUBLIC_URL + "/img/knowhow/logo/2.png"}
            alt=""
            className="img-fluid"
          />
        </AreaKnowHowB>
        <AreaKnowHowC>
          <img
            src={process.env.PUBLIC_URL + "/img/knowhow/logo/3.png"}
            alt=""
            className="img-fluid"
          />
        </AreaKnowHowC>
        <AreaKnowHowD>
          <img
            src={process.env.PUBLIC_URL + "/img/knowhow/logo/4.png"}
            alt=""
            className="img-fluid"
          />
        </AreaKnowHowD>
        <AreaKnowHowE>
          <img
            src={process.env.PUBLIC_URL + "/img/knowhow/logo/5.png"}
            alt=""
            className="img-fluid"
          />
        </AreaKnowHowE>
      </AreaKnowHowGroup>
    </div>
  );
}

export default KnowhowByArea;
