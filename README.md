# 박수정 202030311

## [ 09월 08일 ]
- 웹팩(Webpack) : 자바스크립트 앱을 위한 모든 정적모듈을 하나로 묶어주는 번들러
- 바벨(Bavel) : 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스 파일
- React로 개발하는 경우 웹팩, 바벨은 신경 X
- crate-react-app 입력시 리액트 개발 바로 시작
-- 위에 것을 사용해 디렉토리를 자동생성 <br>
-- npx create-react-app 디렉토리이름 <br>
-- 터미널에서 npm start로 앱을 실행<br>
-- 종료시 ctrl + c 후 Y를 쳐줌 <br><hr>
- 리액트 동작원리
-- 프로젝트 폴더에 있는 코드 -> 해석된 결과물 -> index.html 끼워넣기 <br>
-- 모든 html을 그려넣지않고 일부만 그린 후 엘리멘트를 추가하거나 제거하는 방식으로 화면을 그려나감 -> 속도가 빠름 <br><hr>
- 컴포넌트(component) : function으로 정의 내린 곳
```javascript
funtion App() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
```
- 컴포넌트 사용 시 <App /> O <App> X

***