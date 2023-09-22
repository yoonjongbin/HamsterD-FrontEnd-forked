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

  /* 좌, 우 메뉴 */
  #section1,
  #section3 {
    width: 200px;
    min-width: 200px;
    display: flex;
  }

  /* 왼쪽 메뉴(랭킹) */
  #section1 {
    margin-left: 100px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
  }

  #rank-head {
    height: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--grey-blue-60, #6b7a99);
    font: 800 20px/20px "Roboto", sans-serif;
    padding-left: 15px;
    padding-right: 15px;
  }

  #rank {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
  }

  #rank div {
    display: flex;
    border-radius: 10px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    height: 40px;
    color: var(--grey-blue-60, #6b7a99);
    text-align: center;
    font: var(--bold-12, 800 12px/20px "Roboto", sans-serif);
    font-size: 17px;
  }

  .user-rank {
    display: flex;
    align-items: center;
  }

  .user-rank img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  /* 메인페이지(컨텐츠부분) */
  #section2 {
    width: 60%;
    min-width: 900px;
    max-width: 1200px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
  }

  .searchsection {
    width: 100%;
    background: var(--white, #ffffff);
    border-radius: 30px;
    height: 50px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 5px 5px 0px rgba(29, 38, 56, 0.03)
    );
  }

  #section2-search {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
  }

  #section2-search input {
    height: 90%;
    width: 95%;
    border: 0 solid black;
    outline: none;
  }

  #section2-search button {
    background-color: white;
    border: 0 solid black;
  }

  /* 인기글 */
  .news-section {
    height: 85%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .news1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .news-top {
    background: var(--white, #ffffff);
    border-radius: 10px;
    border-style: solid;
    border-color: var(--grey-blue-97, #f5f6f7);
    border-width: 2px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .news1-content1 {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .news1-content2 {
    display: flex;
    border-top-style: solid;
    border-top-color: var(--grey-blue-97, #f5f6f7);
    border-top-width: 2px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    height: 50px;
    width: 300px;
  }

  .like {
    border-right-style: solid;
    border-right-color: var(--grey-blue-97, #f5f6f7);
    border-right-width: 2px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
  }

  #like-count,
  #comment-count {
    width: 50px;
  }

  .news1-content2 div {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .like img,
  .comment img {
    width: 15px;
    height: 15px;
  }

  /* 최신글 */
  .news2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .news2 div {
    border-bottom: 1px solid var(--grey-blue-97, #f5f6f7);
    height: 40px;
  }

  #section3 {
    margin-top: 200px;
    margin-right: 100px;
    display: flex;
    flex-direction: column;
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

  .studysearch {
    border: 1px solid var(--grey-blue-95, #edeff2);
    border-radius: 20px;
    box-shadow: var(
      --shadows-gray-blue-3-5-b-box-shadow,
      0px 2px 5px 0px rgba(38, 51, 77, 0.03)
    );
    height: 500px;
    margin-top: 3px;
    padding: 30px;
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
