import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <span>지금까지 얼마의 평가</span>
        </div>
        <div className="footerBottom">
          <div className="footerLeft">
            <ul>
              <li>
                <span>이 사이트는 공식 왓챠 사이트가 아닙니다</span>
              </li>
              <li>
                <span>이 사이트는 공식 왓챠 사이트와 관련이 없습니다</span>
              </li>
              <li>
                <span>
                  이 사이트는 학생들이 공부용으로 만든 클론 프로젝트
                  사이트입니다
                </span>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <ul>
              {MEMBER_LIST.map(el => {
                <li key={el.id}>
                  <span>{el.name}</span>
                  <button>
                    <a>{el.blog}</a>
                  </button>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const MEMBER_LIST = [
  { id: 1, name: '임유진', blog: 'velog.io/@1703979' },
  { id: 2, name: '전용민', blog: 'velog.io/@1703979' },
  { id: 3, name: '이다슬', blog: 'velog.io/@1703979' },
  { id: 4, name: '김하민', blog: 'velog.io/@1703979' },
  { id: 5, name: '최대환', blog: 'velog.io/@1703979' },
];
