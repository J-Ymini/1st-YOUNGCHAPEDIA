import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navBar">
        {/* 이거 로고 컴포넌트로 해야하는지? */}
        <div className="navLeft">
          <header>
            <h1>
              <span>YOUNGCHA</span>
              <span>PEDIA</span>
            </h1>
          </header>
          <ul className="navMenu">
            <li>영화</li>
          </ul>
        </div>
        <div className="navRight">
          {/* submit걸기 */}
          <div className="navSearch">
            <FontAwesomeIcon className="searchIcon" />
            <input placeholder="제목, 배우, 감독을 검색하세요" type="text" />
          </div>
          <button className="navUserProfile">
            <img alt="유저님의 이미지" src="http://google.com"></img>
          </button>
        </div>
      </div>
    );
  }
}
