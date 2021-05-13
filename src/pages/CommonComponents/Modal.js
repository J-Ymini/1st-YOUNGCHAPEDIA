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
    if (
      this.props.isLoginClicked &&
      !this.modalRef.current.contains(e.target)
    ) {
      // console.log('Click');
      this.props.test();
    }
  };

  render() {
    return (
      <>
        <div className="modalContainer">
          <div ref={this.modalRef} className="modal">
            <p>안녕하세요</p>
          </div>
          <div className="modalBackground" onClick={this.closeModal} />
        </div>
      </>
    );
  }
}
