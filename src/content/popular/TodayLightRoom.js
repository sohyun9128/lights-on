import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { TodayLightRoomDataSet } from "../js/knowhowData";

function TodayLightRoom() {
  let [LightRoomFeed, setLightRoomFeed] = useState(TodayLightRoomDataSet);
  const FeedGridLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    align-items: center;
    grid-gap: 10px;
    grid-template-areas: "left center right";
  `;

  return (
    <div className="mt-5">
      <p className="h3 text-left pb-3" style={{ fontWeight: "bold" }}>
        오늘의 라이트룸
      </p>
      <FeedGridLayout>
        {LightRoomFeed.map((feed, idx) => (
          <TodayLightRoomFeed
            key={idx}
            feed={feed}
            state={LightRoomFeed}
            setState={setLightRoomFeed}
            idx={idx}
          />
        ))}
      </FeedGridLayout>
    </div>
  );
}

function TodayLightRoomFeed(props) {
  let src = props.feed.src;

  const FeedDiv = styled.div`
    border-radius: 30px;
    border: 1px solid grey;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 200px;
    min-height: 160px;
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
  `;

  const FeedHead = css`
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 5px;
  `;
  const FeedImg = styled.img`
    width: 100%;
    height: 100px;
    min-height: 120px;
  `;

  const FeedFooter = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    justify-content: space-between;
    display: flex;
    width: 100%;
  `;

  let [LightRoomFeed, setLightRoomFeed] = useState(TodayLightRoomDataSet);

  return (
    <FeedDiv>
      <p css={FeedHead}>
        <i
          className="bi bi-circle-fill pr-2"
          style={{ color: `${props.feed.color}` }}
        ></i>
        {props.feed.name}
      </p>
      <FeedImg src={props.feed.src} alt={props.feed.name} />
      <FeedFooter>
        <i className="bi bi-caret-down"></i>
        <div>
          {props.feed.like ? (
            <i
              className="bi bi-heart-fill"
              style={{ color: "red" }}
              onClick={() => {
                let origin = props.state;
                let temp = [...origin];
                temp[props.idx].like = !temp[props.idx].like;
                console.log(temp[props.idx].like);
                props.setState(temp);
              }}
            ></i>
          ) : (
            <i
              className="bi bi-heart"
              onClick={() => {
                let origin = props.state;
                let temp = [...origin];
                temp[props.idx].like = !temp[props.idx].like;
                console.log(temp[props.idx].like);
                props.setState(temp);
              }}
            ></i>
          )}
          <i className="bi bi-chat pl-2"></i>
        </div>
      </FeedFooter>
    </FeedDiv>
  );
}

export default TodayLightRoom;
