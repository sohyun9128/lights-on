import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function LivingRoom() {
  const BottomDiv = styled.div`
    width: 100%;
    height: auto;
    min-height: 100px;
    border: 1px solid #c6c6c6;
    padding: 10px 5px 10px 5px;
    margin-top: 30px;
  `;

  return (
    <>
      <div
        style={{ width: "70%", margin: "0 auto" }}
        className="mt-5 text-center"
      >
        {/*1*/}
        <h2 className="h2" style={{ color: "orange", fontWeight: "bold" }}>
          Lights on's tip
        </h2>
        <h2 className="h2" style={{ fontWeight: "bold" }}>
          거실 조명 선택시, 고려사항!
        </h2>

        <div
          className="mt-5 p-3"
          style={{
            border: "1px solid #c6c6c6",
            height: "auto",
            width: "50%",
            margin: "0 auto",
            lineHeight: "24px",
          }}
        >
          <ul>
            <li>
              <span className="mr-1" style={{ color: "orange" }}>
                v
              </span>
              천장등 외에 조명을 추가할 것
            </li>
            <li>
              <span className="mr-1" style={{ color: "orange" }}>
                v
              </span>
              액자, 사진 등에 부분 조명 설치
            </li>
            <li>
              <span className="mr-1" style={{ color: "orange" }}>
                v
              </span>
              디머로 빛을 조절해 분위기 연출
            </li>
          </ul>
        </div>

        <div className="col-10 mx-auto text-left">
          {/*2*/}
          <div className="row">
            <div className="col-12 text-center mt-5 mb-3">
              <img
                src={process.env.PUBLIC_URL + "/img/knowhow/living/1.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-11 mx-auto">
              <h4 className="h4">Tip1. “거실 안쪽에 스탠드 조명을 사용한다”</h4>
              <p>
                천장등 외의 혼자 설치할 수 있는 설치할 수 있는 가장 쉬운 조명은
                ‘스탠드’입니다. 다양한 색의 전구를 구비해두고 계절, 상황에 맞게
                전구를 교체해준다면 감각있는 인테리어로 기분 좋은 365일을 즐기실
                수 있을 거에요!
              </p>
              <BottomDiv></BottomDiv>
            </div>
          </div>

          {/*3*/}
          <div className="row">
            <div className="col-12 text-center mt-5 mb-3">
              <img
                src={process.env.PUBLIC_URL + "/img/knowhow/living/2.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-11 mx-auto">
              <h4 className="h4">Tip2. “액자 및 선반에 부분조명을 설치한다”</h4>
              <p>
                은은하고 편안한 분위기 연출에는 ‘간접 조명’이 필수입니다.
                좋아하는 그림을 벽에 전면에 걸어 두셨다면 액자를 타고 흐르는
                다운라이팅으로 더 우아한 분위기를 연출해보세요!
              </p>
              <BottomDiv></BottomDiv>
            </div>
          </div>

          {/*4*/}
          <div className="row">
            <div className="col-12 text-center mt-5 mb-3">
              <img
                src={process.env.PUBLIC_URL + "/img/knowhow/living/3.png"}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-11 mx-auto">
              <h4 className="h4">Tip3. “천장 조명은 과감하게”</h4>
              <p>
                ‘거실 조명 = 천장 조명’을 떠올리실 겁니다. 사각형의 기본적인
                천장 조명은 깔끔하고 단정한 느낌을 주지만, 다소 딱딱한 느낌을
                주기도 합니다. 라이츠온에서 다양한 디자인의 천장 조명을
                찾아보세요!
              </p>
              <BottomDiv></BottomDiv>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LivingRoom;
