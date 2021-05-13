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

  handleSliding = () => {
    this.setState({
      index: this.state.index + 1,
      width: this.containerWidth.current.scrollWidth * this.state.index,
    });
  };

  render() {
    const { movieInfomationList, width } = this.state;
    return (
      <section className="mainSection">
        <input onChange={this.handleSliding} />
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <section className="mainMovie" ref={this.containerWidth}>
          <button className="mainMoviePreBtn"></button>
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
          <button className="mainMovieNextBtn"></button>
        </section>
      </section>
    );
  }
}
