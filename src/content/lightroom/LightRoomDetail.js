import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function LightRoomDetail(props) {
  return (
    <>
      <button
        onClick={() => props.setlightroomSelect(false)}
        style={{
          display: "flex",
          alignItems: "left",
          border: "none",
          backgroundColor: "white",
          marginLeft: "20%",
        }}
      >
        뒤로가기
      </button>
      <img src="/img/content/lightroomDetail.png" />
    </>
  );
}
export default LightRoomDetail;
