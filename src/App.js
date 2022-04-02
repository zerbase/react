import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var [c,d] = [10, 100];
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','양재동 부동산']);
  
  let posts = '강남 고기 맛집';
  let cs  = {
    color: 'white',
    fontSize:'20px'
  }
  function 함수() {
    return 100
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div style={cs}>개발 Blog</div>
      </div>    
      <div className='list'>
        <h3> { 글제목[0]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      {/* <img src={logo} /> */}
      <h4>{함수()}</h4>
    </div>
  );
}

export default App;