import React from 'react';
import './ShowComment.scss';

export default class ShowComment extends React.Component {
  render() {
    return (
      <section className="ShowComment">
        <article className="recommendLeaveComment">
          <div className="userAndComment">
            <div>
              <img
                alt="image of user"
                src="https://t1.daumcdn.net/cfile/tistory/21340A3650ED95850C"
              />
              <div className="commentContent">안녕하세요 반갑습니다.</div>
            </div>
            <div>
              <button className="modifyingComment"> ✏ 수정</button>
              <button>🗑 삭제</button>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
