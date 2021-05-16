import React, { Component, createRef } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  closeModal = e => {
    if (!this.modalRef.current.contains(e.target)) this.props.closeModal();
  };

  render() {
    return (
      <>
        <div className="modalContainer">
          <div ref={this.modalRef} className="modal">
            {/* 여기에 원하는 내용 컴포넌트 넣어 사용 - 콘텐츠에 margin/padding등을 넣어 modal 크기 조정하기, 아래는 예시*/}
            <this.props.childComponent />
          </div>
          <div className="modalBackground" onClick={this.closeModal} />
        </div>
      </>
    );
  }
}

/*
------------
How To Use
------------
1. 모달창을 실행할 부모 컴포넌트 안에 closeModal 메소드를 작성해주세요
  closeModal = () => {
    this.setState({
      설정하신 state 이름: false,
    });
  };
ex.<Modal
      closeModal={closeModal}
    />
  
------------
2. Modal 안에 넣을 컴포넌트를 부모 컴포넌트에서 전달해주세요. props 이름은 childComponent입니다.
ex.<Modal
      childComponent={<LoginSignInForm />}
    />
------------
*/
