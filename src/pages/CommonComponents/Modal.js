import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  render() {
    return (
      <>
        <div className="modalContainer">
          <div className="modal">
            <p>안녕하세요</p>
          </div>
        </div>
        {/* <div className="modalBackground"></div> */}
      </>
    );
  }
}
