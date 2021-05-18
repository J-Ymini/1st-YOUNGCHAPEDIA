import React, { Component, createRef } from 'react';
import { throttle } from '../../utils/throttle';
import ReviewMovieList from './Component/ReviewMovieList';
import FilterGenreMenu from './Component/FilterGenreMenu';
import Modal from '../CommonComponents/Modal';

import API_URLS from '../../config';
import './ReviewPage.scss';

export default class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      filterGenreData: [],
      ratingsCount: 0,
      modalOpened: false,
    };
    this.scrollBoxRef = createRef();
  }

  componentDidMount() {
    this.getMovieData();
    // this.updateRatingCount();
    this.scrollBoxRef.current.addEventListener(
      'scroll',
      throttle(this.infiniteScroll)
    );
  }

  getMovieData = () => {
    // let token = localStorage.getItem('TOKEN') || '';
    const { movieData } = this.state;
    // fetch(API_URLS.REVIEW, {
    //   headers: {
    //     Authorization: token,
    //   },
    // })
    //   .then(res => {
    //     if (res.status === 200 && token) {
    //       return res.json();
    //     }
    //   })
    //   .then(res => {
    //     const updatedMovieData = res['result'].slice(
    //       movieData.length,
    //       movieData.length + 7
    //     );
    //     this.setState({
    //       movieData: [...movieData, ...updatedMovieData],
    //     });
    //   });

    // 서버 연결 안됐을 때 테스트용
    fetch('/data/movieMockData.json')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        const updatedMovieData = res['result'].slice(
          movieData.length,
          movieData.length + 7
        );
        this.setState({
          movieData: [...movieData, ...updatedMovieData],
          filterGenreData: res['genre'],
        });
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

  // updateRatingCount = () => {
  //   fetch(API_URLS.REVIEW, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       const updatedRatingsCount = res['rating_movies'];
  //       this.setState({
  //         ratingsCount: updatedRatingsCount,
  //       });
  //     });
  // };
  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  openFilterGenre = () => {
    this.setState({
      modalOpened: true,
    });
  };

  render() {
    const { movieData, ratingsCount, modalOpened, filterGenreData } =
      this.state;
    const { openFilterGenre, updateRatingCount, closeModal } = this;
    return (
      <>
        {modalOpened && (
          <Modal
            closeModal={closeModal}
            childComponent={
              <FilterGenreMenu filterGenreData={filterGenreData} />
            }
          />
        )}
        <section className="reviewSection">
          <header className="reviewHeader">
            <h2 className="reviewCount">{ratingsCount}</h2>
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
                <button className="reviewCategoryBtn" onClick={openFilterGenre}>
                  🔻랜덤 영화
                </button>
              </div>
            </div>
          </header>
          <div className="reviewList" ref={this.scrollBoxRef}>
            <ul>
              {movieData.map(movie => (
                <ReviewMovieList
                  key={movie.movie_id}
                  id={movie.movie_id}
                  movieTitle={movie.title}
                  imgSrc={movie.thumbnail}
                  movieReleaseDate={movie.release_date}
                  movieCountry={movie.country}
                  updateRatingCount={updateRatingCount}
                />
              ))}
            </ul>
          </div>
        </section>
      </>
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
