import React from 'react';
import './Comment.scss';

export default class Comment extends React.Component {
  render() {
    const { name, number, content } = this.props;
    return (
      <li className="Comment">
        <div className="commentUserInfo">
          <img
            alt="profile image of user"
            src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-%EC%97%AC%EC%84%B1%EC%9A%A9-%EA%B8%B0%EB%B3%B8-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%9A%8C%EC%83%89-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C-%EC%9E%90-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%B2%A1%ED%84%B0.jpg?ver=6"
            className="imageOfUserProfile"
          />
          <div className="commentUserName">{name}</div>
        </div>
        <div className="comment">
          <span>
            {content}
            {number}
          </span>
        </div>
        <div className="likeAndCommentPlus">
          <div className="container">
            <span className="likeCount">👍 0</span>
            <span className="commentCount">💭 0</span>
          </div>
          <button className="likeButton">좋아요</button>
        </div>
      </li>
    );
  }
}
