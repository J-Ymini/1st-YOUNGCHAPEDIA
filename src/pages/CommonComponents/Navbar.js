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

  closeModal = () => {
    this.setState({
      isLoginClicked: false,
    });
  };

  openModal = () => {
    this.setState({
      isLoginClicked: true,
    });
  };

  render() {
    const { isUserLogin, isLoginClicked } = this.state;
    const { closeModal, openModal } = this;
    const logoutedBtn = (
      <>
        <button className="navLoginBtn" onClick={openModal}>
          로그인
        </button>
        <button className="navSignInBtn" onClick={openModal}>
          회원가입
        </button>
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
          <Modal modalOpened={isLoginClicked} closeModal={closeModal} />
        )}
        <nav className="topNav">
          <span className="logoMenu">
            <header>
              <Link to="/">
                <h1>
                  {/* h1을 두 개 할 수는 없어서 h1안에 span 2개로 했습니다 */}
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
            <label className="navSearch" htmlFor="searchInput">
              <FontAwesomeIcon icon={faSearch} className="topNavIcon" />
              <input
                id="searchInput"
                placeholder="작품 제목, 배우, 감독을 검색해보세요"
              />
            </label>
            {isUserLogin ? loginedBtn : logoutedBtn}
          </span>
        </nav>
      </>
    );
  }
}
