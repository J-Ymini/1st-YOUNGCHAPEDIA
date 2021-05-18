import React, { Component } from 'react';
import './MenuList.scss';

export default class MenuList extends Component {
  render() {
    const { genre, handleClickMenu, isMenuChecked, id } = this.props;
    return (
      <>
        <li className="menuList" onClick={handleClickMenu}>
          {genre}
          {isMenuChecked && <span className="menuChecked">✔</span>}
        </li>
      </>
    );
  }
}
