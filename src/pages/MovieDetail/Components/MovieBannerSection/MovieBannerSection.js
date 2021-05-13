import React from 'react';
import './MovieBannerSection.scss';

export default class MovieBannerSection extends React.Component {
  render() {
    return (
      <section className="MovieBannerSection">
        <div className="movieBannerPoster">
          <img
            alt="stillCut"
            src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F256C8F3C525F2BC51B"
            className="stillCut"
          />
        </div>
        <div className="movieSimpleInformation">
          <div className="movieSimpleInformationContents">
            <img
              alt="poster"
              src="https://img.hankyung.com/photo/202104/BF.26103128.1.jpg"
            />
            <div className="movieBookRating">예매 순위: 2위</div>
            <div className="movieSubject">
              <h1>분노의 질주: 더 얼티메이트</h1>
              <div className="movieGenre">
                2020 &middot; 스릴러 &middot; 미국
              </div>
              <div className="averageOfStarPoint">
                평균 <i class="fas fa-star"></i> 3.8(192명)
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
                  ></i>{' '}
                  보고싶어요
                </button>
                <div className="giveStarPoint">
                  <div>평가하기</div>
                  <div>
                    <i class="far fa-star" />
                    <i class="far fa-star" />
                    <i class="far fa-star" />
                    <i class="far fa-star" />
                    <i class="far fa-star" />
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
