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
    if (this.props.modalOpened && !this.modalRef.current.contains(e.target))
      this.props.closeModal();
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
1. Modal을 이용할 부모 컴포넌트에서 state값을 초기값 false로 준비하여 Modal 컴포넌트에 Props로 전달해주세요. props이름은  modalOpened입니다. 이 state값으로 모달창을 키고 끌거예요~!
ex.<Modal
      modalOpened={isLoginClicked}
    />
------------
2. 부모 컴포넌트 안에 closeModal 메소드를 작성해주세요
  closeModal = () => {
    this.setState({
      설정하신 state 이름: false,
    });
  };
ex.<Modal
      closeModal={closeModal}
    />
  
------------
3. Modal 안에 넣을 컴포넌트를 부모 컴포넌트에서 전달해주세요. props 이름은 childComponent입니다.
ex.<Modal
      childComponent={test} <- test 컴포넌트 전달
    />
------------
*/
