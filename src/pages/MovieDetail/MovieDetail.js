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
      commentModal: false,
      commentInputValue: '',
      commentList: [], // 댓글 데이터를 저장할 배열입니다.
    };
  }

  changeStateOfWish = () => {
    const { userWish } = this.state;
    !userWish
      ? this.setState({ userWish: true, leaveComment: true })
      : this.setState({
          userWish: false,
          leaveComment: false,
          showComment: false,
        });
  };

  modifyingComment = () => {
    const { commentModal, commentInputValue } = this.state;
    this.setState({ commentModal: true });
  };

  deleteComment = () => {
    this.setState({
      leaveComment: true,
      showComment: false,
      commentInputValue: '',
    });
  };

  showCommentModal = () => {
    this.setState({ commentModal: true });
  };

  closeModal = () => {
    this.setState({
      commentModal: false,
    });
  };

  commentInputHandler = e => {
    const { value } = e.target;
    this.setState({ commentInputValue: value });
  };

  commentSubmit = () => {
    const { commentInputValue } = this.state;
    this.setState({
      commentModal: false,
      leaveComment: false,
      showComment: true,
      commentInputValue: commentInputValue,
    });
  };

  render() {
    const { leaveComment, showComment, commentInputValue } = this.state;
    return (
      <main className="MovieDetail">
        <MovieBannerSection
          userWishStatus={this.state}
          userWishStatusHandler={this.changeStateOfWish}
        />

        {leaveComment && (
          <LeaveCommentSection
            userWishStatus={this.state}
            showCommentModal={this.showCommentModal}
            closeModal={this.closeModal}
            commentInput={this.commentInputHandler}
            commentSubmit={this.commentSubmit}
          />
        )}
        {showComment && (
          <ShowComment
            commentValue={commentInputValue}
            showCommentModal={this.showCommentModal}
            closeModal={this.closeModal}
            modifyingComment={this.modifyingComment}
            deleteComment={this.deleteComment}
          />
        )}
        <MovieDetailContentsSection />
      </main>
    );
  }
}
