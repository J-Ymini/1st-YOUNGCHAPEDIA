import React from 'react';
import './MainSectionMovieList.scss';

export default class MainSectionMovieList extends React.Component {
  render() {
    return (
      <section className="mainSectionMovieList">
        <div className="listRanking">1</div>
        <img
          alt="test"
          src="https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg"
        />
        <div className="listDes">
          <p className="listDesTitle">분노의 질주: 더 얼티메이트</p>
          <p className="listDesYear">2020</p>
          <p className="listDesGrade">평균 3.8</p>
        </div>
      </section>
    );
  }
}
