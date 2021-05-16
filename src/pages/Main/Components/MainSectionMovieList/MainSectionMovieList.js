import React from 'react';
import './MainSectionMovieList.scss';
export default class MainSectionMovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movieListRanking: 1,
    };
  }

  rankingUp() {
    this.setState({
      movieListRanking: this.state.movieListRanking + 1,
    });
  }

  render() {
    const {
      title,
      country,
      releaseDate,
      thumbnailImgUrl,
      width,
      netflix,
      watcha,
    } = this.props;
    return (
      <li
        style={{
          transform: `translateX(-${width}px)`,
          transition: 'transform .8s ', //영화 각 리스트에 translateX 스타일 지정
        }}
        className="mainSectionMovieList"
      >
        <div
          className={
            (netflix && 'listNetflixicon') || (watcha && 'listWatchaicon')
          }
        ></div>
        <div className="listRanking"></div>
        <img alt="test" src={thumbnailImgUrl} />
        <div className="listDescription">
          <p className="listDescriptionTitle">{title}</p>
          <p className="listDescriptionYear">
            {country} ・ {releaseDate}
          </p>
          <p className="listDescriptionGrade">평균 3.8</p>
        </div>
      </li>
    );
  }
}
