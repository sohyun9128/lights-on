/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Carousel } from "react-bootstrap";

function ContentBanner() {
  const MaxImg = css`
    height: 40vh;
    max-height: 50vh;
    width: 100%;
  `;

  let LeftArea = css`
    padding-left: 0px;
  `;

  let RightArea = css`
    padding-right: 0px;
    padding-left: 0px;
  `;

  return (
    <div className="row mx-auto my-3">
      <div className="col-8" css={LeftArea}>
        <img src="/img/content/leftBanner.png" alt="leftBanner" css={MaxImg} />
      </div>
      <Carousel fade className="col-4 mx-auto" css={RightArea} autoPlay>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/content/mainImg1.jpg"
            alt="First slide"
            css={MaxImg}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/content/mainImg2.jpg"
            alt="First slide"
            css={MaxImg}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/content/mainImg3.jpg"
            alt="First slide"
            css={MaxImg}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ContentBanner;
