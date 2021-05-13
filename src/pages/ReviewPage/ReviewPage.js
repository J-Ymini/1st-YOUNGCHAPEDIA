import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons';
import './ReviewPage.scss';

export default class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
    };
    this.scrollBoxRef = createRef();
  }

  componentDidMount() {
    this.getMovieData();
    this.scrollBoxRef.current.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    this.scrollBoxRef.current.removeEventListener(
      'scroll',
      this.infiniteScroll
    );
  }

  getMovieData = () => {
    const { movieData } = this.state;
    const MOVIE_DATA = '/data/movieMockData.json';
    fetch(MOVIE_DATA)
      .then(res => res.json())
      .then(movies => {
        const updatedMovieData = movies.slice(
          movieData.length,
          movieData.length + 7
        );
        this.setState({ movieData: [...movieData, ...updatedMovieData] });
      });
  };

  infiniteScroll = () => {
    const scrollHeight = this.scrollBoxRef.current.scrollHeight;
    const scrollTop = this.scrollBoxRef.current.scrollTop;
    const offsetTop = this.scrollBoxRef.current.offsetTop;
    const clientHeight = this.scrollBoxRef.current.clientHeight;
    if (offsetTop + scrollTop + clientHeight >= scrollHeight)
      this.getMovieData();
  };

  render() {
    return (
      <section className="reviewSection">
        <header className="reviewHeader">
          <h2 className="reviewCount">14</h2>
          <h3 className="reviewNotice">
            이제 알듯 말듯 하네요. 조금만 더 평가해주세요!
          </h3>
          <div className="reviewMenu">
            <ul>
              {CATEGORY_LIST.map(category => (
                <li className="reviewMenuList" key={category.id}>
                  <button>{category.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="reviewCategory">
            <div>
              <button className="reviewCategoryBtn">🔻랜덤 영화</button>
            </div>
          </div>
        </header>
        <div className="reviewList" ref={this.scrollBoxRef}>
          <ul>
            {this.state.movieData.map(movie => (
              <li key={movie.id}>
                <img alt={`${movie.title}포스터`} src={movie.thumbnail} />
                <div className="movieInfos">
                  <div className="movieInfoColumn">
                    <div className="reviewMovieTitle">
                      <span>{movie.title}</span>
                      <span className="reviewIcon">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </span>
                    </div>
                    <div className="movieYearCountry">
                      {movie.release_date}·{movie.country}
                    </div>
                  </div>
                  <div className="movieInfoColumn">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

const CATEGORY_LIST = [
  {
    id: 1,
    name: '영화',
  },
  {
    id: 2,
    name: 'TV프로그램',
  },
  {
    id: 3,
    name: '책',
  },
];
