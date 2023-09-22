import logo from "../resource/로고안경2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Test2 = styled.div`
  /* 전체 페이지 설정 */
  .main-page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--grey-blue-60, #6b7a99);
  }

  /* 화면 상단(로고+메뉴) */
  .header-section {
    display: flex;
    width: 100%;
    height: 120px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  /* 로고영역 */
  #logo {
    width: 300px;
    min-width: 300px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
  }

  /* 로고 이미지 */
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
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .submenu1 {
    display: flex;
    flex-direction: column;
  }

  /* 하단 메인페이지 */
  .main-section {
    display: flex;
    width: 100%;
    height: 900px;
  }

  .section {
    border: 1px solid var(--grey-blue-95, #edeff2);
    border-radius: 20px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    height: 700px;
    margin-top: 3px;
    padding: 30px;
  }

  .myimg {
    width: 100%;
    height: 300px;
    margin-top: 30px;
    display: flex;
    align-self: center;
  }

  .myimg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .myinfo {
    width: 100%;
    height: 100%;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .myinfo div {
    border: 1px solid var(--grey-blue-95, #edeff2);
    border-radius: 20px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    margin-top: 20px;
    line-height: 45px;
  }
`;

const Sidebar = () => {
  return (
    <Test2>
      <div className="main-page">
        <div className="main-section">
          <div className="section" id="section3">
            <div className="myimg">
              <img className="logoimg" src={logo} alt="Logo" />
            </div>
            <div className="myinfo">
              <div className="mystudy">내 스터디</div>
              <div className="myweight">내 몸무게</div>
              <div className="mycalender">내 일정</div>
              <div className="mypost">내 게시글</div>
              <div className="mycomment">내 댓글</div>
            </div>
          </div>
        </div>
      </div>
    </Test2>
  );
};

export default Sidebar;
