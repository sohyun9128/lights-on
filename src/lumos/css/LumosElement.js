/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const MainLogo = css`
  width: 150px;
  max-width: 150px;
  height: auto;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 500px;
    min-width: 500px;
    max-width: 500px;
    height: 500px;
    min-height: 500px;
    max-height: 500px;
    background-size: cover;
    button {
      width: 50%;
      max-width: 300px;
      padding: 10px 20px 10px 20px;
      margin-bottom: 30px;
      color: white;
      border: none;
      background-color: orange;
      font-size: 20px;
      font-weight: bold;
      &:hover {
        background-color: darkorange;
      }
    }
  }
  .left {
    background-image: url("/img/lumos/left.png");
  }
  .right {
    background-image: url("/img/lumos/right.png");
  }
`;

const ModalDiv = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  grid-template-rows: 50px 100px 1fr;
  grid-template-columns: 200px 50px 1fr 250px;
  grid-template-areas:
    ". . header headerRight"
    "leftmenu leftmenu right right"
    "left left right right";
`;

const ModalHeader = styled.div`
  grid-area: header;
  text-align: center;
  button {
    padding: 10px 20px 10px 20px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid orange;
    &:nth-child(2) {
      margin-left: 20px;
    }
  }
`;

const ModalHeaderRight = styled.div`
  grid-area: headerRight;
  text-align: center;
  display: flex;
  align-items: center;
  button {
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    margin-left: 10px;
    &:nth-child(3) {
      background-color: lightgrey;
    }
  }
`;

const ModalLeftMenu = styled.div`
  grid-area: leftmenu;
  ul {
    margin-top: 10px;
    margin-bottom: -10px;
    width: 100%;
    height: 100%;
    display: flex;
    border-bottom: 1px solid lightgrey;
    li {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const ModalLeft = styled.div`
  grid-area: left;
  margin-top: 10px;
  max-height: calc(90vh - 140px);
  overflow-y: auto;
  img {
    width: 100%;
    min-height: calc(90vh - 200px);
  }
`;

const Modalright = styled.div`
  grid-area: right;
  img {
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;

const ActiveBtn = css`
  background-color: orange;
  color: white;
`;

const NonActiveBtn = css`
  background-color: white;
  color: orange;
`;

export {
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
};
