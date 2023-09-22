import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import logo from "../resource/logo.png"



const Test = styled.div`
  .header-section {
    display: flex;
    width: 100%;
    height: 120px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  #logo {
    width: 300px;
    min-width: 300px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
  }

  #logo img {
    width: 250px;
    left: 29px;
    top: -10px;
  }

  .header {
    width: 70%;
    min-width: 1100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: bold;
    margin-right: 100px;
    font: 700 20px/25px "Roboto", sans-serif;
  }

  .menu a {
    text-decoration: none;
    color: var(--grey-blue-60, #6b7a99);
  }

  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 70px;
  }

  .submenu {
    font-size: 1rem;
    visibility: hidden;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 150px;
  }

  .header:hover {
  animation: animation 0.1s;
  animation-fill-mode: forwards;
}
.header:hover .submenu {
  visibility: inherit;
  justify-content: space-around;
  margin-top: 30px;
}
.header:hover .menu {
  padding-top: 0px;
}
@keyframes animation {
  100% {
    background: #ECE6CC;
    height: 300px;
    align-items: normal;
    padding-top: 50px;
    border-radius: 10px;
    font-weight: bolder;
    z-index: 1;
  }
}
`;

const Header = () => {
  return (
    <Test>
      <div className="header-section">
        <div className="header"  id="logo">
          <img className="logoimg" src={logo} alt="Logo" />
        </div>
        <div className="header">
          <div className="menu" id="mypage">
            <div className="submenu1">
              <a href="#">마이 페이지</a>
            </div>
            <div className="submenu2">
              <a href="#">마이페이지</a>
              <a href="#">개인정보수정</a>
              <a href="#">탈퇴</a>
            </div>
          </div>
          <div className="menu" id="board">
            <div className="submenu1">
              <a href="#">게시판</a>
            </div>
            <div className="submenu2">
              <a href="#">서브메뉴 1</a>
              <a href="#">서브메뉴 2</a>
              <a href="#">서브메뉴 3</a>
            </div>
          </div>
          <div className="menu" id="studygroup">
            <div className="submenu1">
              <a href="#">스터디</a>
            </div>
            <div className="submenu2">
              <a href="#">랭킹</a>
              <a href="#">스터디그룹 조회</a>
              <a href="#">스터디 만들기</a>
            </div>
          </div>
          <div className="menu" id="social">
            <div className="submenu1">
              <a href="#">소셜</a>
            </div>
            <div className="submenu2">
              <a href="#">서브메뉴 1</a>
              <a href="#">서브메뉴 2</a>
              <a href="#">서브메뉴 3</a>
            </div>
          </div>
        </div>
      </div>
    </Test>
  );
};

export default Header;
