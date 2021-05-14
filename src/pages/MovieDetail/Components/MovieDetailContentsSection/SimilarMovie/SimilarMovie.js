import React from 'react';
import './SimilarMovie.scss';

export default class SimilarMovie extends React.Component {
  render() {
    const { img, name, rating } = this.props;
    return (
      <>
        <li className="SimilarMovie">
          <img alt="poster" src={img} />
          <dl>
            <dt>네임프롭스값 넣어야함</dt>
            <dd className="averageOfStarRatings">평균 ⭐ {rating}</dd>
            <dd>영화</dd>
          </dl>
        </li>
      </>
    );
  }
}
