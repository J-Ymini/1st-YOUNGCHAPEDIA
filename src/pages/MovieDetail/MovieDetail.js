import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import ShowComment from './Components/LeaveCommentSection/ShowComment';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userWish: false };
  }

  changeStateOfWish = e => {
    const { userWish } = this.state;
    const { className } = e.target;
    !className.includes('active') && this.setState({ userWish: true });
    userWish && console.log('모달창을 띄울 겁니다.');
  };

  showModal = () => {
    console.log('안녕하세요');
  };

  render() {
    return (
      <main className="MovieDetail">
        <MovieBannerSection
          userWishStatus={this.state}
          userWishStatusHandler={this.changeStateOfWish}
        />
        <LeaveCommentSection
          userWishStatus={this.state}
          showEvent={this.showModal}
        />
        <ShowComment />
        <MovieDetailContentsSection />
      </main>
    );
  }
}
