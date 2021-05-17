import { faWindows } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import SimilarMovie from './Components/SimilarMovie/SimilarMovie';
import './MovieDetailContentsSection.scss';

export default class MovieDetailContentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { similarMovieList: [] };
    this.fadeInTarget = React.createRef();
  }

  handleScroll = () => {
    const { scrollTop, clientHeight } = document.documentElement;

    const eventStartHeight = scrollTop + clientHeight;
    if (eventStartHeight > 1260) {
      this.fadeInTarget.current.className = 'similarMovieList fadeIn';
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

  componentDidMount = () => {
    fetch('http://localhost:3000/data/SimilarMovieMockData.json')
      .then(res => res.json())
      .then(res => this.setState({ similarMovieList: res.similarMovieData }));

    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  render() {
    const { similarMovieList } = this.state;
    return (
      <section className="MovieDetailContentsSection">
        <div className="movieDetailContents">
          <article className="movieInformation">
            <div className="movieInformationContents">
              <header>
                <h2>기본정보</h2>
                <button>더보기</button>
              </header>
              <article>
                <div>
                  <div>F9</div>
                  <br />
                  <div>2020 &middot; 미국 &middot; 스릴러</div>
                  <br />
                  <div>2시간 15분</div>
                </div>
                <p>
                  기다림은 끝났다! 전 세계가 기다려온 단 하나의 액션블록버스터!
                  도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이
                  사이퍼(샤를리즈 테론)와 연합해 전 세계를 위기로 빠트릴
                  위험천만한 계획을 세운다는 사실을 알게 되고,...
                </p>
              </article>
            </div>
          </article>
          <article className="comments">
            <div className="commentContents">
              <header>
                <div className="commentSubjectAndCount">
                  <h2>코멘트</h2>
                  <span>20+</span>
                </div>
                <button>더보기</button>
              </header>
              <article> 코멘트 컴포넌트가 들어갈 자리입니다.</article>
            </div>
          </article>
          <article className="similarMovie">
            <div className="similarMovieContents">
              <header>
                <h2>비슷한 작품</h2>
              </header>
              <ul className="similarMovieList" ref={this.fadeInTarget}>
                {similarMovieList.map(movie => {
                  return (
                    <SimilarMovie
                      key={movie.id}
                      img={movie.img}
                      name={movie.koreanTitle}
                      rating={movie.AverageofStarRating}
                    />
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
