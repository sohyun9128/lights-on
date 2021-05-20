import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import { Tabs, Tab } from "react-bootstrap";
import ContentPopular from "./ContentPopular";
import ContentKnowhow from "./ContentKnowhow";
import ContentQNA from "./ContentQNA";
import ContentTip from "./ContentTip";

function ContentWrap() {
  let JustyfyCenter = css`
    justify-content: center;
    margin-bottom: 30px;
    font-size: 12px;
    @media (min-width: 420px) {
      font-size: 10px;
    }
  `;

  const ContentDiv = styled.div`
    width: 80%;
    margin: 0 auto;
  `;

  return (
    <Tabs
      defaultActiveKey="popular"
      id="uncontrolled-tab-example"
      css={JustyfyCenter}
    >
      <Tab eventKey="popular" title="인기">
        <ContentDiv>
          <ContentPopular />
        </ContentDiv>
      </Tab>
      <Tab eventKey="knowhow" title="노하우">
        <ContentDiv
          css={css`
            text-align: left;
          `}
        >
          <ContentKnowhow />
        </ContentDiv>
      </Tab>
      <Tab eventKey="qna" title="질문 및 답변">
        <ContentDiv>
          <ContentQNA />
        </ContentDiv>
      </Tab>
      <Tab eventKey="tips" title="전문가 팁">
        <ContentDiv>
          <ContentTip />
        </ContentDiv>
      </Tab>
    </Tabs>
  );
}

export default ContentWrap;
