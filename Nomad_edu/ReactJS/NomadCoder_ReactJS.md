# 1. JSX

> - 리액트 컴포넌트를 만들 때 사용하는 언어 (html)
> - 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 자바스크립트의 확장 
> - 하나의 root 노드만 렌더링 가능

 ### 장점 (아직 이 장점들에 대해 크게 공감은 못하겠다...)

- 개발자 경험 개선 : 표현력이 뛰어나 코드를 읽기 쉽다. 
- 팀의 생산성 향상
- 문법 오류와 코드량 감소 : 작성해야 할 코드가 준다. 

\- JS로 작성한 Helllo World
```
ReactDOM.render(
    React.createElement('h1', null, 'Hello world!'), 
    document.getElementById('content')
) 
```

\- JSX로 작성한 Hello World
```
ReactDOM.render(
    <h1>Hello world!</h1>
    document.getElementById('content')
)
```

JSX 문법으로 작성한 객체도 변수에 저장할 수 있다. 
```
let helloWorldReactElement = <h1>Hello world!</h1>
ReactDOM.render(
    helloWorldReactElement, 
    document.getElementById('content')
)
```
<br>

### if/else 문

> JSX 안에서 사용되는 JavaScript 표현에는 If-Else문이 사용 불가하다. <br>
> → 함수 생성과 객체 생성의 프로그래밍 편의성을 이유로 ([React 공식 페이지 참고](https://react-cn.github.io/react/tips/if-else-in-JSX.html))
> - 이에 대한 대안은 삼항 연산자 

<br>

# 2. render 

- 모든 컴포넌트는 render function을 가지고 있음 
- '뭔가를 보여주는, 출력하는' 기능 

# 3. reactDOM 

### React vs reactDOM

> React : UI 컴포넌트 라이브러리 <br>
> reactDOM : 리액트를 웹사이트에 출력(render)하는 걸 도와주는 모델 

 리액트를 사용해서 웹사이트에 올려놓고 싶을 때 reactDOM을 사용함 

 # 4. props, state 

 ### props 

> - 부모 컴포넌트로부터 전달받는 속성
> - 컴포넌트 내부에서 값을 변경할 수 없다. 

 # 5. React Component Life Cycle

 ![](../../img/LifeCycle.png)

 <span style = "color : red"><u>*리액트 17부터는 componenetWillMount, componentWillUpdate, componenetWillReceiveProps 라이프 사이클이 deprecated 됩니다.*</u> </span>

Render : render() → ComponentDidMount() <br>
Update : shouldComponentUpdate() → render() → componentDidUpdate()

### Mount 

> Component가 처음 실행 될 때 그것을 Mount라고 표현한다. 컴포넌트가 시작되면 우선 context, defaultProps와 state를 저장한다. <br>
> 그 후에 componentWillMount 메소드를 호출한다. 그리고 render로 Component를 DOM에 부착한 후 Mount가 완료된 후 componentDidMount가 호출된다. 
> - componentWillMount에서는 props나 state를 바꾸면 안된다. <br>
> → Mount 중이기 때문에 
> - componentDidMount에서는 DOM에 접근할 수 있다. <br>
> → 주로 AJAX 요청을 하거나 setTimeout, setInterval 같은 행동을 함 

