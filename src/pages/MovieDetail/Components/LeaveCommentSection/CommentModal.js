import React, { Component } from 'react';
import './CommentModal.scss';

export default class CommentModal extends Component {
  render() {
    const { commentInputValue } = this.props.userWishStatus;
    return (
      <div className="CommentModal">
        <textarea
          onChange={this.props.commentInput}
          placeholder="코멘트를 작성해주세요!"
        ></textarea>

        {commentInputValue ? (
          <button onClick={this.props.commentSubmit}>코멘트 남기기</button>
        ) : (
          <button
            onClick={this.props.commentSubmit}
            disabled
            className="leaveCommentButtonDisabled"
          >
            코멘트 남기기
          </button>
        )}
      </div>
    );
  }
}
