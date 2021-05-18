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

  // Todo : API 붙이기
  // componentDidMount() {
  //   let token = localStorage.getItem('TOKEN');
  //   fetch(API_URLS.MYTEST, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(res => {
  //       if (res.status === 200 && token) {
  //         return res.json();
  //       }
  //     })
  //     .then(data =>
  //       this.setState({
  //         favDatas: [data['favorite_genre'], data['favorite_country']],
  //         starRateDatas: [...data['star_distribution']],
  //       })
  //     );
  // }

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
            {/* 이름은 데이터 받아오는걸로 추후 변경예정입니다 */}
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
