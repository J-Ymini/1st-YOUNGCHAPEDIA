import React from 'react';
import MovieBannerSection from './components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './components/LeaveCommentSection/LeaveCommentSection';
import MovieDetailContentsSection from './components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  render() {
    return (
      <main className="MovieDetail">
        <MovieBannerSection />
        <LeaveCommentSection />
        <MovieDetailContentsSection />
      </main>
    );
  }
}
