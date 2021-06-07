import React, { useState, useEffect } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function LightRoomFeed(props) {
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

  let [Like, setLike] = useState(false);

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
          {Like ? (
            <i
              className="bi bi-heart"
              onClick={() => {
                setLike(!Like);
              }}
            ></i>
          ) : (
            <i
              className="bi bi-heart-fill"
              style={{ color: "red" }}
              onClick={() => {
                setLike(!Like);
              }}
            ></i>
          )}
          <i className="bi bi-chat pl-2"></i>
        </div>
      </FeedFooter>
    </FeedDiv>
  );
}

export default LightRoomFeed;
