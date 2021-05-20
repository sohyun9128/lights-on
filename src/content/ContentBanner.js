/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Carousel } from "react-bootstrap";

function ContentBanner() {
  let MaxImg = css`
    max-height: 50vh;
  `;

  return (
    <Carousel fade style={{ width: "80%" }} className="mx-auto my-3" autoPlay>
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
  );
}

export default ContentBanner;
