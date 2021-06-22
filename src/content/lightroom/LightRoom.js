import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import LightRoomDropdown from "./LightRoomDropdown";
import "./LightRoomCSS.css";
import LightRoomFeed from "./LightRoomFeed.js";
import {
  LightRoomVRDataSet,
  LightRoomARDataSet,
  LightRoomRVDataSet,
} from "../js/lightRoomData.js";

function RightRoom(props) {
  const LightRoomGrid = styled.div`
    text-align: right;
  `;

  const FeedGridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    align-items: center;
    grid-gap: 10px;
    grid-template-areas: "left center right";
  `;

  const [VR, setVR] = useState(LightRoomVRDataSet);
  const [AR, setAR] = useState(LightRoomARDataSet);
  const [RV, setRV] = useState(LightRoomRVDataSet);
  const [aligmentSort, setaligmentSort] = useState("정렬");
  const [amountSort, setamountSort] = useState("예산");
  const [styleSort, setstyleSort] = useState("스타일");
  useEffect(() => {
    console.log(aligmentSort, amountSort, styleSort);
  }, [aligmentSort, amountSort, styleSort]);

  return (
    <>
      <LightRoomGrid>
        <LightRoomDropdown
          value={[aligmentSort, amountSort, styleSort]}
          sort={[setaligmentSort, setamountSort, setstyleSort]}
        />

        <Tabs
          defaultActiveKey="All"
          id="uncontrolled-tab-example"
          className="customNav"
        >
          <Tab eventKey="All" title="All">
            <div
              onClick={() => {
                props.setlightroomSelect(true);
              }}
            >
              <FeedGridLayout>
                {VR.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
                {AR.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
                {RV.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
              </FeedGridLayout>{" "}
            </div>
          </Tab>

          <Tab eventKey="VR" title="VR">
            <div
              onClick={() => {
                props.setlightroomSelect(true);
              }}
            >
              <FeedGridLayout>
                {VR.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
              </FeedGridLayout>
            </div>
          </Tab>
          <Tab eventKey="AR" title="AR">
            <div
              onClick={() => {
                props.setlightroomSelect(true);
              }}
            >
              <FeedGridLayout>
                {AR.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
              </FeedGridLayout>
            </div>
          </Tab>
          <Tab eventKey="리뷰" title="리뷰">
            <div
              onClick={() => {
                props.setlightroomSelect(true);
              }}
            >
              <FeedGridLayout>
                {RV.map((feed, idx) => (
                  <LightRoomFeed
                    key={idx}
                    feed={feed}
                    // state={LightRoomFeed}
                    // setState={setLightRoomFeed}
                    idx={idx}
                  />
                ))}
              </FeedGridLayout>
            </div>
          </Tab>
        </Tabs>
      </LightRoomGrid>
    </>
  );
}

export default RightRoom;
