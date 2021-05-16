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
    fetch('http://localhost:3000/data/MainMockData.json', {
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
