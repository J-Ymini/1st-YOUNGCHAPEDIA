import React from 'react';
import './LeaveCommentSection.scss';
import Modal from '../../../CommonComponents/Modal';
import CommentModal from './CommentInput';

export default class LeaveCommentSection extends React.Component {
  render() {
    const { showModal, closeModal, commentInput, commentSubmit } = this.props;
    return (
      <section className="LeaveCommentSection">
        {this.props.userWishStatus.modalActive && (
          <Modal
            closeModal={closeModal}
            childComponent={
              <CommentModal
                commentInput={commentInput}
                commentSubmit={commentSubmit}
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
            <p>전용민 님의 생각을 글로 적어보세요</p>
            <button className="leaveCommentButton" onClick={showModal}>
              코멘트 남기기
            </button>
          </div>
        </article>
      </section>
    );
  }
}
