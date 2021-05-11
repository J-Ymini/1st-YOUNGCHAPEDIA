import React from 'react';
import './MainSectionMovieList.scss';

export default class MainSectionMovieList extends React.Component {
  render() {
    return (
      <ul>
        <li className="mainSectionMovieList">
          <div className="mainSectionMovieListRanking">1</div>
          <img
            src="https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg"
            alt="test"
            className="mainSectionMovieListThum"
          ></img>
          <div className="mainSectionMovieListDes">
            <p className="mainSectionMovieListDesTitle">
              분노의 질주: 더 얼티메이트
            </p>
            <p className="mainSectionMovieListDesYear">2020</p>
            <p className="mainSectionMovieListDesGrade">평균 3.8</p>
          </div>
        </li>
      </ul>
    );
  }
}
