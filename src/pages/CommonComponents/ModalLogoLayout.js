import React, { Component } from 'react';
import './ModalLogoLayout.scss';

export default class ModalLogoLayout extends Component {
  render() {
    return (
      <div className="modalSize">
        <header className="modalLogo">
          <h1>
            <span>YOUNGCHA</span>
            <span>PEDIA</span>
          </h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}
