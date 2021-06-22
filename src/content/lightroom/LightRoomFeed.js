import React, { useState, useEffect } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function LightRoomFeed(props) {
  let src = props.feed.src;
  const [isShown, setisShown] = useState(false);

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

  const HoverDiv = styled.div`
    border: 1px solid black;
    display: flex;
    background-color: white;
    margin-left: 15px;
    min-width: 200px;
    position: relative;
    z-index: 99;
    height: 100px;
    max-height: 100px;
    margin-top: -10px;
    text-align: center;
    div {
      img {
        height: 80px;
      }
    }
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
        <i
          id="bottomArrow"
          className="bi bi-caret-down"
          onMouseEnter={() => setisShown(true)}
          onMouseLeave={() => setisShown(false)}
        ></i>
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
      {isShown && (
        <HoverDiv id="hoverDiv" className="p-2">
          <div className="col-6">
            <img
              src={process.env.PUBLIC_URL + "/img/content/mainImg1.jpg"}
              alt=""
              class="img-fluid"
            />
          </div>
          <div className="col-6">
            <img
              src={process.env.PUBLIC_URL + "/img/content/mainImg2.jpg"}
              alt=""
              class="img-fluid"
            />
          </div>
        </HoverDiv>
      )}
    </FeedDiv>
  );
}

export default LightRoomFeed;
