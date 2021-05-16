import React, { Component, createRef } from 'react';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.starContainerRef = createRef();
  }

  // ToDo : 영화별 상세페이지 접속시 전에 남긴 별점 기록이 있다면 불러오기

  // componentDidMount() {
  //   getStarRating();
  // }

  // getStarRating = () => {
  //   //이 부분은 상세 페이지 프론트,백 담당하는 팀원이 완성되면 추가할 예정입니다
  //   fetch(API_URLS.REVIEW, {
  //     headers: {
  //       Authorization: token,
  //     },
  //   }).then(res => {
  //     //상세 페이지에서 유저가 해당 영화에 별점을 부여했다면 그 별점 가져오는 코드
  //   });
  // };

  changeStarRating = e => {
    const starX =
      e.clientX - this.starContainerRef.current.getBoundingClientRect().left;
    console.log(starX);
    if (starX < 10) {
      this.setState({
        rating: 0.5,
      });
    } else if (10 <= starX && starX < 20) {
      this.setState({
        rating: 1,
      });
    } else if (20 <= starX && starX < 33) {
      this.setState({
        rating: 1.5,
      });
    } else if (33 <= starX && starX < 42) {
      this.setState({
        rating: 2,
      });
    } else if (42 <= starX && starX < 55) {
      this.setState({
        rating: 2.5,
      });
    } else if (55 <= starX && starX < 64) {
      this.setState({
        rating: 3,
      });
    } else if (64 <= starX && starX < 77) {
      this.setState({
        rating: 3.5,
      });
    } else if (77 <= starX && starX < 87) {
      this.setState({
        rating: 4,
      });
    } else if (87 <= starX && starX < 99) {
      this.setState({
        rating: 4.5,
      });
    } else if (99 <= starX && starX < 110) {
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
    // ToDo : 별점 POST 요청 테스트
    // fetch(URL, {
    //   method: 'POST',
    //   body: {
    //     id: 1,
    //     rating: this.state.rating,
    //   },
    // });
  };

  debounce = (func, timeout = 100) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  render() {
    const { changeStarRating, debounce } = this;
    const status = this.state.rating;
    return (
      <>
        <div
          ref={this.starContainerRef}
          className="starContainer"
          onClick={changeStarRating}
          onMouseMove={debounce(e => changeStarRating(e))}
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
