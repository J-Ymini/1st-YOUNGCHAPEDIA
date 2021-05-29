# 🍿 Team Youngchapedia

## 🎞 프로젝트 소개

- 프로젝트 개요 : 다 함께 영차영차 WATCHA PEDIA 클론 코딩
- 프로젝트 기간 : 2021.05.10 ~ 2021.05.21
- 프로젝트 목표
  > 1. 백엔드-프론트엔드 커뮤니케이션 및 통신으로 협업 경험 쌓기
  > 2. 기능 구현 계획별 시간 관리 경험 쌓기
  > 3. React Class Component를 사용한 컴포넌트 관리 및 구조 설계
  > 4. 라이브러리를 사용하지 않고 최대한 구현해보는 경험 쌓기
  > 5. SASS를 활용한 스타일링

### 팀원 구성 및 블로그

- Front-End: [전용민(PM)](https://velog.io/@dydalsdl1414), [임유진](https://velog.io/@1703979), [이다슬](https://velog.io/@_seeul)
- Back-End: 김하민, 최대환 ([백엔드 깃허브](https://github.com/wecode-bootcamp-korea/20-1st-YOUNGCHAPEDIA-backend))

### 기획 포인트

- 개인의 취향을 존중하는 **영화 리뷰** 커뮤니티
- 내가 모르는 나의 취향을 추천받기 위한 영화 **평가하기**
- 평가한 별점으로 사용자의 **선호 장르 파악** 별점 추이 **그래프화**
- 장르별 영화 **필터링**
- 시간이 지날수록 더 많아지는 영화들의 **정보** 관리

### 데모 영상

- YouTube : [Link](https://www.youtube.com/watch?v=hDn8vX0VyUc)

<br>

## 🎞 적용 기술 및 구현 기능

### 적용 기술

- Front-End : React, React Router, Sass, JavaScript, CRA
- Back-End : Python, Django, My SQL
- Communication Tool : Trello, Git, GitHub, Slack

### 구현 기능

- 메인 페이지
- 상세 페이지 (영화별)
- 로그인 & 회원가입 모달
- 평가하기 페이지
- 마이페이지
- 취향분석 페이지

### 구현 기능 상세

#### 메인페이지 (이다슬)

> 1.  메인페이지 레이아웃 및 반응형 Carousel
> 2.  효율적인 데이터 fetch를 위한 Infinite Scroll 기능 구현
> 3.  테마별 영화 정보 API fetch Setting 으로 백엔드의 데이터 가져오기
> 4.  path parameter를 통해 상세페이지와 동적 라우팅 setting

#### 상세페이지 (전용민)

> 1. 상세 페이지 레이아웃 및 path parameter를 통한 메인페이지와의 동적 라우팅
> 2. 영화 데이터 API를 활용한 상세 페이지 보고싶어요 POST 요청/별점 평가 POST & GET요청/코멘트 작성(모달창) 및 삭제
> 3. 코멘트 리스트 부분 Carousel 기능 구현

#### 마이페이지 & 취향분석 (임유진)

> - 백엔드 유저 API fetch 받아 별점 분포 그래프, 선호 장르 랭킹 분석 결과지 그리기

#### 평가하기 페이지 (임유진)

> 1.  백엔드 API fetch 받아 해당 컨테이너에 무한 스크롤로 페이지네이션 하고 throttle로 스크롤 이벤트 최적화
> 2.  Star Rating 컴포넌트 구현하여 0.5점 단위로 별점을 평가하고 POST하기
> 3.  별점 POST 완료시 바로 내가 평가한 영화 개수 업데이트하기
> 4.  쿼리파라미터를 활용해 장르 메뉴 (모달)에서 클릭한 장르에 해당하는 영화 get 요청

#### 로그인/회원가입 (임유진)

> 1. JWT, 로컬 스토리지를 이용한 로그인 상태 유지 및 로그인/회원가입/로그아웃
> 2. 정규표현식을 활용해 이름/이메일/비밀번호 조건
> 3. 로그인 여부에 따라 Nav UI 조건부 렌더링
> 4. pathname을 기준으로 Footer 조건부 렌더링

  <br>

## 📝 프로젝트 회고록

- [전용민](https://velog.io/@dydalsdl1414/WECODE-1%EC%B0%A8-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8)
- [임유진](https://velog.io/@1703979/YPP-1)
- [이다슬](https://velog.io/@_seeul/Project-1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%98%81%EC%B0%A8%ED%94%BC%EB%94%94%EC%95%84-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

## 📢 Reference

- 이 프로젝트는 [왓챠피디아 사이트](https://pedia.watcha.com/ko-KR)를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 영화 정보 대부분은 영화 소개의 목적으로 영화 제작사에서 제공한 자료를 사용했습니다.
- 이 프로젝트에서의 영화별 장르는 임의로 설정한 것이며 실제와 무관합니다.
