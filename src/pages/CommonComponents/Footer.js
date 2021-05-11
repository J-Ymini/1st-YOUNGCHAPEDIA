import React, { Component } from 'react';
import './Footer.scss';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerTop">
          <span>
            지금까지 <span className="footerCount">얼마</span>의 평가
          </span>
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
                return (
                  <li key={el.id}>
                    <button>
                      <a href={el.blog} target="_blank">
                        <span>{el.name}</span>
                      </a>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const MEMBER_LIST = [
  { id: 1, name: '임유진', blog: 'https://velog.io/@1703979' },
  { id: 2, name: '전용민', blog: 'https://velog.io/@dydalsdl1414' },
  { id: 3, name: '이다슬', blog: 'https://velog.io/@_seeul' },
  { id: 4, name: '김하민', blog: 'https://github.com/HaMin-Kim' },
  { id: 5, name: '최대환', blog: 'https://github.com/Dae-Hwan' },
];
