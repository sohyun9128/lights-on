/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "@emotion/styled";

function ShopBanner() {
  let BannerHading = styled.div`
    text-align: left;
    padding-bottom: 20px;
  `;

  let Background = css`
    background-image: url(/img/shop/Banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    min-height: 45vh;
    height: 45vh;
    margin-bottom: 0px;
  `;

  return (
    <BannerHading>
      <h4>이벤트 세일</h4>
      <Jumbotron css={Background}>
        <h1>20% Season OFF</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">바로가기</Button>
        </p>
      </Jumbotron>
    </BannerHading>
  );
}

export default ShopBanner;
