import React, { useState, useEffect } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ListGroup, Button } from "react-bootstrap";
import ShopBanner from "./ShopBanner";
import { ProductList, nonDescProduct } from "./js/productList.js"; //모든 상품데이터
import ProductCard from "./ProductCard";
import menuList from "./js/menuList";

let MenuContent = styled.span`
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0px;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0px;
  -ms-flex: 1 0 0px;
  flex: 1 0 0px;
  min-width: 0;
  font-size: 13px;
  line-height: 23px;
  white-space: nowrap;
  overflow: hidden;
  transition: opacity 0.1s;
`;

function ShopWrap() {
  let ShopWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;
  `;

  let Header = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    min-width: 0;
    height: 23px;
    color: #000;
  `;

  let MenuBtn = styled.button`
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -moz-box-flex: 0;
    -moz-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin: 0;
    padding: 0 0 0 5px;
    line-height: 23px;
    border: none;
    background: none;
    transition: opacity 0.1s;
  `;

  const [subMenu, setsubMenu] = useState(false);
  const [subMenuContent, setsubMenuContent] = useState(["+"]);
  const [shopContentControl, setshopContentControl] = useState("모든상품");
  const [productList, setproductList] = useState(ProductList);
  const [numProductTemp, setnumProductTemp] = useState(nonDescProduct);
  const [pageNumControl, setpageNumControl] = useState([]);
  const [numProductList, setnumProductList] = useState(0);

  //menu라벨에 따른 상품리스트 초기화
  useEffect(() => {
    console.log("productList", productList.length);
    let pageNum;
    let initNumArray = [];
    if (shopContentControl === "모든상품") {
      //초기상태 + 모든상품 눌렀을때
      let initArray = [...productList];
      let temp = [];
      let idx;
      if (productList.length > 12) {
        idx = 12;
      } else {
        idx = productList.length;
      }
      for (let i = 0; i < idx; i++) {
        temp.push(productList[i]);
      }
      setproductList(temp);
      setnumProductTemp(initArray);
      pageNum = productList.length / 12;
      for (let j = 0; j < pageNum; j++) {
        initNumArray.push(0);
      }
      setpageNumControl(initNumArray);
    } else {
      let tempArray = [...productList];
      let sortArray = [];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].type === shopContentControl) {
          sortArray.push(tempArray[i]);
        }
      }
      let sortArray2 = [];
      let idx;
      if (sortArray.length > 12) {
        idx = 12;
      } else {
        idx = sortArray.length;
      }

      for (let i = 0; i < idx; i++) {
        sortArray2.push(sortArray[i]);
      }
      setproductList(sortArray2);
      setnumProductTemp(sortArray);

      pageNum = sortArray.length / 12;
      for (let j = 0; j < pageNum; j++) {
        initNumArray.push(0);
      }
      setpageNumControl(initNumArray);
    }
    setnumProductList(0);
  }, [shopContentControl]);

  //num라벨에 따른 상품리스트  초기화
  useEffect(() => {
    let tempArray = [...numProductTemp];
    let sortArray = [];
    let startIdx, endIdx;
    if (numProductList === 0) {
      startIdx = 0;
    } else {
      startIdx = numProductList * 12;
    }
    endIdx = startIdx + 12;
    if (endIdx > tempArray.length) {
      endIdx = tempArray.length;
    }

    for (let i = startIdx; i < endIdx; i++) {
      sortArray.push(tempArray[i]);
    }
    setproductList(sortArray);
    console.log(startIdx, endIdx);
  }, [numProductList]);

  return (
    <>
      <ShopWrap className="row">
        <div className="col-md-3 text-left">
          <h4>Store</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <MenuContent
                onClick={() => {
                  console.log(typeof "모든상품");
                  setshopContentControl("모든상품");
                }}
              >
                모든상품
              </MenuContent>
            </ListGroup.Item>
            <ListGroup.Item>
              <Header>
                <MenuContent>공간별 조명</MenuContent>
                <MenuBtn
                  onClick={() => {
                    setsubMenu(!subMenu);
                    console.log(this);
                    if (subMenu) {
                      setsubMenuContent("+");
                    } else {
                      setsubMenuContent("-");
                    }
                  }}
                >
                  {subMenuContent}
                </MenuBtn>
              </Header>
              {subMenu ? (
                <SubMenu setshopContentControl={setshopContentControl} />
              ) : null}
            </ListGroup.Item>
            {menuList.map((menu, i) => (
              <ListGroup.Item>
                <MenuContent
                  data-name={menu}
                  onClick={(e) => {
                    setshopContentControl(e.target.dataset.name);
                  }}
                >
                  {menu}
                </MenuContent>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className="col-md-9">
          <ShopBanner />
          <div className="row">
            {productList.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {pageNumControl.map((a, i) => (
                <li
                  className="page-item page-link"
                  onClick={() => {
                    setnumProductList(i);
                  }}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ShopWrap>
    </>
  );
}

function SubMenu(props) {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <MenuContent onClick={() => props.setshopContentControl("거실조명")}>
            거실조명
          </MenuContent>
        </ListGroup.Item>
        <ListGroup.Item>
          <MenuContent onClick={() => props.setshopContentControl("방조명")}>
            방조명
          </MenuContent>
        </ListGroup.Item>
        <ListGroup.Item>
          <MenuContent onClick={() => props.setshopContentControl("주방조명")}>
            주방조명
          </MenuContent>
        </ListGroup.Item>
        <ListGroup.Item>
          <MenuContent
            onClick={() => props.setshopContentControl("현관/배란다조명")}
          >
            현관/배란다조명
          </MenuContent>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default ShopWrap;
