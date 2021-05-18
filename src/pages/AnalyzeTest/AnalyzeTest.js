import React, { Component } from 'react';
import AnalyzeCardLayout from './Component/AnalyzeCardLayout';
import AnalyzeFavorite from './Component/AnalyzeFavorite';
import AnalyzeStarRate from './Component/AnalyzeStarRate';
import './AnalyzeTest.scss';

export default class AnalyzeTest extends Component {
  constructor() {
    super();
    this.state = {
      favDatas: [],
      starRateDatas: [],
    };
  }

  componentDidMount() {
    fetch('/data/myTestMockData.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          favDatas: [data['favorite_genre'], data['favorite_country']],
          starRateDatas: [...data['star_distribution']],
        })
      );
  }

  render() {
    const { favDatas, starRateDatas } = this.state;
    return (
      <section className="analyzeTestPage">
        <header className="analyzeHeader">
          <div>
            <span>YOUNGCHA</span>PEDIA
          </div>
          <p>취향분석</p>
          <div>
            <i className="fas fa-user-circle analyzeProfileImg" />
            <span>김영차</span>
          </div>
        </header>
        <AnalyzeCardLayout
          childComponent={<AnalyzeStarRate starRateDatas={starRateDatas} />}
          favTitle={2}
        />
        {favDatas && (
          <>
            {favDatas.map((favData, index) => (
              <AnalyzeCardLayout
                key={index}
                childComponent={<AnalyzeFavorite favDatas={favData} />}
                favTitle={index}
              />
            ))}
          </>
        )}
      </section>
    );
  }
}
