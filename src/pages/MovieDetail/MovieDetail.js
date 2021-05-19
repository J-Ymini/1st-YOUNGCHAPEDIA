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
      commentList: [],
      movieInformation: {},
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
    this.setState({
      commentModal: false,
      leaveComment: false,
      showComment: true,
    });
  };

  componentDidMount() {
    // const id = this.props.match.params.id;
    fetch(`http://192.168.25.36:8000/movies/1`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          movieInformation: [res['movie_information']],
        })
      );
  }

  goToPrevious = () => {
    const { style } = this.commentList.current;
    if (this.count.current === 0) return;
    this.count.current--;
    style.transform = `translate(-${931 * this.count.current}px, 0)`;
  };

  goToNext = () => {
    const { style } = this.commentList.current;
    const { commentListContents } = this.state;
    const commentLength = Math.floor(commentListContents.length / 3);

    if (this.count.current === commentLength) {
      this.count.current = -1;
    }
    this.count.current++;
    style.transform = `translate(-${931 * this.count.current}px, 0)`;
  };

  render() {
    const { leaveComment, showComment, commentInputValue, movieInformation } =
      this.state;
    return (
      <main className="MovieDetail">
        <MovieBannerSection
          userWishStatus={this.state}
          userWishStatusHandler={this.changeStateOfWish}
          movieInformation={movieInformation}
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
            movieInformation={movieInformation}
          />
        )}
        <MovieDetailContentsSection
          movieInformation={movieInformation}
          goToPrevious={this.goToPrevious}
          goToNext={this.goToNext}
        />
      </main>
    );
  }
}
