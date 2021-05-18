import React, { Component } from 'react';
import MenuList from './MenuList';
import './FilterGenreMenu.scss';

export default class FilterGenreMenu extends Component {
  constructor() {
    super();
    this.state = {
      isMenuChecked: false,
    };
  }

  handleClickMenu = e => {
    console.log(e.target);
    this.setState({
      isMenuChecked: !this.state.isMenuChecked,
    });
    // API?`id==${id}`
    // fetch(API, {
    //   headers: {
    //     Authorization: token,
    //   },
    // }).then(res => {
    //   if (res.status === 200 && token) {
    //     return res.json();
    //   }
    // });
  };

  render() {
    const { isMenuChecked } = this.state;
    const { filterGenreData } = this.props || '';
    return (
      <section className="filterGenreMenu">
        <header className="menuTitle">
          <button className="menuClosedBtn">X</button>영화
        </header>
        <ul className="menuLists">
          <li className="menuList" onClick={this.handleClickMenu}>
            랜덤 영화 {isMenuChecked && <span className="menuChecked">✔</span>}
          </li>
          <h6 className="menuSubTitle">장르</h6>
          {filterGenreData.map(el => (
            <MenuList
              key={el[0]}
              id={el[0]}
              genre={el[1]}
              handleCheckedMark={this.handleCheckedMark}
              handleClickMenu={this.handleClickMenu}
            />
          ))}
        </ul>
      </section>
    );
  }
}
