# 박수정 202030311

## [ 12월 1일 ]

- Clock이 타이머를 설정하고 매초 UI를 업데이트하는 것이 Clock의 구현 세부사항
```jsx
    function tick() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById('root')
        );
    }
    // 한 번만 코드를 작성하고 Clock이 스스로 업데이트, Clock 컴포넌트에 “state”를 추가
    //<Clock />,
    //document.getElementById('root')
```
- State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어  
> 함수에서 클래스로 변환하기
1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성
2. render()라고 불리는 빈 메서드를 추가
3. 함수의 내용을 render() 메서드 안으로 옮김.
4. render() 내용 안에 있는 props를 this.props로 변경
5. 남아있는 빈 함수 선언을 삭제

```jsx
    class Clock extends React.Component {
        render() {
            return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
         );
        }
    }
```
- Clock은 이제 함수가 아닌 클래스로 정의  

> 클래스에 로컬 State 추가
1. render() 메서드 안에 있는 this.props.date를 this.state.date로 변경
2. 초기 this.state를 지정하는 class constructor를 추가
3. <Clock /> 요소에서 date prop을 삭제

```jsx
    class Clock extends React.Component {
        constructor(props) {
            super(props);
            this.state = {date: new Date()};
        }

        render() {
            return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }
    }

    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );
```
> 생명주기 메서드를 클래스에 추가

- Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정 => 마운팅
- Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제 => 언마운팅
```jsx
    componentDidMount() {
    }

    componentWillUnmount() {
    }
```

> State를 올바르게 사용
- 직접 State를 수정 x
- State 업데이트는 비동기적일 수도 있음
- State 업데이트는 병합

> 이벤트 처리
- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달

```jsx
    <button onClick={activateLasers}>
        Activate Lasers
    </button>
```
- false를 반환해도 기본 동작을 방지할 수 없음. 반드시 preventDefault를 명시적으로 호출

```jsx
    function Form() {
        function handleSubmit(e) {
            e.preventDefault();
            console.log('You clicked submit.');
    }

        return (
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        );
    }
```

- DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없음 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공  
- 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것

> 이벤트 핸들러에 인자 전달
- 루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것
***

## [ 11월 24일 ]
> JSX
- JavaScript를 확장한 문법, React “엘리먼트(element)” 를 생성
```jsx
    const element = <h1>Hello, world!</h1>;
```

- React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식 등)과 연결
- JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움 됨  

> 표현식 포함
```jsx
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;

    // 변경 후
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
    firstName: 'Harper',
    lastName: 'Perez'
    };

    const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
    );
```

- JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있음

> JSX도 표현식
- JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환가능  

```jsx
    // ""를 이용해 문자열 리터럴정의
    const element = <div tabIndex="0"></div>;

    // 중괄호를 이용해 자바스크립트 표현식 삽입
    const element = <img src={user.avatarUrl}></img>;
```
- class는 className가 되고 tabindex는 tabIndex
- 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 함
- JSX 태그는 자식을 포함가능  

> Babel은 JSX를 React.createElement() 호출로 컴파일

```javascript
    const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );

    // 동일함
    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

```

> 엘리먼트는 React 앱의 가장 작은 단위
- 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드
***

## [ 11월 17일 ]

> Todo List
- handleChange는 모든 키보드 입력마다 state 갱신
- 사용자입력 -> handleChange -> React의 state 갱신

```javascript
    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()})
    }

    // 유저 입력을 강제로 대문자 변경
```
- htmlFor id 값, className처럼 구분하기 위해쓰는 키워드

```javascript
    <label htmlFor="new-todo">
        What needs to be done?
    </label>
```

- handleSubmit은 버튼이 클릭될 때 발생하는 event를 처리
- item.length : list 수 확인  


```javascript
     handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
  }
```
=> handleSubmit(e)에서 e.preventDefault() 메소드를 사
용하는 이유 : 브라우저에서 양식을 제출할 때는 기본적으로 브라우저의 새로 고침이 발생, React, SPA는 필요 없는 동작이기에 방지하기위해 사용

- remarkable cdn
```html
        <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/2.0.1/remarkable.min.js" integrity="sha512-skYYbQHAuOTpeJTthhUH3flZohep8blA+qjZOY0VqmfXMDiYcWxu29F5UbxU4LxaIpGkRBk+3Qf8qaXfd9jngg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

- 외부 플러그인 사용
- npx-create-react-app markdown-editor 로 새로운 프로젝트 생성  

- class MarkdownEditor extends React.Component -> MarkdownEditor부분을 App으로 변경  

```javascript
    import React from 'react'
    import { Remarkable } from 'remarkable'
    //추가 
```



***

## [ 11월 10일 ]

> 깃허브에 올리기
- package.json에 추가
- "Homepage" : "깃허브 링크"
- "predeploy": "npm run build",
- "deploy": "gh-pages -d build"  

- 터미널에 입력
- npm install gh-pages
- npm run deploy

> cdn링크를 통해 React 사용
- CDN을 통해 React를 사용한다면, crossorigin 어트리뷰트(attribute)와 함께 사용하는 것을 권장

```javascript
    <script crossorigin src=""></script>
