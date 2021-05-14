import React from 'react';
import MainSection from './Components/MainSection/MainSection';
import './Main.scss';
export default class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <MainSection />
      </section>
    );
  }
}
