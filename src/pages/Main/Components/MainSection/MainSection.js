import React from 'react';
import MainSectionMovieList from '../MainSectionMovieList/MainSectionMovieList';
import './MainSection.scss';
export default class MainSection extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInfomationList: [],
    };
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
  render() {
    const { movieInfomationList } = this.state;
    return (
      <section className="mainSection">
        <div className="mainTitle">
          <p>박스오피스 순위</p>
        </div>
        <section className="mainMovie">
          <ul>
            {movieInfomationList.map(movie => {
              const { id, korean_title, country, release_date, thumbnail_img } =
                movie;
              return (
                <MainSectionMovieList
                  key={id}
                  title={korean_title}
                  country={country}
                  releaseDate={release_date}
                  thumbnailImgUrl={thumbnail_img}
                />
              );
            })}
          </ul>
        </section>
      </section>
    );
  }
}
