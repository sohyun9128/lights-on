import React, { useState } from "react";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";

function LightRoomDropdown(props) {
  return (
    <>
      <div className="pb-3" style={{ width: "100%", textAlign: "right" }}>
        <Dropdown size="sm" as={ButtonGroup}>
          <Button variant="Secondary" id="aligment">
            {props.value[0]}
          </Button>
          <Dropdown.Toggle
            split
            variant="Secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <>
              <Dropdown.Item
                onClick={() => {
                  props.sort[0]("최신순");
                  props.sort[1]("예산");
                  props.sort[2]("스타일");
                }}
              >
                최신순
              </Dropdown.Item>
            </>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("인기순");
                props.sort[1]("예산");
                props.sort[2]("스타일");
              }}
            >
              인기순
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("과거순");
                props.sort[1]("예산");
                props.sort[2]("스타일");
              }}
            >
              과거순
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown size="sm" as={ButtonGroup}>
          <Button variant="Secondary" id="amount">
            {props.value[1]}
          </Button>
          <Dropdown.Toggle
            split
            variant="Secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("만원미만");
                props.sort[2]("스타일");
              }}
            >
              만원미만
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("5만원 미만");
                props.sort[2]("스타일");
              }}
            >
              5만원 미만
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("10만원 미만");
                props.sort[2]("스타일");
              }}
            >
              10만원 미만
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("10만원 이상");
                props.sort[2]("스타일");
              }}
            >
              10만원 이상
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown size="sm" as={ButtonGroup}>
          <Button variant="Secondary" id="style">
            {props.value[2]}
          </Button>
          <Dropdown.Toggle
            split
            variant="Secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("예산");
                props.sort[2]("모던");
              }}
            >
              모던
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("만원미만");
                props.sort[2]("빈티지");
              }}
            >
              빈티지
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("만원미만");
                props.sort[2]("로맨틱");
              }}
            >
              로멘틱
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                props.sort[0]("정렬");
                props.sort[1]("만원미만");
                props.sort[2]("한국아시아");
              }}
            >
              한국&amp;아시아
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default LightRoomDropdown;
