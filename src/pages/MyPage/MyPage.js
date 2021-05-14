import React, { Component } from 'react';
import './MyPage.scss';

export default class MyPage extends Component {
  render() {
    return (
      <section className="myPageSection">
        <div className="myPageContainer">
          <div className="myHeader">
            <i class="fas fa-cog"></i>
          </div>
          <div className="myContents">
            <header className="myProfile">
              <div className="myProfileColumn">
                <img
                  alt="userProfile"
                  src="https://an2-img.amz.wtchn.net/image/v2/1bcea716e2558d00efb37cc2422675b4.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaVlXTnJaM0p2ZFc1a0lqcDdJbklpT2pJMU5Td2laeUk2TWpVMUxDSmlJam95TlRWOUxDSmpjbTl3SWpwMGNuVmxMQ0pvWldsbmFIUWlPalF3TUN3aWNHRjBhQ0k2SWk5Mk1TOWhjR1pvZVhaNmJURXpNVGh4ZFRCcGFHVnFZeUlzSW5GMVlXeHBkSGtpT2pnd0xDSjNhV1IwYUNJNk1qZ3dmUS5ONTVQd1ZrZm5iZDR2d1o3RUpZSTRIWlg2VUxlMS1pLWRkdk1MT3hMd2tZ"
                />
              </div>
              <div className="myProfileColumn">
                <h1>임유진</h1>
              </div>
              <div className="myProfileColumn">
                <h6>프로필이 없습니다.</h6>
              </div>
            </header>
            <div className="analyzeTest">
              <div>
                <button>취향분석</button>
              </div>
            </div>
            <div className="contentBanners">
              <div className="myMovies">
                <i class="fas fa-film"></i>

                <p className="contentBannersColumn">영화</p>
                <p className="contentBannersColumn">
                  <span>★</span>
                  <span>14</span>
                </p>
                <p className="contentBannersColumn">
                  <span>보고싶어요</span>
                  <span>1</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
