import React from 'react';
import MovieBannerSection from './Components/MovieBannerSection/MovieBannerSection';
import LeaveCommentSection from './Components/LeaveCommentSection/LeaveCommentSection';
import ShowComment from './Components/LeaveCommentSection/ShowComment';
import MovieDetailContentsSection from './Components/MovieDetailContentsSection/MovieDetailContentsSection';
import API_URLS from '../../config';

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
      movieInformation: {},
      comment_id: 0,
    };
  }

  changeStateOfWish = () => {
    const movieId = this.props.match.params.id;
    fetch(`${API_URLS.DETAIL}/${movieId}/wish`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ movie_id: movieId }),
    }).then(res => {
      if (res.status === 201) {
        return this.setState({ userWish: true, leaveComment: true });
      }
      if (res.status === 204) {
        return this.setState({
          userWish: false,
          leaveComment: false,
          showComment: false,
        });
      }
      if (res.status === 401) {
        return alert('로그인이 필요합니다!');
      }
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
    const movieId = this.props.match.params.id;
    fetch(`${API_URLS.DETAIL}/${movieId}/comment`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
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
      });
  };

  deleteComment = () => {
    const movieId = this.props.match.params.id;
    const { comment_id } = this.state;
    fetch(`${API_URLS.DETAIL}/${movieId}/comment/${comment_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ comment: this.state.commentInputValue }),
    }).then(() => {
      this.setState({ comment_id: 0, leaveComment: true, showComment: false });
    });
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    fetch(`${API_URLS.DETAIL}/${movieId}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          movieInformation: [res['movie_information']],
        })
      );

    // 로그인 유저
    if (localStorage.getItem('TOKEN')) {
    }

    fetch(`${API_URLS.DETAIL}/${movieId}/wish`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res['wish_check'] === 1) {
          this.setState({
            userWish: true,
            leaveComment: true,
            showComment: false,
          });
        }
      });
  }

  getStar = () => {
    let detailStar;
    fetch(`${API_URLS.DETAIL}/${movieId}`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(res => {
        detailStar = res['movie_information']?.['star_check'];
      });

    return detailStar;
  };

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

  postStar = starRatingForPost => {
    const movieId = this.props.match.params.id;
    fetch(`${API_URLS.DETAIL}/${movieId}/rating`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        movie_id: movieId,
        rating: starRatingForPost,
      }),
    });
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
          postStar={this.postStar}
          starRatingForDetail={this.getStar()}
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
