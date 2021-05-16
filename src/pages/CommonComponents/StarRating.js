import React, { Component } from 'react';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  componentDidMount() {
    fetch(URL);
  }

  changeStarRating = e => {
    if (e.clientX < 10) {
      this.setState({
        rating: 0.5,
      });
    } else if (10 <= e.clientX && e.clientX < 23) {
      this.setState({
        rating: 1,
      });
    } else if (23 <= e.clientX && e.clientX < 33) {
      this.setState({
        rating: 1.5,
      });
    } else if (33 <= e.clientX && e.clientX < 44) {
      this.setState({
        rating: 2,
      });
    } else if (44 <= e.clientX && e.clientX < 56) {
      this.setState({
        rating: 2.5,
      });
    } else if (56 <= e.clientX && e.clientX < 67) {
      this.setState({
        rating: 3,
      });
    } else if (67 <= e.clientX && e.clientX < 79) {
      this.setState({
        rating: 3.5,
      });
    } else if (79 <= e.clientX && e.clientX < 89) {
      this.setState({
        rating: 4,
      });
    } else if (89 <= e.clientX && e.clientX < 101) {
      this.setState({
        rating: 4.5,
      });
    } else if (101 <= e.clientX && e.clientX < 112) {
      this.setState({
        rating: 5,
      });
    } else {
      this.setState({
        rating: 0,
      });
    }
  };

  postStarRating = e => {
    this.changeStarRating(e);
    // fetch(URL, {
    //   method: 'POST',
    //   header:{
    //     Authroization:token
    //   },
    //   body: {
    //     id: 1,
    //     rating: this.state.rating,
    //   },
    // });
  };

  render() {
    const status = this.state.rating;
    return (
      <>
        <div
          className="starContainer"
          onClick={this.postStarRating}
          onMouseMove={this.changeStarRating}
        >
          {Rating[status]}
        </div>
      </>
    );
  }
}

const Rating = {
  0: (
    <>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  0.5: (
    <>
      <div className="stars-blank">
        <span className="stars-half"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  1: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  1.5: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-half"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  2: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  2.5: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-half"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  3: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank"></div>
      <div className="stars-blank"></div>
    </>
  ),
  3.5: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-half"></span>
      </div>
      <div className="stars-blank"></div>
    </>
  ),
  4: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank"></div>
    </>
  ),
  4.5: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-half"></span>
      </div>
    </>
  ),
  5: (
    <>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
      <div className="stars-blank">
        <span className="stars-full"></span>
      </div>
    </>
  ),
};