```

> JSX 추가
```javascript
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 을 넣고
    어떤 <script> 태그에서든 type="text/babel"성질을 추가 하면 사용가능
```

> 리액트가 등장한 이유 : 동적인 웹페이지를 보다 효율적으로 유지보수 관리를 하기 위함
- 동적인 페이지는 유저의 행동 흐름에 따라 웹페이지의 구성을 달리해주어야 하는 페이지
- 선언형 React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줌  
-> 애플리케이션의 각 상태에 대한 간단한 뷰만 설계  
-> 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링
- this.props를 이용해 입력 데이터를 다룸  
- 내부적인 상태 데이터를 가질 수 있음, this.state로 접근
- JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공
- 외부 플러그인을 사용하는 컴포넌트 : React는 유연하며 다른 라이브러리나 프레임워크를 함께 활용할 수 있음

***

## [ 11월 3일 ]

```javascript
function App() {
    return (
        <HashRouter>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
        </HashRouter>
    )
}
```
-> 링크를 누를 때마다 리액트가 죽고, 세 페이지가 열리는, 즉 화면 전체가 새로고침되는 문제가 있음  
=> react-router-dom의 Link 컴포넌트를 사용하면 됨
<hr>

- 영화 카드를 누르면 상세정보를 보여주는 기능
> route props : 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props

- pathname: URL을 의미
- state : route props에 보내줄 데이터를 의미
- state가 undefined. 영화데이터가 넘어오지 못함. 사용자를 강제로 Home 돌려보내기. 리다이렉트 기능
> 리다이렉트 기능 : route props의 history 키 활용
- history : URL을 변경해주는 함수들
- componentDidMount() 생명주기 함수에 작성한 리다이렉트 기능 동작x 

```javascript
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const {location} = this.props
        return <span>{location.state.title}</span>
    }
```

| componentDidMount() 생명주기 함수에 작성한 리다이렉트 기능이 동작 x  
| render() -> componentDidMout() 순서로 함수 실행  
| render() 함수 내에서 location.state가 undefined

***

## [ 10월 27일 ]

```javascript
    geners.map((genre, index => {...}))
    genre에 geners 배열 원소, index에는 1,2,3, ...번째임을 알리는 숫자 전달
```

<hr>

- 문자열 제한  
-- slice(시작, 끝), 끝은 포함되지않음  
-- ex) "hereisstring".slice(0,10) -> "hereisstri"  

<hr>

- 라우터 : 화면을 이동 시켜주는 장치  
-- 사용자가 입력한 URL을 통해 특정 컴포넌트를 부름  

| Route 2가지 props 전달
1. URL을 위한 path props
2. URL에 맞는 컴포넌트를 불러주기 위한 component props

```javascript
    function App() {
  return (
    <HashRouter>
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  )
}
```

- 사용자가 /home/introduction에 접속하면 /, /home/introduction 순서로 path props가 있는지 찾음
- path props에 /home, /home/introduction가 모두 있어 Home, introduction 컴포넌트 둘다 그려짐

| exact props는 Route 컴포넌트가 path props와 정확하게 일치하는 URL에만 반응하게 만들어 줌

***

## [ 10월 13일 ]

```javascript
    this.setState({moives: movies})
    처음은 movies state 뒤에 movies 이건 구조 분해 할당으로 얻은 영화 데이터가 있는 변수
```
- Movie.propTypes 추가  
-- id, year - number | title, summary, poster - sting  

- API  
-- Parameter = sort_by 영화데이터 정렬

- 로딩이 다 되면 실행되는 자리 movies.map()

```javascript
    render() {
        const { isLoading, movies } = this.state;
        return <div>{isLoading ? 'Loading...' : movies.map()}</div>
    }
```

- key props : 유일하고, API에서 넘겨주는 id값 사용

- 컴포넌트에 HTML 추가
-- 교재에서는 클래스이름을 __을 넣어 표기했지만 그렇게하면 좋지않음


```javascript
    return(
        <section class ="container">
          {isLoading ? (
              <div class="loader">
                <span class="loaderText">Loading...</span>
              </div>
          ) : (
              <div class="movies"> {...}
              </div>
          )}
        </section>
    )
```
- 리액트에서 class를 쓰기위해서는 className을 써야함
<hr>

## [ 10월 6일 ]

```javascript
componentDidMount() {
    setTimeout(() => {
        this.setState({ isLoading: false});
    }, 6000)
}
```
=> setTime() 함수 첫 번째 인자로 전달한 함수를 두 번째 인자로 전달한 값(밀리초) 후에 실행 <br><br>

<hr>
- axios 활용한 API 호출, 네트워크를 사용해 느리게 작동
- API는 특정 주소를 입력하면 그 주소에 맞는 결과 출력, 특정 주소에 조건을 붙여 입력하면 그 조건까지 고려한 결과 출력
- getMoives() 함수는 시간이 필요 -> async,await 키워드 사용

```javascript
getMoives = async () => {
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
}
```

<hr>

- 객체의 키와 대입할 변수의 이름이 같다면 코드 축약

```javascript
this.setState({movies: movies})
this.setState({movies})
```

***

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