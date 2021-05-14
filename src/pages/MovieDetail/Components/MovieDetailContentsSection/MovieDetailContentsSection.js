import React from 'react';
import Comment from './Components/Comment/Comment';

import './MovieDetailContentsSection.scss';

export default class MovieDetailContentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.commentList = React.createRef();
  }

  goToPrevious = () => {
    const { style } = this.commentList.current;
    style.transform = "translate3d(500px, 0, 0)'
    console.log('안녕하세요');
  };

  goToNext = () => {
    console.log('안녕하세요');
    console.log(this.commentList.current);
  };

  render() {
    const COMMENT_DATA = [
      {
        id: 1,
        name: 'drakeofficial',
        comment: '안녕하세요',
      },
      {
        id: 2,
        name: 'theweeknd',
        comment: '반갑습니다.',
      },
      {
        id: 3,
        name: 'justinbieber',
        comment: '재미있어요!!',
      },
      {
        id: 4,
        name: 'wjsdydalskdf',
        comment: '재미있어요!!',
      },
      {
        id: 5,
        name: 'dydalsdl15',
        comment: '재미있어요!!',
      },
      {
        id: 6,
        name: 'slk2kj51',
        comment: '재미있어요!!',
      },
      {
        id: 7,
        name: '1l1k2j5',
        comment: '재미있어요!!',
      },
      {
        id: 8,
        name: 'lllekjt',
        comment: '재미있어요!!',
      },
      {
        id: 9,
        name: 'dlkj16',
        comment: '재미있어요!!',
      },
    ];

    return (
      <section className="MovieDetailContentsSection">
        <div className="movieDetailContents">
          <article className="movieInformation">
            <div className="movieInformationContents">
              <header>
                <h2>기본정보</h2>
                <button>더보기</button>
              </header>
              <article>
                <div>
                  <div>F9</div>
                  <br />
                  <div>2020 &middot; 미국 &middot; 스릴러</div>
                  <br />
                  <div>2시간 15분</div>
                </div>
                <p>
                  기다림은 끝났다! 전 세계가 기다려온 단 하나의 액션블록버스터!
                  도미닉(빈 디젤)은 자신과 가장 가까웠던 형제 제이콥(존 시나)이
                  사이퍼(샤를리즈 테론)와 연합해 전 세계를 위기로 빠트릴
                  위험천만한 계획을 세운다는 사실을 알게 되고,...
                </p>
              </article>
            </div>
          </article>
          <article className="comments">
            <div className="commentContents">
              <header>
                <div className="commentSubjectAndCount">
                  <h2>코멘트</h2>
                  <span>20+</span>
                </div>
                <button>더보기</button>
              </header>
              <article className="commentContainer">
                <div className="commentSlideButton">
                  <button className="prevButton" onClick={this.goToPrevious}>
                    &#8592;
                  </button>
                  <button className="nextButton" onClick={this.goToNext}>
                    &#8594;
                  </button>
                </div>
                <ul ref={this.commentList} className="commentList">
                  {COMMENT_DATA.map(comment => {
                    return (
                      <Comment
                        key={comment.id}
                        number={comment.id}
                        name={comment.name}
                        content={comment.comment}
                      />
                    );
                  })}
                </ul>
              </article>
            </div>
          </article>
          <article className="similarMovie">
            <div className="similarMovieContents">
              <header>
                <h2>비슷한 작품</h2>
              </header>
              <article>비슷한 작품 컴포넌트가 들어갈 자리입니다.</article>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
