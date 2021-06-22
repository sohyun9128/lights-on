/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import ContentWrap from "./ContentWrap";
import { jsx, css } from "@emotion/react";
import { Modal } from "react-bootstrap";
import { PopImgDiv, PopModalDiv, ModalButton, CloseDiv } from "./Popup";
import { Link } from "react-router-dom";
import "./content.css";
import styled from "@emotion/styled";
import { Tabs, Tab } from "react-bootstrap";
import ContentPopular from "./popular/ContentPopular";
import ContentKnowhow from "./knowhow/ContentKnowhow";
import RightRoom from "./lightroom/LightRoom";
import LightRoomDetail from "./lightroom/LightRoomDetail";
import Construction from "./construction/Construction";
import ConstructionDetail from "./construction/ConstructionDetail";

function Content() {
  const MainLogo = css`
    width: 150px;
    max-width: 150px;
    height: auto;
  `;

  let JustyfyCenter = css`
    justify-content: center;
    margin-bottom: 30px;
    font-size: 12px;
    .nav-item nav-link {
      margin-bottom: 0px;
    }
    @media (min-width: 420px) {
      font-size: 10px;
    }
  `;

  const ContentDiv = styled.div`
    width: 60%;
    margin: 0 auto;
  `;

  const [show, setShow] = useState(true);
  const [contentTab, setcontentTab] = useState("popular");
  const [constructSelect, setconstructSelect] = useState(false);
  const [lightroomSelect, setlightroomSelect] = useState(false);

  return (
    <>
      <div className="pb-3">
        <a href="/">
          <img src="./logo.png" alt="logo" className="pb-3" css={MainLogo} />
        </a>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Body>
          <PopImgDiv>
            <div className="all">
              <div className="up">
                <PopModalDiv>
                  <ModalButton>
                    <Link to="/lumos">
                      <button>
                        루모스
                        <br />
                        바로가기
                      </button>
                    </Link>
                  </ModalButton>
                </PopModalDiv>
              </div>
              <div className="down">
                <PopModalDiv>
                  <ModalButton>
                    <Link to="/">
                      <button
                        onClick={() => {
                          setShow(false);
                          setcontentTab("lightroom");
                        }}
                      >
                        라이트룸
                        <br />
                        바로가기
                      </button>
                    </Link>
                  </ModalButton>
                </PopModalDiv>
              </div>
            </div>
          </PopImgDiv>
          <CloseDiv>
            <img src="/img/popup/close.png" onClick={() => setShow(false)} />
          </CloseDiv>
        </Modal.Body>
      </Modal>

      {console.log(contentTab)}
      {/*<ContentWrap defaltTab={contentTab} />*/}

      <Tabs
        defaultActiveKey={contentTab}
        activeKey={contentTab}
        onSelect={(k) => setcontentTab(k)}
        id="uncontrolled-tab-example"
        css={JustyfyCenter}
      >
        <Tab eventKey="popular" title="인기">
          <ContentDiv>
            <ContentPopular />
          </ContentDiv>
        </Tab>
        <Tab eventKey="knowhow" title="노하우">
          <ContentDiv
            css={css`
              text-align: left;
            `}
          >
            <ContentKnowhow />
          </ContentDiv>
        </Tab>
        <Tab eventKey="lightroom" title="라이트룸">
          <ContentDiv>
            {!lightroomSelect ? (
              <RightRoom
                lightroomSelect={lightroomSelect}
                setlightroomSelect={setlightroomSelect}
              />
            ) : (
              <LightRoomDetail setlightroomSelect={setlightroomSelect} />
            )}
          </ContentDiv>
        </Tab>
        <Tab eventKey="tips" title="시공">
          <ContentDiv>
            {!constructSelect ? (
              <Construction
                constructSelect={constructSelect}
                setconstructSelect={setconstructSelect}
              />
            ) : (
              <ConstructionDetail setconstructSelect={setconstructSelect} />
            )}
            {console.log(contentTab)}
          </ContentDiv>
        </Tab>
      </Tabs>
    </>
  );
}

export default Content;
