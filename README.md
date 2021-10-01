# 박수정 202030311

## [ 09월 29일 ]
- 상대경로 이미지 삽입 -> 필요한 곳에 <img src="">태그 작성
<hr>

```javascript
Food.propTypes = {
    name: PropTypes.string.isRequired
    picture: PropTypes.string.isRequired
    rating: PropTypes.number
}
```
- rating(평점)같이 숫자로 표현해야하는 것은 자료형 number로 함
- prop-types : 자료형을 검사, props의 이름 검사
- isRequired 필요하다라는 뜻인데 때에 따라 없어도 됌
<hr>
- state : 동적 데이터를 다룰 때 사용, 클래스형 컴포넌트에 사용할 수 있는 개념

```javascript
class App extends React.Component {} // 컴포넌트의 기본 뼈대
```
-> 리액트가 제공하는 컴포넌트 클래스 상속 <br>

| 클래스형 컴포넌트에서는 JSX를 반환하기 위해 render() 함수 사용

#### 함수형 컴포넌트는 return 문이 JSX 반환 BUT, 클래스형 컴포넌트는 render()함수가 JSX 반환

```javascript
class App extends React.Component {
    state = {
        //객체 형태의 데이터 반드시 소문자(state)를 이용
    }
}
```
<hr>

- state 직접 변경 x
=> state가 변경되면 render() 함수를 다시 실행하며 변경된 state 화면 출력 BUT, state를 직접 변경하면 render() 함수 다시 실행x <br>

| setState() 함수가 새 state가 전달 -> state가 업데이트 -> render()함수 자동 실행 -> 화면업데이트
- setState() 함수는 state 데이터만 업데이트, 즉 바뀐 데이터만 업데이트
<hr>

- 생명주기 함수
- constructor() : render()함수보다 먼저 실행, Component를 생성할 때 state 값을 초기화하거나 메서드를 바인딩할 때 사용
- componentDidMount() : render()함수보다 나중에 실행
| constructor() 함수 실행 -> render() 함수 실행 -> componentDidMount() 함수 실행
- componentDidUpdate() : 화면이 업데이트되면 실행
| setState() 함수 실행 -> render() 함수 실행 -> componentDidUpdate() 함수 실행
- componentWillMount() : 버전이 올라가면서 사용 x, 컴포넌트가 화면에서 떠날 때 실행

***

## [ 09월 15일 ]

- 컴포넌트 작성 시 이름 대문자로 시작
- Export구문 추가 -> 다른 파일에서 해당 컴포넌트 사용 가능
- 인접한 JSX요소는 반드시 하나의 태그로 감싸야함
```javascript
    ReactDOM.render(<App /><Potato />, document.getElementById('root')); => X
```
=> 리액트 최종적으로 단 한개의 컴포넌트, 두개 컴포넌트를 그리려해서 오류 <br>
<hr>

- Props : 컴포넌트에서 컴포넌트 전달하는 데이터, 함수의 매개변수 역할을 하는 것
> props 전달 데이터 문자열이 아닌 경우 제외 모두 중괄호 {} 사용
- 객체의 특정 값을 사용할 때 점(.)연산자 사용
- 구조 분해 할당(destructuring-assignment) : 점 연산자 사용 하지 않음

<hr>

- map() : 컴포넌트 여러 개 만들때 사용하는 함수,<br> | 배열의 모든 원소 마다 특정 작업을 하는 함수 적용 반환한 결과를 모아 배열로 반환
- 리스트의 각 원소는 유일한 key prop를 가져야함
| 리액트의 원소는 유일해야하는데 리스트에 포함되면 유일성이 X

***

## [ 09월 08일 ]

- 웹팩(Webpack) : 자바스크립트 앱을 위한 모든 정적모듈을 하나로 묶어주는 번들러
- 바벨(Bavel) : 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스 파일
- React로 개발하는 경우 웹팩, 바벨은 신경 X
- crate-react-app 입력시 리액트 개발 바로 시작
-- 위에 것을 사용해 디렉토리를 자동생성 <br>
-- npx create-react-app 디렉토리이름 <br>
-- 터미널에서 npm start로 앱을 실행<br>
-- 종료시 ctrl + c 후 Y를 쳐줌 <br><hr>
- 리액트 동작원리 <br>
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
- 컴포넌트 사용 시
```javascript
<App /> O <App> X
```

***