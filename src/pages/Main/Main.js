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
    const { preItems, items } = this.state;
    return fetch('data/movieMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieList => {
        let dataToAdd = movieList.slice(preItems, items);
        this.setState({
          movieInformationList: [
            ...this.state.movieInformationList,
            ...dataToAdd,
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
      fetch('data/movieMockData.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          let result = res.slice(preItems, items);
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
    this.getData('data/boxoffice.json')
      .then(this.getData('data/netflix.json'))
      .then(this.getData('data/watcha.json'))
      .then(this.getMockData());
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  render() {
    console.log('preItems', this.state.preItems);
    console.log('items', this.state.items);
    console.log('movieInformation', this.state.movieInformationList);
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
