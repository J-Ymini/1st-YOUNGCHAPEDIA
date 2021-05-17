import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import ShowComment from './Components/LeaveCommentSection/ShowComment';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';

import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWish: false,
      leaveComment: false,
      showComment: false,
      modalActive: false,
      commentInputValue: '',
      commentList: [],
    };
  }

  changeStateOfWish = () => {
    this.setState({ userWish: true, leaveComment: true });
  };

  showModal = () => {
    this.setState({ modalActive: true });
    console.log('안녕하세요');
  };

  closeModal = () => {
    this.setState({ modalActive: false });
  };

  commentInputHandler = e => {
    const { value } = e.target;
    this.setState({ commentInputValue: value });
    console.log(this.state.commentInputValue);
  };

  commentSubmit = () => {
    const { commentInputValue } = this.state;
    this.setState({
      modalActive: false,
      leaveComment: false,
      showComment: true,
      commentInputValue: commentInputValue,
    });
  };

  render() {
    console.log(this.state);
    const { leaveComment, showComment } = this.state;
    return (
      <main className="MovieDetail">
        <MovieBannerSection
          userWishStatus={this.state}
          userWishStatusHandler={this.changeStateOfWish}
        />

        {leaveComment && (
          <LeaveCommentSection
            userWishStatus={this.state}
            showModal={this.showModal}
            closeModal={this.closeModal}
            commentInput={this.commentInputHandler}
            commentSubmit={this.commentSubmit}
          />
        )}
        {showComment && <ShowComment commentValue={this.state} />}
        <MovieDetailContentsSection />
      </main>
    );
  }
}
