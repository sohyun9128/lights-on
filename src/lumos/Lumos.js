import React, { useState } from "react";
import {
  MainLogo,
  ImgDiv,
  ModalDiv,
  ModalHeader,
  ActiveBtn,
  NonActiveBtn,
  ModalHeaderRight,
  ModalLeftMenu,
  ModalLeft,
  Modalright,
} from "./css/LumosElement.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Modal } from "react-bootstrap";
import "./css/lumos.css";

function Lumos() {
  const [show, setShow] = useState(false);
  const [LeftContent, setLeftContent] = useState("/img/lumos/leftContent1.png");
  const [RightContent, setRightContent] = useState(
    "/img/lumos/rightContent1.png"
  );
  const [twoD, settwoD] = useState(true);
  const [threeD, setthreeD] = useState(false);

  const handleClose = () => {
    setShow(false);
    setLeftContent("/img/lumos/leftContent1.png");
    setRightContent("/img/lumos/rightContent1.png");
  };
  const handleShow = () => setShow(true);
  const firstHandler = () => {
    setLeftContent("/img/lumos/leftContent2.png");
    setRightContent("/img/lumos/rightContent2.png");
  };
  const secondHandler = () => {
    setRightContent("/img/lumos/rightContent3.png");
  };
  const secondHandler2 = () => {
    setRightContent("/img/lumos/rightContent3.png");
    settwoD(false);
    setthreeD(true);
  };
  const thirdHandler = () => {
    setLeftContent("/img/lumos/leftContent3.png");
    setRightContent("/img/lumos/rightContent4.png");
  };
  const fourthHandler = () => {
    setLeftContent("/img/lumos/leftContent4.png");
    setRightContent("/img/lumos/rightContent5.png");
  };

  return (
    <>
      <div className="pb-3">
        <a href="/">
          <img src="./logo.png" alt="logo" className="pb-3" css={MainLogo} />
        </a>
      </div>
      <ImgDiv>
        <div className="left">
          <button onClick={handleShow}>3D 루모스 체험하기</button>
        </div>
        <div className="right">
          <button>라이트룸 보러가기</button>
        </div>
      </ImgDiv>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Body>
          <ModalDiv>
            <ModalHeader>
              {twoD ? (
                <button css={ActiveBtn}>2D도면</button>
              ) : (
                <button
                  css={NonActiveBtn}
                  onClick={() => {
                    settwoD(true);
                    setthreeD(false);
                  }}
                >
                  2D도면
                </button>
              )}
              {threeD ? (
                <button css={ActiveBtn} onClick={secondHandler}>
                  3D뷰어
                </button>
              ) : (
                <button css={NonActiveBtn} onClick={secondHandler2}>
                  3D뷰어
                </button>
              )}
            </ModalHeader>
            <ModalHeaderRight>
              <button>새로만들기</button>
              <button>저장</button>
              <button onClick={handleClose}>X</button>
            </ModalHeaderRight>
            <ModalLeftMenu>
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/img/lumos/leftMenu1.png"}
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/img/lumos/leftMenu2.png"}
                    onClick={firstHandler}
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/img/lumos/leftMenu3.png"}
                    onClick={thirdHandler}
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/img/lumos/leftMenu4.png"}
                    onClick={fourthHandler}
                  />
                </li>
              </ul>
            </ModalLeftMenu>
            <ModalLeft>
              <img src={process.env.PUBLIC_URL + LeftContent} />
            </ModalLeft>
            <Modalright>
              <img src={process.env.PUBLIC_URL + RightContent} />
            </Modalright>
          </ModalDiv>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Lumos;
