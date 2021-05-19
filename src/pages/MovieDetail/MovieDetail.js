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
      comment_id: 0,
    };
  }

  changeStateOfWish = () => {
    const { userWish } = this.state;
    fetch('http://192.168.25.28:8000/movies/1/wish', {
      method: 'POST',
      headers: {
        // 'Contents-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.j-6V8dLx9sVbVgnyGqibQwfZi1Hhl0aS71vjFWCrbj4',
      },
      body: JSON.stringify({ movie_id: 1 }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'CREATE_SUCCESS') {
          this.setState({ userWish: true, leaveComment: true });
        } else {
          alert('로그인이 필요합니다.');
          return;
        }
      });
  };

  deleteComment = () => {
    const { comment_id } = this.state;
    fetch(`http://192.168.25.36:8000/movies/1/comment/${comment_id}`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.j-6V8dLx9sVbVgnyGqibQwfZi1Hhl0aS71vjFWCrbj4',
      },
      body: JSON.stringify({ comment: this.state.commentInputValue }),
    }).then(res => console.log(res));
    // .then(res => console.log(res));

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
    fetch('http://192.168.25.36:8000/movies/1/comment', {
      method: 'POST',
      headers: {
        // 'Contents-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.j-6V8dLx9sVbVgnyGqibQwfZi1Hhl0aS71vjFWCrbj4',
      },
      body: JSON.stringify({ comment: this.state.commentInputValue }),
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          commentModal: false,
          leaveComment: false,
          showComment: true,
          comment_id: res['comment_id'],
        });
        console.log(this.state.comment_id);
        console.log(res);
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
