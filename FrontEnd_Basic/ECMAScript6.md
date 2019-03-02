# ECMAScript 6 

## 1. 소개 

> ECMAScript는 스크립트 언어들의 표준인데, 줄여서 'ES'라고 한다. ES6는 다양한 API 추가와 편의 기능을 제공하는데 향상된 주요 기능 중에는 모듈과 클래스의 추가, 어휘 블록 범위 지정, 반복자와 생성자, 비동기 프로그램의 구조 패턴을 제공하는 promise, map과 set 컬렉션, 간단한 함수 선언인 화살표 함수 등 다양한 부분에서 기능이 크게 향상되었다. <br>
> 
> ES6의 발표는 많은 라이브러리에 영향을 주었다. Node.js도 4버전 부터 ES6를 도입하였고, AngularJs, React, Vue 등도 ES6에 맞춰 개편되었을 만큼 빠르게 확산되는 중이다. 

<br>

## 2. 이터러블 규약과 이터레이터 규약 

### 2.1 이터러블 규약과 이터러블 객체 

> 이터러블 규약(Iterable Protocol)은 ES6에서 새로 추가된 for...of 문을 실행하여 반복될 때 값이 열거되며, 내부적으로 @@iterator 메서드가 구현되어 있어야 하는 규약이다. 
> <br> 자바스크립트 내장 객체 중 Array, String, Map, Set, 함수의 arguments 객체 등이 이터러블 규약을 따르며 이를 '이터러블 객체'라고 한다. 

- 내장된 @@iterator 메서드의 예 
```
let str = '가나다'; 
let iterator = str[Symbol.iterator]();   // Symbol.iterator()를 줄여 @@iterator로 부른다. 
```
- 이터러블 객체 생성 
```
let iterable = {
    [Symbol.iterator]:function() {  // @@iterator 메서드 추가 이터레이터 전달 

    }
}
```

### 2.2 이터레이터 규약과 에터레이터 객체 
> 이터레이터 규약은 이터러블 규약과 마찬가지로 값이 열거 되지만, next 메서드를 통해서 하나씩 순차적으로 열거되어야 하는 규약이다. <br>
> 이 때 열거되는 값의 형태는 객체이며 속성으로 value와 done을 갖는다. done은 열거의 끝임을 알려주는데, 열거가 끝인 경우 true를 전달한다. 

```
 let arr = [1, 2, 3]; 
 let iterator = arr[Symbol.iterator](); // 내장된 @@iterator 메서드를 호출하여 에터레이터 객체를 전달받음 
 iterator.next(); // {value:1, done:false}
 iterator.next(); // {value:2, done:false}
 iterator.next(); // {value:3, done:false}
 iterator.next(); // {value:undefined, done:true}
```
