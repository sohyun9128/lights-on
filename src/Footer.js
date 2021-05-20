/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function Header() {
  let Footer = styled.div`
    background: #f8f9fa!important;
    padding-top: 30px;
    margin-top: 30px;
    width: 100%;
    height: 200px;
    text-align: center;
  `;

  let P = styled.p`
    color: #424242;
    word-break: keep-all;
  `;

  return (
    <Footer>
      <P style={{ fontSize: "30px" }}>Lights on</P>
      <P>-Konkuk University, 조이름-</P>
      <P>&copy; PandaCoding, KimSoHyun</P>
    </Footer>
  );
}

export default Header;
