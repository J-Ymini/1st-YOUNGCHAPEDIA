# 🎞 Team Youngchapedia

## 🎁 프로젝트 소개

- 프로젝트 개요 : 다 함께 영차영차 WATCHA PEDIA 클론 코딩
- 프로젝트 기간 : 2021.05.10 ~ 2021.05.21
- 프로젝트 목표
  > - 백엔드-프론트엔드 커뮤니케이션 및 협업 경험 쌓기
  > - 기능 구현 계획별 시간 관리 경험 쌓기
  > - React Class Component를 사용한 컴포넌트 관리 및 구조 설계
  > - 라이브러리를 사용하지 않고 최대한 구현해보는 경험 쌓기

### 팀원 구성 및 블로그

- Front-End: 전용민(PM), 임유진, [이다슬](https://velog.io/@_seeul)
- Back-End: 김하민, 최대환 ([백엔드 깃허브](https://github.com/wecode-bootcamp-korea/20-1st-YOUNGCHAPEDIA-backend))

### 기획 포인트

- 개인의 취향을 존중하는 **영화 리뷰** 커뮤니티
- 내가 모르는 나의 취향을 추천받기 위한 영화 **평가하기**
- 평가한 별점으로 사용자의 **선호 장르 파악** 별점 추이 **그래프화**
- 장르별 영화 **필터링**
- 시간이 지날수록 더 많아지는 영화들의 **정보** 관리

### 데모 영상

- YouTube : Link

<br>

## 🎨 적용 기술 및 구현 기능

### 적용 기술

- Front-End : React, React Router, Sass, JavaScript, CRA
- Back-End : Python, Django, My SQL
- Communication Tool : Trello, Git, GitHub, Slack

### 구현 기능

- JWT, LocalStorage, 정규표현식을 활용한 로그인/회원가입/로그아웃
- 테마별 영화 정보 API를 활용한 메인 페이지 캐로셀 슬라이더/무한스크롤 구현
- 영화 데이터 API를 활용한 상세 페이지 보고싶어요 POST 요청/별점 평가 POST & GET요청/코멘트 작성 및 삭제
- 영화 랜덤 리스트 API, 영화 장르별 API를 활용한 평가하기 페이지 무한스크롤 구현 및 장르 카테고리 필터링 기능 구현, 평가하지 않은 영화 별점 평가 POST 요청
- 유저별 데이터 API를 활용한 마이페이지 취향분석 결과 조회 : 별점 분포 그래프, 선호 장르 랭킹화

### 구현 기능 상세

- 메인페이지(이다슬)

1. 메인페이지 레이아웃 및 반응형 Carousel
2. 효율적인 데이터 fetch를 위한 Infinite Scroll 기능 구현
3. 영화 정보 API fetch Setting 으로 백엔드의 데이터 가져오기
4. path parameter를 통해 상세페이지와 동적 라우팅 setting

- 상세페이지

- 마이페이지

- 평가하기 페이지

  <br>

## 📝 프로젝트 회고록

- 전용민
- 임유진
- 이다슬

## 📣 Reference

- 이 프로젝트는 [왓챠피디아 사이트](https://pedia.watcha.com/ko-KR)를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 영화 소개의 목적으로 영화 제작사에서 제공한 포스터입니다.
