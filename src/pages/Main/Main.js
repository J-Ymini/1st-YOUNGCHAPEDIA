import React from 'react';
import './Main.scss';

export default class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <section className="mainSection">
          <div className="mainSectionTitle">
            <p>박스오피스 순위</p>
          </div>
          <section className="mainSectionMovie">
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
          </section>
        </section>
      </section>
    );
  }
}
