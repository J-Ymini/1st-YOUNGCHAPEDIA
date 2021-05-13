import React, { Component, createRef } from 'react';
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
      test: false,
    };
    this.modalRef = createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.closeModal);
  }
  componentDidUnmount() {
    window.addEventListener('click', this.closeModal);
  }

  openModal = () => {
    console.log('hi');
    this.setState({
      test: true,
    });
  };

  closeModal = e => {
    this.modalRef = e => {
      console.log(e.target);
    };
    // console.log(this.modalRef.current);
    // if (this.state.test && !this.modalRef.current.contains(e.target)) {
    //   this.setState({ test: false });
    // }
  };

  render() {
    const { isUserLogin } = this.state;
    //원래는 바깥으로 뺐었는데 onClick을 붙이려면 여기 안에 있어야 해서 다시 이동했습니다
    // 이런 것도 ref를 걸어 비효율적인 연산을 줄이나요?
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
        {/* 연산자로 렌더링하면 null 떠서 오류남 */}
        <Modal ref={this.modalRef} />
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
