import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './MyPage.scss';

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    let token = localStorage.getItem('TOKEN');
    fetch(
      '/data/userArchiveData.json'
      // ToDo : BE와 테스트
      //  {
      //   headers: {
      //     Authorization: token,
      //   },
      // }
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .catch(error => {
        alert('로그인해주세요');
        this.props.history.push('/');
        return;
      })
      .then(userRatedData => {
        this.setState({
          userData: userRatedData.result,
        });
      });
  }

  render() {
    const { userName, moviesCount, wantedCount } = this.state.userData[0];
    return (
      <section className="myPageSection">
        <div className="myPageContainer">
          <header className="myHeader">
            <div className="myHeaderShadow" />
            <button>
              <i class="fas fa-cog" />
            </button>
          </header>
          <div className="myContents">
            <header className="myProfile">
              <div className="myProfileColumn">
                <i className="fas fa-user-circle myPageProfileImg" />
              </div>
              <div className="myProfileColumn">
                <h1>{userName}</h1>
              </div>
              <div className="myProfileColumn">
                <h6>프로필이 없습니다.</h6>
              </div>
            </header>
            <div className="analyzeTest">
              <div>
                <button className="analyzeBtn">
                  <i class="fas fa-chart-bar" />
                  취향분석
                </button>
              </div>
            </div>
            <div className="contentBanners">
              <button className="myMovies">
                <p className="contentBannersColumn">영화</p>
                <p className="contentBannersColumn">
                  <span>★</span>
                  <span>{moviesCount}</span>
                </p>
                <p className="contentBannersColumn">
                  <span>보고싶어요</span>
                  <span className="myPageWantedCount">{wantedCount}</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(MyPage);
