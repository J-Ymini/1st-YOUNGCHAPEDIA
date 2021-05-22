import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieListContainerWidth: 0,
      movieListIndex: 1,
    };
    this.containerWidth = React.createRef();
  }

  //다음 슬라이드 이동 함수
  handleNextSliding = () => {
    const { movieListIndex } = this.state;
    const { movieInformationList } = this.props;
    if (movieListIndex === Math.ceil(movieInformationList.length / 5)) {
      return;
    }
    this.setState({
      movieListIndex: movieListIndex + 1,
      movieListContainerWidth:
        this.containerWidth.current.scrollWidth * movieListIndex,
    });
  };

  //이전 슬라이드 이동 함수
  handlePreSliding = () => {
    const { movieListIndex } = this.state;
    if (movieListIndex === 1) {
      return;
    }
    this.setState({
      movieListIndex: movieListIndex - 1,
      movieListContainerWidth:
        this.containerWidth.current.scrollWidth * (movieListIndex - 2),
    });
  };

  render() {
    const { movieListContainerWidth, movieListIndex } = this.state;
    const { movieInformationList, movieTitle } = this.props;
    console.log('인덱스', movieListIndex, '이동x축', movieListContainerWidth);
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>{TITLE[movieTitle]}</p>
        </div>
        <button
          disabled={movieListIndex === 0} //초기값일때 이전버튼 비활성화
          onClick={this.handlePreSliding}
          className="mainMoviePreBtn"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <section className="mainMovie" ref={this.containerWidth}>
          <ul>
            {movieInformationList.map((movie, movieListRanking) => {
              const {
                id,
                korean_title,
                country,
                release_date,
                thumbnail_img,
                english_title,
                netflix,
                watcha,
              } = movie;
              return (
                <MainSectionMovieList
                  id={id}
                  goToDetail={this.props.goToDetailPage}
                  movieListRanking={movieListRanking}
                  englishTitle={english_title}
                  key={id}
                  title={korean_title}
                  country={country}
                  releaseDate={release_date}
                  thumbnailImgUrl={thumbnail_img}
                  watcha={watcha}
                  netflix={netflix}
                  width={movieListContainerWidth}
                />
              );
            })}
          </ul>
          <div></div>
        </section>
        <button onClick={this.handleNextSliding} className="mainMovieNextBtn">
          <i className="fas fa-chevron-right"></i>
        </button>
      </section>
    );
  }
}

const TITLE = {
  0: '🏆 박스오피스 순위',
  1: '🏅 넷플릭스 추천 영화',
  2: '🎖 영차 추천 영화',
  3: '💖 달달한 로맨틱 영화',
  4: '🌿 여름과 잘어울리는 영화',
  5: '🚏 감성적인 일본 애니메이션',
  6: '🪐 신비롭고 흥미로운 우주 SF 영화',
};
