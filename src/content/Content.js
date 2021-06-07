/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import ContentWrap from "./ContentWrap";
import { jsx, css } from "@emotion/react";

function Content() {
  const MainLogo = css`
    width: 150px;
    max-width: 150px;
    height: auto;
  `;
  return (
    <>
      <div className="pb-3">
        <a href="/">
          <img src="./logo.png" alt="logo" className="pb-3" css={MainLogo} />
        </a>
      </div>
      <ContentWrap />
    </>
  );
}

export default Content;
