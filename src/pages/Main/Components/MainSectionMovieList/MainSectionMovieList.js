import React from 'react';
import './MainSectionMovieList.scss';

export default class MainSectionMovieList extends React.Component {
  render() {
    return (
      <li className="mainSectionMovieList">
        <ol>
          <li className="listRanking">1</li>
        </ol>
        <img
          alt="test"
          src="https://movie-phinf.pstatic.net/20210421_37/1618971733493B4ykS_JPEG/movie_image.jpg"
        />
        <div className="listDescription">
          <p className="listDescriptionTitle">분노의 질주: 더 얼티메이트</p>
          <p className="listDescriptionYear">2020</p>
          <p className="listDescriptionGrade">평균 3.8</p>
        </div>
      </li>
    );
  }
}
