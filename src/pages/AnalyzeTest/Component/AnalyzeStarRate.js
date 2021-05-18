import React, { Component } from 'react';
import './AnalyzeStarRate.scss';

export default class AnalyzeStarRate extends Component {
  drawHighlightGraph = index => {
    return (
      <div
        key={index}
        className="starGraph"
        style={{
          height: this.props.starRateDatas[0][`star_${STAR_GRADE[index]}`],
          backgroundColor: '#FCA137',
        }}
      />
    );
  };

  drawGeneralGraph = index => {
    return (
      <div
        key={index}
        className="starGraph"
        style={{
          height: this.props.starRateDatas[0][`star_${STAR_GRADE[index]}`],
        }}
      />
    );
  };

  render() {
    const { starRateDatas } = this.props;
    return (
      <>
        {starRateDatas[0] && (
          <>
            <div className="analyzeStarChart">
              <div className="starGraphs">
                {STAR_GRAPH_COUNT.map(index =>
                  index / 2 === starRateDatas[0]['highest_rating']
                    ? this.drawHighlightGraph(index)
                    : this.drawGeneralGraph(index)
                )}
              </div>
              <div className="starGraphsLabel">
                {STAR_GRAPH_COUNT.map(index =>
                  Number.isInteger(index / 2) ? (
                    <span key={index / 2}>{index / 2}</span>
                  ) : null
                )}
              </div>
            </div>
            <ul className="topResults">
              <li className="resultRow">
                {starRateDatas[0].average}
                <span>별점 평균</span>
              </li>
              <li className="resultRow">
                {starRateDatas[0]['all_count']}
                <span>별점 개수</span>
              </li>
              <li className="resultRow">
                {starRateDatas[0]['highest_rating']}
                <span>많이 준 별점</span>
              </li>
            </ul>
          </>
        )}
      </>
    );
  }
}

const STAR_GRADE = {
  1: 'halfone',
  2: 'one',
  3: 'halftwo',
  4: 'two',
  5: 'halfthree',
  6: 'three',
  7: 'halffour',
  8: 'four',
  9: 'halffive',
  10: 'five',
};

const STAR_GRAPH_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
