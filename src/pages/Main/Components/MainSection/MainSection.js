import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      // movieInformationList: [],
      width: '',
      index: 0,
    };
    this.containerWidth = React.createRef();
  }

  //다음 슬라이드 이동 함수
  handleNextSliding = () => {
    const { index } = this.state;
    const { movieInformationList } = this.props;

    if (index === Math.floor(movieInformationList.length / 5)) {
      return;
    }
    this.setState({
      index: index + 1,
      width: this.containerWidth.current.scrollWidth * (index + 1),
    });
  };

  //이전 슬라이드 이동 함수
  handlePreSliding = () => {
    const { index } = this.state;
    if (index === 0) {
      return;
    }
    this.setState({
      index: index - 1,
      width: this.containerWidth.current.scrollWidth * (index - 1),
    });
  };

  render() {
    const { width, index } = this.state;
    const { listTitle, movieInformationList } = this.props;
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>{listTitle}</p>
        </div>
        <button
          disabled={index === 0 && 'disabled'} //초기값일때 이전버튼 비활성화
          onClick={this.handlePreSliding}
          className="mainMoviePreBtn"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <section className="mainMovie" ref={this.containerWidth}>
          <ul>
            {movieInformationList.map(movie => {
              const { id, korean_title, country, release_date, thumbnail_img } =
                movie;
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

// }
