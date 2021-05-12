import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userWish: false };
  }

  changeStateOfWish = e => {
    const { className } = e.target;
    !className.includes('active') && this.setState({ userWish: true });
  };

  render() {
    return (
      <main className="MovieDetail">
        <MovieBannerSection
          userWishStatus={this.state}
          userWishStatusHandler={this.changeStateOfWish}
        />
        <LeaveCommentSection userWishStatus={this.state} />
        <MovieDetailContentsSection />
      </main>
    );
  }
}
