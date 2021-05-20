import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInformationList: [],
      preItems: 0,
      items: 1,
    };
  }

  //백엔드에서 데이터 받아오는 함수
  getMovieListData = address => {
    return fetch(address)
      .then(res => res.json())
      .then(movieList => {
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            movieList.MESSAGE[0],
          ],
        });
      });
  };

  getMockData = () => {
    const { preItems, items } = this.state;
    return fetch('data/movieMockData.json')
      .then(res => res.json())
      .then(movieList => {
        const movieListToAdd = movieList.slice(preItems, items);
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            ...movieListToAdd,
          ],
        });
      });
  };

  // 무한 스크롤
  infiniteScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const { preItems, items } = this.state;

    if (scrollTop >= scrollHeight - clientHeight) {
      this.setState({
        preItems: preItems + 1,
        items: items + 1,
      });
      fetch('data/movieMockData.json')
        .then(res => res.json())
        .then(res => {
          let result = res.slice(preItems + 1, items + 1);
          this.setState({
            movieInformationList: [
              ...this.state.movieInformationList,
              ...result,
            ],
          });
        });
    }
  };

  componentDidMount() {
    this.getMovieListData('data/boxoffice.json')
      .then(() => this.getMovieListData('data/netflix.json'))
      .then(() => this.getMovieListData('data/watcha.json'))
      .then(() => this.getMockData());
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  render() {
    return (
      <>
        {this.state.movieInformationList && (
          <section className="main">
            {this.state.movieInformationList.map((listElement, movieTitle) => {
              return (
                <MainSection
                  goToDetailPage={this.goToDetailPage}
                  movieInformationList={listElement}
                  movieTitle={movieTitle}
                />
              );
            })}
          </section>
        )}
      </>
    );
  }
}
export default withRouter(Main);
