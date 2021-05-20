import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function ProductCard(props) {
  let ProductArticle = styled.article`
    padding: 0 0 30px;
    position: relative;
  `;

  let ProductImageDiv = styled.div`
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
    }
  `;

  let ProductProducer = styled.span`
    display: block;
    color: #757575;
    word-break: break-all;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
  `;

  let ProductName = styled.span`
    display: block;
    max-height: 34px;
    margin-top: 5px;
    word-break: break-all;
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    color: #000;
    transition: opacity 0.1s;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  `;

  let ProductPrice = styled.span`
    display: block;
    font-size: 17px;
    line-height: 23px;
    font-weight: 700;
  `;

  return (
    <div className="col-6 col-lg-4">
      <ProductArticle>
        <div style={{ overflow: "hidden" }}>
          <ProductImageDiv>
            <img
              src={props.product.image}
              alt={props.product.name}
              style={{ width: "100%", height: "100%" }}
            />
          </ProductImageDiv>
        </div>
        <div style={{ textAlign: "left", paddingTop: "5px" }}>
          <p style={{ marginBottom: "0px" }}>
            <ProductProducer>{props.product.producer}</ProductProducer>
            <ProductName>{props.product.name}</ProductName>
          </p>
          <p>
            <ProductPrice>{props.product.price}</ProductPrice>
          </p>
        </div>
      </ProductArticle>
    </div>
  );
}

export default ProductCard;
