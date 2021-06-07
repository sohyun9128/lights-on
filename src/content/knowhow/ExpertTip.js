import React, { useState } from "react";
import { ExpertTipData } from "../js/knowhowData";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ExpertTip() {
  const [tipData, settipData] = useState(ExpertTipData);
  return (
    <>
      <div className="mt-5">
        <p className="h3 text-left pb-3" style={{ fontWeight: "bold" }}>
          전문가 팁
        </p>
        <div
          className="row row-cols-1 row-cols-md-2 g-4"
          style={{ width: "100%", margin: "0px" }}
        >
          {tipData.map((content, i) => (
            <TipCard content={content} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function TipCard(props) {
  const CardBodyCSS = css`
    display: flex;
    padding: 0px 5px 0px 5px;
    align-content: space-between;
    height: 100%;
    overflow: hidden;
    flex-wrap: wrap;
  `;
  return (
    <div className="col" style={{ padding: "0px" }}>
      <div className="card mb-3" style={{ border: "none" }}>
        <div className="row g-0" style={{ margin: "0px" }}>
          <div className="col-md-6" style={{ padding: "0px" }}>
            <img src={props.content.src} alt="..." className="img-fluid" />
          </div>
          <div className="col-md-6" style={{ padding: "0px" }}>
            <div className="card-body" css={CardBodyCSS}>
              <h5 className="card-title h5" style={{ wordBreak: "break-word" }}>
                {props.content.title}
              </h5>
              <div>
                <p className="card-text text-left pb-2">
                  {props.content.author}
                </p>
                <p
                  className="card-text text-left pb-2"
                  style={{ fontSize: "10px" }}
                >
                  조회수 {props.content.views}, 스크랩 {props.content.scrap}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpertTip;
