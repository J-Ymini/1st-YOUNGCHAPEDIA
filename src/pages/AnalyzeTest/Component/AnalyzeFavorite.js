import React, { Component } from 'react';
import './AnalyzeFavorite.scss';

export default class AnalyzeFavorite extends Component {
  render() {
    const { favDatas } = this.props;
    return (
      <>
        <ul className="topResults">
          {favDatas.slice(0, 3).map((favData, index) => (
            <li className="resultRow" key={index}>
              {favData.genre || favData.country}
              <span>
                <span>{favData['average_rating']}점</span>
                <span>{favData.count}편</span>
              </span>
            </li>
          ))}
        </ul>
        <ul className="resultLists">
          {favDatas.slice(3).map((favData, index) => (
            <li className="resultList" key={index}>
              {favData.genre || favData.country}
              <span>
                <span>{favData['average_rating']}점</span>
                <span>{favData.count}편</span>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
