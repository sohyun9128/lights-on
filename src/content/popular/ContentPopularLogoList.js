/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, Route, Switch } from "react-router-dom";

function ContentPopularLogoList() {
  const PopularLogoGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 100px;
    grid-gap: 0.5rem;
    grid-template-areas: "a b c d e f g";
  `;

  const PopularLogoA = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: a;
    flex-direction: column;
  `;

  const PopularLogoB = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: b;
    flex-direction: column;
  `;

  const PopularLogoC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: c;
    flex-direction: column;
  `;

  const PopularLogoD = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: d;
    flex-direction: column;
  `;

  const PopularLogoE = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: e;
    flex-direction: column;
  `;

  const PopularLogoF = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: f;
    flex-direction: column;
  `;

  const PopularLogoG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-area: g;
    flex-direction: column;
  `;
  return (
    <PopularLogoGroup>
      <PopularLogoA>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/1.png"}
          alt=""
          className="img-fluid"
        />
        쇼핑하기
      </PopularLogoA>
      <PopularLogoB>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/2.png"}
          alt=""
          className="img-fluid"
        />
        라이트룸
      </PopularLogoB>
      <PopularLogoC>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/3.png"}
          alt=""
          className="img-fluid"
        />
        시공업체 찾기
      </PopularLogoC>
      <PopularLogoD>
        <Link to="/lumos">
          <img
            src={process.env.PUBLIC_URL + "/img/content/logo/4.png"}
            alt=""
            className="img-fluid"
          />
        </Link>
        루모스
      </PopularLogoD>
      <PopularLogoE>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/5.png"}
          alt=""
          className="img-fluid"
        />
        스마트조명
        <br />
        가이드북
      </PopularLogoE>
      <PopularLogoF>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/6.png"}
          alt=""
          className="img-fluid"
        />
        스마트조명
        <br />
        전문가팁
      </PopularLogoF>
      <PopularLogoG>
        <img
          src={process.env.PUBLIC_URL + "/img/content/logo/7.png"}
          alt=""
          className="img-fluid"
        />
        기획전
        <br />
        보러가기
      </PopularLogoG>
    </PopularLogoGroup>
  );
}

export default ContentPopularLogoList;
