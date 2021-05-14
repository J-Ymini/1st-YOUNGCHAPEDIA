import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import API_URLS from '../../config';
import './LoginSignInForm.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      name: '',
    };
  }

  requestLogin = e => {
    e.preventDefault();
    fetch(API_URLS.SIGNIN, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        if (res) {
          // ToDo : 토큰 완성시 이어서 작업 예정
          // save localstroage
          // localStorage.setItem('TOKEN', res.token);
          // push to main
          // this.props.history.push('/');
        } else {
          alert('로그인 하세요');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDeleteBtn = e => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.previousSibling.name]: '',
    });
  };

  checkIdValid = () => {
    const { id } = this.state;
    let isIdValid = true;
    if (id) {
      const checkIdCondition =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return (isIdValid = checkIdCondition.test(id));
    } else return isIdValid;
  };

  checkPwValid = () => {
    const { pw } = this.state;
    let isPwValid = true;
    if (pw) {
      const checkChars = /(?=.*[A-Za-z])/;
      const checkNums = /(?=.*\d)/;
      const checkMarks = /(?=.*[$@$!%*#?&])/;
      const checkCounts = /^[A-Za-z\d$@$!%*#?&]{10,}$/;
      return (isPwValid =
        checkCounts.test(pw) &&
        [checkChars.test(pw), checkNums.test(pw), checkMarks.test(pw)].filter(
          Boolean
        ).length >= 2);
    } else return isPwValid;
  };

  checkNameValid = () => {
    const { name } = this.state;
    let isNameValid = true;
    if (name) {
      isNameValid = name.length > 1;
      return isNameValid;
    } else return isNameValid;
  };

  render() {
    const { id, pw, name } = this.state;
    //default : LoginBtn 클릭했을 때
    // const { isSignInBtnClicked } = this.props;
    const isSignInBtnClicked = false;
    const {
      handleInput,
      requestLogin,
      handleDeleteBtn,
      checkIdValid,
      checkPwValid,
      checkNameValid,
    } = this;
    const isIdValid = checkIdValid();
    const isPwValid = checkPwValid();
    const isNameValid = checkNameValid();
    const isIdPwBothValid = isIdValid && isPwValid;
    const isInfoAllValid = isIdValid && isPwValid && isNameValid;

    return (
      <>
        {isSignInBtnClicked ? (
          <h2 className="formHeader">회원가입</h2>
        ) : (
          <h2 className="formHeader">로그인</h2>
        )}
        <form className="form">
          {isSignInBtnClicked && (
            <div className={`inputDiv ${isNameValid || 'warningInputDiv'}`}>
              <label className={`inputLabel ${isNameValid || 'warningLabel'}`}>
                <input
                  placeholder="이름"
                  type="text"
                  name="name"
                  className={isNameValid || 'warningInput'}
                  onChange={handleInput}
                  value={name}
                />
                {isNameValid || (
                  <>
                    <button className="deleteBtn" onClick={handleDeleteBtn}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <span className="warningIcon">!</span>
                  </>
                )}
              </label>
              {isNameValid || (
                <p className="warningText">정확하지 않은 이름입니다.</p>
              )}
            </div>
          )}
          <div className={`inputDiv ${isIdValid || 'warningInputDiv'}`}>
            <label className={`inputLabel ${isIdValid || 'warningLabel'}`}>
              <input
                placeholder="이메일"
                type="text"
                name="id"
                className={isIdValid || 'warningInput'}
                onChange={handleInput}
                value={id}
              />
              {isIdValid || (
                <>
                  <button className="deleteBtn" onClick={handleDeleteBtn}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <span className="warningIcon">!</span>
                </>
              )}
            </label>
            {isIdValid || (
              <p className="warningText">정확하지 않은 이메일입니다.</p>
            )}
          </div>
          <div className={`inputDiv ${isPwValid || 'warningInputDiv'}`}>
            <label className={`inputLabel ${isPwValid || 'warningLabel'}`}>
              <input
                placeholder="비밀번호"
                type="password"
                name="pw"
                className={isPwValid || 'warningInput'}
                onChange={handleInput}
                value={pw}
              />
              {isPwValid || (
                <>
                  <button className="deleteBtn" onClick={handleDeleteBtn}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <span className="warningIcon">!</span>
                </>
              )}
            </label>
            {isPwValid || (
              <p className="warningText">
                비밀번호는 영문, 숫자, 특수문자 중 2개 이상을 조합하여 최소
                10자리 이상이어야 합니다.
              </p>
            )}
          </div>
          {isSignInBtnClicked ? (
            <button
              className="loginSignInBtn"
              disabled={!isIdPwBothValid || !isInfoAllValid}
              onClick={requestLogin}
            >
              회원가입
            </button>
          ) : (
            <button
              className="loginSignInBtn"
              disabled={!isIdPwBothValid || !isInfoAllValid}
              onClick={requestLogin}
            >
              로그인
            </button>
          )}
        </form>
        {isSignInBtnClicked ? (
          <p className="suggestSignIn suggestLogin">
            이미 가입하셨나요?<span className="loginSignInLink">로그인</span>
          </p>
        ) : (
          <>
            <p className="lostPassword">비밀번호를 잊어버리셨나요?</p>

            <p className="suggestSignIn">
              계정이 없으신가요?
              <span className="loginSignInLink">회원가입</span>
            </p>
          </>
        )}
      </>
    );
  }
}
