import React from 'react';
import Comment from './Components/Comment/Comment';
import SimilarMovie from './Components/SimilarMovie/SimilarMovie';
import './MovieDetailContentsSection.scss';

export default class MovieDetailContentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.commentList = React.createRef();
    this.fadeInTarget = React.createRef();
    this.count = React.createRef(0);
    this.count.current = 0;
  }

  goToPrevious = () => {
    const { style } = this.commentList.current;
    if (this.count.current === 0) return;
    this.count.current--;
    style.transform = `translate(-${931 * this.count.current}px, 0)`;
  };

  goToNext = () => {
    const { style } = this.commentList.current;
    const { movieInformation } = this.props;
    const commentLength = Math.floor(
      movieInformation[0]?.['comments'].length / 3
    );

    if (this.count.current === commentLength) {
      this.count.current = -1;
    }
    this.count.current++;
    style.transform = `translate(-${931 * this.count.current}px, 0)`;
  };

  render() {
    const { movieInformation } = this.props;
    return (
      <section className="MovieDetailContentsSection">
        <div className="movieDetailContents">
          <article className="movieInformation">
            <div className="movieInformationContents">
              <header>
                <h2>기본정보</h2>
              </header>
              <article>
                <div>
                  <div>{movieInformation[0]?.['english_title']}</div>
                  <br />
                  <div>
                    {movieInformation[0]?.['release_date']} &middot;
                    {movieInformation[0]?.['country']} &middot;
                    {movieInformation[0]?.genre[0]?.name}
                  </div>
                  <br />
                  <div>{movieInformation[0]?.['running_time']} 분</div>
                </div>
                <p>{movieInformation[0]?.['discription']}</p>
              </article>
            </div>
          </article>
          <article className="comments">
            <div className="commentContents">
              <header>
                <div className="commentSubjectAndCount">
                  <h2>코멘트</h2>
                  <span>{movieInformation[0]?.comments?.length}개</span>
                </div>
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
                  {movieInformation[0]?.['comments']?.map(comment => (
                    <Comment
                      key={comment['id']}
                      number={comment['user_id']}
                      name={comment['user_name']}
                      content={comment['comment']}
                    />
                  ))}
                </ul>
              </article>
            </div>
          </article>
          <article className="similarMovie">
            <div className="similarMovieContents">
              <header>
                <h2>비슷한 작품</h2>
              </header>
              <ul className="similarMovieList" ref={this.fadeInTarget}>
                {movieInformation[0]?.['similar_movies'][0]?.map(movie => {
                  return (
                    <SimilarMovie
                      key={movie['id']}
                      img={movie['thumbnail_img']}
                      name={movie['korean_title']}
                      rating={movie['id']}
                    />
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </section>
    );
  }
}
