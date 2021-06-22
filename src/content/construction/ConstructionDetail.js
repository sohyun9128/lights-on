import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ConstructionDetail(props) {
  return (
    <>
      <button
        onClick={() => props.setconstructSelect(false)}
        style={{
          display: "flex",
          alignItems: "left",
          border: "none",
          backgroundColor: "white",
          marginLeft: "70px",
        }}
      >
        뒤로가기
      </button>
      <img src="/img/content/constDetail.png" />
    </>
  );
}
export default ConstructionDetail;
