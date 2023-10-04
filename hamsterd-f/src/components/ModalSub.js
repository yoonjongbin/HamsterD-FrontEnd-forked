import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const customStyles = {
  overlay: {
    backgroundColor: "rgb(0, 0, 0, 0.6)", // 모달이 열릴 때 뒷 배경의 색상과 투명도
  },
  content: {
    top: "50%",     // 모달을 수직 가운데로 위치
    left: "50%",    // 모달을 수평 가운데로 위치
    transform: "translate(-50%, -50%)", // 모달을 수직, 수평으로 가운데 정렬
    backgroundColor: "rgb(255, 255, 255, 1)", // 모달의 배경 색상
    borderRadius: "10%",
    width: "500px",
    height: "500px",

  },
//ss//
  
};

const StyleTest = styled.div`
.mainModal {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 400px;
font-family:"EliceDx";



}

.set{

  width: 200px;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  background-color: rgb(233, 233, 233);
  
}

@font-face {
  font-family: "EliceDx";
  font-weight: 100;
  src: url("../src/font/EliceDXNeolli-Bold.ttf") format("truetype");
}

#loginbtn{

  margin-left: 60px;
}

#signUpbtn{

  margin-left: 50px;
}


.setControll{


}

.closebtn{
  position: relative;
  margin-left: 400px;
  margin-top: -40px;
}
`;


function ModalSub() {
  const [isOpen, setIsOpen] = useState(true);

  const closeTab = () => {
    setIsOpen(false);
  };

 
  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="modal">
      <StyleTest>
        <div className="mainModal">
          <br></br>
          <h3>HamsterD</h3>
          <div className="closebtn">
            <button onClick={closeTab} type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <br></br>
          <form className="innerModal">
            <div className="setControll">
              <input className="set" type="text" placeholder="  아이디를 입력하세요.."></input>
              <br></br> <br></br>
              <input className="set" type="text" placeholder="  비밀번호를 입력하세요.."></input>
              <br></br><br></br>
              <button type="button" id="loginbtn" className="btn btn-primary" >로그인</button>
              <br></br> <br></br><br></br><br></br>
              <h4>아직 비회원이세요?</h4><br></br>
              <button type="button" id="signUpbtn" className="btn btn-danger" >회원가입</button>
            </div>
          </form>
        </div>
      </StyleTest>
    </Modal>
  );
}

export default ModalSub;