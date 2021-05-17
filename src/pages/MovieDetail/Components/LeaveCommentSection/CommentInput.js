import React, { Component } from 'react';
import './CommentInput.scss';

export default class CommentInput extends Component {
  render() {
    return (
      <div className="CommentModal">
        <textarea
          onChange={this.props.commentInput}
          placeholder="코멘트를 작성해주세요!"
        ></textarea>
        <button onClick={this.props.commentSubmit}>코멘트 남기기</button>
      </div>
    );
  }
}
