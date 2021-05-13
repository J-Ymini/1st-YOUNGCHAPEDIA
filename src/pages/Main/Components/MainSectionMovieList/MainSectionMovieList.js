import React from 'react';
import './MainSectionMovieList.scss';
export default class MainSectionMovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollStart: 0,
    };
  }

  // handleScrollnext = () => {
  //   this.setState({
  //     scrollleft(100px)
  //   });
  // };

  render() {
    const { title, country, releaseDate, thumbnailImgUrl } = this.props;
    return (
      <li className="mainSectionMovieList">
        <div className="listRanking">1</div>
        <img alt="test" src={thumbnailImgUrl} />
        <div className="listDescription">
          <p className="listDescriptionTitle">{title}</p>
          <p className="listDescriptionYear">
            {country}・{releaseDate}
          </p>
          <p className="listDescriptionGrade">평균 3.8</p>
        </div>
      </li>
    );
  }
}
