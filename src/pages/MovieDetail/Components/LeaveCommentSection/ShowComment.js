import React from 'react';
import Modal from '../../../CommonComponents/Navbar';
import './ShowComment.scss';

export default class ShowComment extends React.Component {
  render() {
    const {
      commentValue,
      modifyingComment,
      deleteComment,
      showCommentModal,
      closeModal,
    } = this.props;
    return (
      <section className="ShowComment">
        <article className="recommendLeaveComment">
          <div className="userAndComment">
            <div>
              <img
                alt="image of user"
                src="https://t1.daumcdn.net/cfile/tistory/21340A3650ED95850C"
              />
              <div className="commentContent">{commentValue}</div>
            </div>
            <div>
              <button className="modifyingComment">✏ 수정</button>
              <button onClick={deleteComment}>🗑 삭제</button>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
