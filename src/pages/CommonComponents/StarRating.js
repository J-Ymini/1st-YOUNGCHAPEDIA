import React, { Component } from 'react';
import SingleStar from './SingleStar';
import API_URLS from '../../config';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor() {
    super();
    this.state = { rating: 0 };
  }

  // ToDo : 상세페이지에서의 별점
  // getStarRating = () => {
  //   fetch(API, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }).then(res => {
  //     //상세페이지에서 유저가 해당 영화에 별점을 부여했다면 그 별점 가져오는 코드
  //   });
  // };

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
    this.postStar(starRatingForPost);
  };

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

// starRating 컴포넌트 POST,GET요청 보내는 함수는 starRating을 사용할 부모 컴포넌트에서 선언하여 props로 넘겨주세요
