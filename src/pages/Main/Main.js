import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInformationList: [],
      preItems: 0,
      items: 1,
    };
  }

  //백엔드에서 데이터 받아오는 함수
  getData = address => {
    return fetch(address, {
      method: 'GET',
    })
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
    return fetch('data/movieMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieList => {
        let dataToAdd = movieList.slice(this.state.preItems, this.state.items);
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            ...dataToAdd,
          ],
        });
        console.log(dataToAdd);
        console.log(this.state.items);
      });
  };

  infiniteScroll = () => {
    if (
      document.documentElement.scrollTop >=
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      this.setState({
        preItems: this.state.preItems + 1,
        items: this.state.items,
      });
      fetch('data/movieMockData.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          let result = res.slice(this.state.preitem, this.state.item);
          this.setState({
            movieInformationList: [
              ...this.state.movieInformationList,
              ...result,
            ],
          });
        });
    }
  };

  // removeInfiniteScroll = () => {
  //   if(this.state.)
  // }
  // 함수 실행
  componentDidMount() {
    this.getData('data/boxoffice.json')
      .then(this.getData('data/netflix.json'))
      .then(this.getData('data/watcha.json'))
      .then(this.getMockData());
    window.addEventListener('scroll', this.infiniteScroll);
    console.log(this.state.item);
  }

  render() {
    return (
      <>
        {this.state.movieInformationList && (
          <section className="main">
            {this.state.movieInformationList.map((listElement, movieTitle) => {
              return (
                <MainSection
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
