import React, { Component } from 'react';
import './SingleStar.scss';

export default class SingleStar extends Component {
  render() {
    const { nthstar, rating, clickStar, hoverStar } = this.props;
    return (
      <div
        className="blankStar"
        nthstar={nthstar}
        onMouseMove={hoverStar}
        onClick={clickStar}
      >
        {nthstar - rating === 0.5 && (
          <span className="halfStar" nthstar={nthstar} />
        )}
        {nthstar <= rating && <span className="fullStar" nthstar={nthstar} />}
      </div>
    );
  }
}
