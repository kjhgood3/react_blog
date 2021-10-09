import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// index.js는 app.js를 index.html에 넣고 있다.
function App() {
  // 데이터는 1. 변수에 넣기, 2. state에 넣기(변수 대신 쓰이는 데이터 저장공간)
  // state는 변경되면 html이 자동으로 재랜더링 됨
  let [title, setTitle] = useState(['리액트 공부하기', '노드.js 공부하기', '스프링 공부하기']);
  let [num, setNum] = useState(0);
  let [modal, setModal] = useState(false); // 모달창을 켜고 끄는 스위치 역할
  let [button, setButton] = useState(0);
  let [inputValue, setInputValue] = useState('');

  function modalSwitch() {
    setModal(!modal);
  }

  function oneAdd() {
    let newArray = [...title];
    newArray.unshift(inputValue);   // unshift() array 맨앞에 자료 추가하는 함수!!!!
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={ { color : 'blue', fontSize : '30px' } }>코딩 블로그</div>   style주려면 오브젝트형식으로 {{여기안에}} 줘야함*/}
        <div>코딩 블로그</div>
      </div>
      {/* <img src={logo} />  이미지 사용하려면 맨위에 해당 경로 import 하고 {}안에 파일명 입력해야한다. 그냥 경로 입력해도 되긴 함..*/}

      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { setButton(i) }}>
                {a}
                <span onClick={() => { setNum(num + 1) }}>👍</span>
                {num}
              </h3>
              <p>10월 7일 발행</p>
              <hr />
            </div>
          );
        })
      }

      <div className="publish">
        <input onChange={(e) => { setInputValue(e.target.value) }} />
        <button onClick={oneAdd}>저장</button>
      </div>

      <button onClick={modalSwitch}>열고닫기</button>

      {
        modal === true
          ? <Modal title={title} button={button}></Modal>
          : null  // 텅빈 HTML
      }






    </div>
  );
}

function Modal(props) {
  return (
    <div class="modal">
      <h2>{props.title[props.button]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
