import React, { Component } from 'react';
import MenuList from './MenuList';
import API_URLS from '../../../config';
import './FilterGenreMenu.scss';

export default class FilterGenreMenu extends Component {
  constructor() {
    super();
    this.state = {
      isMenuChecked: false,
      genreMenus: {},
    };
  }

  componentDidMount() {
    fetch(API_URLS['REVIEW_GENRE'])
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => this.setState({ genreMenus: res['genre_list'] }));
  }

  clickRandomMenu = () => {
    this.props.getMovieData();
    this.setState({
      isMenuChecked: !this.state.isMenuChecked,
    });
  };

  render() {
    const { getMovieData, closeModal } = this.props;
    const { isMenuChecked, genreMenus } = this.state;
    const genreMenusArr = Object.entries(genreMenus);
    return (
      <section className="filterGenreMenu">
        <header className="menuTitle">
          <button className="menuClosedBtn" onClick={closeModal}>
            X
          </button>
          영화
        </header>
        <ul className="menuLists">
          <li className="menuList" onClick={this.clickRandomMenu}>
            랜덤 영화 {isMenuChecked && <span className="menuChecked">✔</span>}
          </li>
          <h6 className="menuSubTitle">장르</h6>
          {genreMenusArr.map(([id, genre]) => (
            <MenuList
              getMovieData={getMovieData}
              key={id}
              id={id}
              genre={genre}
            />
          ))}
        </ul>
      </section>
    );
  }
}
