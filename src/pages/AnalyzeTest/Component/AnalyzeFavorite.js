import React, { Component } from 'react';
import './AnalyzeFavorite.scss';

export default class AnalyzeFavorite extends Component {
  render() {
    const { favDatas } = this.props;
    return (
      <>
        <ul className="topResults">
          {favDatas.slice(0, 3).map((favData, index) => (
            // Todo : id값이 같이 오는지 확인되지 않아서 확인되면 id값으로 바꾸거나 다른 방법으로 key값 대체하겠습니당
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
            // Todo : id값이 같이 오는지 확인되지 않아서 확인되면 id값으로 바꾸거나 다른 방법으로 key값 대체하겠습니당
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
