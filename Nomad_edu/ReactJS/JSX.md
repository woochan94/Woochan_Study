# JSX

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