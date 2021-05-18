import React, { Component } from 'react';
import './SingleStar.scss';

export default class Star extends Component {
  render() {
    const { nthStar, rating, id, handler } = this.props;
    return (
      <div className="blankStar" id={id} onClick={handler}>
        {nthStar - rating === 0.5 && <span className="halfStar" id={id} />}
        {nthStar <= rating && <span className="fullStar" id={id} />}
      </div>
    );
  }
}
