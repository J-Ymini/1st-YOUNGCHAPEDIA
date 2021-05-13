import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false,
      isLoginClicked: false,
    };
  }

  test = () => {
    this.setState({
      isLoginClicked: false,
    });
  };

  openModal = () => {
    console.log('hi');
    this.setState({
      isLoginClicked: true,
    });
  };

  render() {
    const { isUserLogin, isLoginClicked } = this.state;
    const logoutedBtn = (
      <>
        <button className="navLoginBtn" onClick={this.openModal}>
          로그인
        </button>
        <button className="navSignInBtn">회원가입</button>
      </>
    );
    const loginedBtn = (
      <>
        <button className="navLogoutBtn">로그아웃</button>
        <button>
          <div className="navUserProfile"></div>
        </button>
      </>
    );

    return (
      <>
        {isLoginClicked && (
          <Modal isLoginClicked={isLoginClicked} test={this.test} />
        )}
        <nav className="topNav">
          <span className="logoMenu">
            <header>
              <Link to="/">
                <h1>
                  <span>YOUNGCHA</span>
                  <span>PEDIA</span>
                </h1>
              </Link>
            </header>
            <ul className="navMenu">
              <li>영화</li>
            </ul>
          </span>
          <span className="searchUser">
            <label className="navSearch">
              <FontAwesomeIcon icon={faSearch} className="topNavIcon" />
              <input placeholder="작품 제목, 배우, 감독을 검색해보세요" />
            </label>
            {isUserLogin ? loginedBtn : logoutedBtn}
          </span>
        </nav>
      </>
    );
  }
}
