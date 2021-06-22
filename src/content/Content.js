/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import ContentWrap from "./ContentWrap";
import { jsx, css } from "@emotion/react";
import { Modal } from "react-bootstrap";

function Content() {
  const MainLogo = css`
    width: 150px;
    max-width: 150px;
    height: auto;
  `;
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="pb-3">
        <a href="/">
          <img src="./logo.png" alt="logo" className="pb-3" css={MainLogo} />
        </a>
      </div>
      <ContentWrap />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Body>test!</Modal.Body>
      </Modal>
    </>
  );
}

export default Content;
