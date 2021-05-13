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
    if (this.props.isLoginClicked && !this.modalRef.current.contains(e.target))
      this.props.closeModal();
  };

  render() {
    return (
      <>
        <div className="modalContainer">
          <div ref={this.modalRef} className="modal">
            {/* 여기에 원하는 내용 넣어 사용 - 콘텐츠에 margin/padding등을 넣어 modal 크기 조정하기, 아래는 예시*/}
            <p>안녕하세요</p>
          </div>
          <div className="modalBackground" onClick={this.closeModal} />
        </div>
      </>
    );
  }
}
