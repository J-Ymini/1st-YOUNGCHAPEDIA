import React, { Component } from 'react';
import './AnalyzeCardLayout.scss';

export default class AnalyzeCardLayout extends Component {
  render() {
    const { favTitle } = this.props;
    return (
      <section className="analyzeSection">
        <header className="analyzeTitle">{FAV_TITLE[favTitle]}</header>
        {this.props.childComponent}
      </section>
    );
  }
}

const FAV_TITLE = {
  1: '별점 분포',
  2: '영화 선호장르',
};
