import React, { Component } from 'react';
import './ModalLogoLayout.scss';

export default class ModalLogoLayout extends Component {
  render() {
    return (
      <>
        <header className="modalLogo">
          <h1>
            <span>YOUGNCHA</span>
            <span>PEDIA</span>
          </h1>
        </header>
        {this.props.children}
      </>
    );
  }
}
