import React from 'react';
import './LeaveCommentSection.scss';

export default class LeaveCommentSection extends React.Component {
  render() {
    return (
      <section className="LeaveCommentSection">
        <article
          className={
            this.props.userWishStatus.userWish
              ? 'recommendLeaveComment active'
              : 'recommendLeaveComment'
          }
        >
          <div>
            <p>전용민 님의 생각을 글로 적어보세요</p>
            <button className="leaveCommentButton">코멘트 남기기</button>
          </div>
        </article>
      </section>
    );
  }
}
