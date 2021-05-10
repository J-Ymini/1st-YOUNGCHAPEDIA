import React from 'react';
import './MovieDetail.scss';

export default class MovieDetail extends React.Component {
  render() {
    return (
      <main className="MovieDetail">
        <section className="movieBannerSection">
          <div className="movieBannerPoster"></div>
          <div className="movieSimpleInformation">글자입니다.</div>
        </section>
        <div className="movieDetailContents">
          <section className="leaveCommentSection">
            <header>
              <h2>기본정보</h2>
              <div>
                <a></a>
              </div>
            </header>
          </section>
          <section className="movieInformationSection"></section>
          <section className="commentSection"></section>
        </div>
      </main>
    );
  }
}
