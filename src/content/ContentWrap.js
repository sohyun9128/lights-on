import React, { useEffect, useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Tabs, Tab } from "react-bootstrap";
import ContentPopular from "./popular/ContentPopular";
import ContentKnowhow from "./knowhow/ContentKnowhow";
import RightRoom from "./lightroom/LightRoom";

function ContentWrap(props) {
  const [defaltTab, setdefaltTab] = useState(props.defaltTab);

  let JustyfyCenter = css`
    justify-content: center;
    margin-bottom: 30px;
    font-size: 12px;
    .nav-item nav-link {
      margin-bottom: 0px;
    }
    @media (min-width: 420px) {
      font-size: 10px;
    }
  `;

  const ContentDiv = styled.div`
    width: 60%;
    margin: 0 auto;
  `;

  return (
    <>
      {console.log(props.defaltTab)}

      <Tabs
        defaultActiveKey="popular"
        activeKey={defaltTab}
        onSelect={(k) => setdefaltTab(k)}
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
        <Tab eventKey="lightroom" title="라이트룸">
          <ContentDiv>
            <RightRoom />
          </ContentDiv>
        </Tab>
        <Tab eventKey="tips" title="시공">
          <ContentDiv></ContentDiv>
        </Tab>
      </Tabs>
    </>
  );
}

export default ContentWrap;
