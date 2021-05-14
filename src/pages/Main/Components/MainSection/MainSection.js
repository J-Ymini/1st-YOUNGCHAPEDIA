import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInfomationList: [],
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
          movieInfomationList,
        });
      });
  }

  handleNextSliding = () => {
    const { movieInfomationList, index } = this.state;
    if (index === Math.floor(movieInfomationList.length / 5)) {
      return;
    }
    this.setState({
      index: index + 1,
      width: this.containerWidth.current.scrollWidth * index + 1,
    });
  };

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
    const { movieInfomationList, width } = this.state;
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <button
          disabled={this.state.index === 1 && 'disabled'}
          onClick={this.handlePreSliding}
          className="mainMoviePreBtn"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <section className="mainMovie" ref={this.containerWidth}>
          <ul>
            {movieInfomationList.map(movie => {
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
