import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInformationList: [],
    };
  }

  componentDidMount() {
    fetch('http://192.168.25.36:8000/movies/movies', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(movieInformationList => {
        this.setState({
          movieInformationList: movieInformationList,
        });
      });
  }

  render() {
    const { movieInformationList } = this.state;
    const listTitle = Object.keys(movieInformationList);
    const listTitleIndex = [];
    for (let i = 0; i < listTitle.length; i++) {
      listTitleIndex.push(i);
    }
    console.log(listTitleIndex);
    return (
      <>
        {movieInformationList && (
          <section className="main">
            {listTitleIndex.map(el => (
              <MainSection
                listTitle={listTitle[el]}
                movieInformationList={movieInformationList[listTitle[el]]}
              />
            ))}
          </section>
        )}
      </>
    );
  }
}
