import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';

export default class MainSection extends React.Component {
  render() {
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <section className="mainMovie">
          <MainSectionMovieList />
          <MainSectionMovieList />
          <MainSectionMovieList />
          <MainSectionMovieList />
        </section>
      </section>
    );
  }
}
