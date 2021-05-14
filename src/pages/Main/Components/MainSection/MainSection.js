import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInformationList: [],
      width: '',
      index: 1,
    };
    this.containerWidth = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/MainMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieInfomationList => {
        this.setState({
          movieInformationList: movieInfomationList,
        });
      });
  }

  //다음 슬라이드 이동 함수
  handleNextSliding = () => {
    const { movieInformationList, index } = this.state;

    if (index === Math.floor(movieInformationList.length / 5)) {
      return;
    }
    this.setState({
      index: index + 1,
      width: this.containerWidth.current.scrollWidth * index,
    });
  };

  //이전 슬라이드 이동 함수
  handlePreSliding = () => {
    const { index } = this.state;
    if (index === 1) {
      return;
    }
    this.setState({
      index: index - 1,
      width: this.containerWidth.current.scrollWidth * (index - 2),
    });
  };

  render() {
    const { movieInformationList, width, index } = this.state;
    const keys = Object.keys(movieInformationList)[0];
    // 조건부 렌더링
    if (movieInformationList.length === 0) {
      return null;
    } else {
      return (
        <section className="mainSection">
          <div className="mainTitle">
            <p>{keys}</p>
          </div>
          <button
            disabled={index === 1 && 'disabled'} //초기값일때 이전버튼 비활성화
            onClick={this.handlePreSliding}
            className="mainMoviePreBtn"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <section className="mainMovie" ref={this.containerWidth}>
            <ul>
              {movieInformationList[keys].map(movie => {
                const {
                  id,
                  korean_title,
                  country,
                  release_date,
                  thumbnail_img,
                } = movie;
                return (
                  <MainSectionMovieList
                    width={width}
                    key={id}
                    title={korean_title}
                    country={country}
                    releaseDate={release_date}
                    thumbnailImgUrl={thumbnail_img}
                  />
                );
              })}
            </ul>
            <div></div>
          </section>
          <button onClick={this.handleNextSliding} className="mainMovieNextBtn">
            <i class="fas fa-chevron-right"></i>
          </button>
        </section>
      );
    }
  }
}
