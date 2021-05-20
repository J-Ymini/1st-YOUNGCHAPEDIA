import React from 'react';
import './LeaveCommentSection.scss';
import Modal from '../../../CommonComponents/Modal';
import CommentModal from './CommentModal';

export default class LeaveCommentSection extends React.Component {
  render() {
    const {
      showCommentModal,
      closeModal,
      commentInput,
      commentSubmit,
      userWishStatus,
    } = this.props;
    return (
      <section className="LeaveCommentSection">
        {this.props.userWishStatus.commentModal && (
          <Modal
            closeModal={closeModal}
            childComponent={
              <CommentModal
                commentInput={commentInput}
                commentSubmit={commentSubmit}
                userWishStatus={userWishStatus}
              />
            }
          />
        )}
        <article
          className={
            this.props.userWishStatus.userWish
              ? 'recommendLeaveComment active'
              : 'recommendLeaveComment'
          }
        >
          <div>
            <p>영화에 대한 생각을 글로 적어보세요</p>
            <button className="leaveCommentButton" onClick={showCommentModal}>
              코멘트 남기기
            </button>
          </div>
        </article>
      </section>
    );
  }
}
