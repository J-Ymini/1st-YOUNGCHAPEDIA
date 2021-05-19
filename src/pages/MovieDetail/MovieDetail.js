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
    };
  }

  changeStateOfWish = () => {
    const { userWish } = this.state;

    fetch(
      ('http://192.168.25.28:8000/movies/wishmovie',
      {
        method: 'POST',
        body: JSON.stringify({ movie_id: '반가워요' }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
    )
      .then(res => res.json())
      .then(res => console.log(res));

    // .catch(result => console.log(result));
    // .then(res => {
    //   if (res === '에러입니다.') {
    //     console.log(res);
    //     return;
    //   } else {
    //     !userWish
    //       ? this.setState({ userWish: true, leaveComment: true })
    //       : this.setState({
    //           userWish: false,
    //           leaveComment: false,
    //           showComment: false,
    //         });
    //   }
    // });
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

    console.log(this.state);
  };

  // fetch('https://api.google.com/user', { fetch 로직 구현중
  //   method: 'post',
  //   headers: '',
  //   body: JSON.stringify({
  //     comment: 'commentInputValue',
  //   }),
  // });

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
