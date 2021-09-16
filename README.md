# Movie site with API

자바스크립트와 API를 이용한 영화사이트

## 궁금한 점

1. express서버 대신 webpack server를 쓴 이유는?
2. home이 아닌 다른 path를 입력하고 request했을 때, 혹은 새로고침 했을 때 404에러가 뜨는 이유는?

   webpack으로 index.html과 index_bundle.js를 컴파일 했을 때, public path를 설정해야만 하였다.

3. 함수가 실행되는 순서의 어려움 - 콜백함수 사용
4. react가 아닌 only JS로 SPA를 하게 될 때의 장단점

## 앞으로 해야할 일

- [ ] 코드 정리 : 기능별, component별
- [ ] 사용자의 편의성을 제공하기 위해 한 것들
- [ ] 배포
- [ ] 코드 리팩토링 - 검색어 이벤트 `setTimeout`대신 다른 방법
