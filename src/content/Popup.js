/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const PopImgDiv = styled.div`
  background: url("/img/popup/background.png") no-repeat center;
  background-size: 50%;
  height: 600px;
  min-height: 600px;
  max-height: 600px;
  div {
    width: 100%;
    min-width: 100%;
    }
  }
  .all {
    display: inline-block;
    margin-top: 160px;
  }
  .up {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: url("/img/popup/lumos.png") no-repeat center;
    background-size: 45%;
    height: 140px;
    min-height: 140px;
    max-height: 140px;
  }
  .down {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: url("/img/popup/lightroom.png") no-repeat center;
    background-size: 45%;
    height: 140px;
    min-height: 140px;
    max-height: 140px;
  }
`;

const PopModalDiv = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100%;
  grid-template-columns: 58%;
  grid-template-areas: ". but";
`;

const ModalButton = styled.div`
  grid-area: but;
  text-align: left;
  display: flex;
  align-items: center;
  a {
    display: flex;
  align-items: center;
    width: 100%;    
    height: 100%;
    align-items: center;
  }
  button {
    width: 50%;
    max-width: 200px;
    height: 60%;
    max-height: 100px;
    padding: 10px 20px 10px 20px;
    color: white;
    border: none;
    background-color: orange;
    font-size: 20px;
    font-weight: bold;
    &:hover {
      background-color: darkorange;
    }
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20%;
  img {
    width: 80px;
    height: 60px;
  }
`;

export { PopImgDiv, PopModalDiv, ModalButton, CloseDiv };
