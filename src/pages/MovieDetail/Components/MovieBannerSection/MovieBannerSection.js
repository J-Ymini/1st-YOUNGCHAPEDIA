import React from 'react';
import StarRating from '../../../CommonComponents/StarRating';
import './MovieBannerSection.scss';

export default class MovieBannerSection extends React.Component {
  render() {
    const { movieInformation } = this.props;

    return (
      <section className="MovieBannerSection">
        <div className="movieBannerPoster">
          <img
            alt="stillCut"
            src={movieInformation[0]?.['background_img']}
            className="stillCut"
          />
        </div>
        <div className="movieSimpleInformation">
          <div className="movieSimpleInformationContents">
            <img alt="poster" src={movieInformation[0]?.['thumbnail_img']} />
            <div className="movieSubject">
              <h1>{movieInformation[0]?.['korean_title']}</h1>
              <div className="movieGenre">
                {movieInformation[0]?.['running_time']} 분 &middot;
                {movieInformation[0]?.genre[0].name}
                &middot; {movieInformation[0]?.country}
              </div>
              <div className="wishAndStarPoint">
                <button
                  className={
                    this.props.userWishStatus.userWish
                      ? 'wishButton active'
                      : 'wishButton'
                  }
                  onClick={this.props.userWishStatusHandler}
                >
                  <i
                    class={
                      this.props.userWishStatus.userWish
                        ? 'far fa-bookmark'
                        : 'fas fa-plus'
                    }
                  ></i>
                  보고싶어요
                </button>
                <div className="giveStarPoint">
                  <div>평가하기</div>
                  <div>
                    <StarRating
                      postStar={this.props.postStar}
                      starRatingForDetail={this.props.starRatingForDetail}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
