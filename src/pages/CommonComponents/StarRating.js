import React, { Component } from 'react';
import SingleStar from './SingleStar';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: props.starRatingForDetail || 0 };
  }

  hoverStar = e => {
    const starX = e.nativeEvent.offsetX;
    const starWidth = e.currentTarget.offsetWidth;
    let nthstar = e.currentTarget.getAttribute('nthstar');
    let starRatingForPost;

    if (starWidth * 0.5 < starX) {
      this.setState({
        rating: parseInt(nthstar),
      });
      starRatingForPost = parseInt(nthstar);
    }

    if (starX < starWidth * 0.5) {
      starRatingForPost = parseInt(nthstar) - 0.5;
      this.setState({
        rating: nthstar - 0.5,
      });
    }

    return starRatingForPost;
  };

  clickStar = e => {
    let starRatingForPost = this.hoverStar(e);
    this.props.postStar(starRatingForPost);
  };

  render() {
    return (
      <div className="starContainer">
        {STAR.map(el => (
          <SingleStar
            key={el}
            nthstar={el}
            clickStar={this.clickStar}
            rating={this.state.rating}
            hoverStar={this.hoverStar}
          />
        ))}
      </div>
    );
  }
}

const STAR = [1, 2, 3, 4, 5];

/*
----------------------------
How To Use
----------------------------
1. starRating 컴포넌트 POST,GET요청 보내는 함수는 starRating을 사용할 부모 컴포넌트에서 선언하여 props로 넘겨주세요

2. 이미 존재하는 별점을 GET 받은 경우 starRatingForDetail 이름의 props로 넘겨주세요

3. POST 요청 함수는 postStar 이라는 이름의 props로 넘겨주세요

4. POST 요청 함수는 부모 컴포넌트 안에 다음과 같이 작성해주세요

postStar = starRatingForPost => {
  fetch(API_URLS.REVIEW, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('TOKEN'),
    },
    body: JSON.stringify({
      movie: this.props.id,
      rating: starRatingForPost,
    }),
  }).then(this.props.updateRatingCount);
};
----------------------------
*/
