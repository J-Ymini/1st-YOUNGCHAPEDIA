import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navBar">
        {/* 이거 로고 컴포넌트로 해야하는지? */}
        <div>
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
        <div>
          <input placeholder="작품 제목, 배우, 감독을 검색해보세요"></input>
        </div>
      </nav>
    );
  }
}
