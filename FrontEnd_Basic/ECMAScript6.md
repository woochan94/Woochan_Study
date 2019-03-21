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

<br>

## 3. for...of 문 

> for...of 문은 기존에 배열이나 함수의 arguments 객체와 같은 컬렉션을 순회하는 for...in문이나 forEach()함수와 같은 역할을 한다. 뿐만 아니라 문자열을 한 글자씩 잘라 순회하거나 destructing 등이 가능해졌다. 

- for...of문 작성법 
```
for (variables of iterable) {
    ...
}
``` 
```
let str = 'for of문'; 

for (let value of str) {
    console.log(value);  // 결과값 : f, o, r, , o, f, 문
}
```

<br>

## 4. Spread operator 

> Spread 구문을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 또는 요소로 확장하여, 0개 이상의 키-값의 쌍으로 객체를 확장시킬 수 있다. 

- apply 대체 <br>

일반적으로 배열의 엘리먼트를 함수의 인수로 사용하고자 할 때 Function.prototype.apply를 사용하였다. 
```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```
Spread 문법을 사용해 위 코드를 다음과 같이 작성 할 수 있다. 
```
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

- 배열을 이어 붙이는 더 나은 방법 

Array.concat 은 배열을 존재하는 배열의 끝에 이어붙이는데 종종 사용된다. 
```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr2 의 모든 항목을 arr1 에 붙임
arr1 = arr1.concat(arr2);
```
Spread 문법을 사용해 다음과 같이 작성할 수 있다. 
```
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

- 이터러블 전용 

Spread 문법(spread 프로퍼티인 경우 제외) 은 iterable 객체에만 적용된다. 
```
var obj = {'key1': 'value1'};
var array = [...obj]; // TypeError: obj is not iterable
```

<br>

## 5. 화살표 함수 

> 화살표 함수(Array Function)는 함수표기를 화살표(=>)로 하여 구문을 짧게 줄여 준다. 이는 코드 작성량을 줄여주어 작성 시간을 단축시키는데 도움이 되지만 일반함수와 달리 함수 블록 안에 this, arguments, supe, new, target 등의 키 값을 생성하지 않는다. 

- 기존 함수 표현 
```
 function foo() {
     ...
 }
```
- 화살표 함수 표현 
```
 foo() => {
     ...
 }
```

### 5-1. 화살표 함수 선언 
```
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```


### 5-2. 화살표 함수의 호출 
```
// ES5
var pow = function (x) {
    return x*x;
}; 
console.log(pow(10)); // 100
```
```
// ES6
var pow = x => x*x; 
console.log(pow(10)); // 100 
```

### 5-3. this 

> 화살표 함수는 일반 함수와는 달리 생성자 호출 또는 메서드 호출시 환경함수에 의한 this를 생성하지 않는다. 

#### 5-3-1. 일반 함수의 this 

> 자바스크립트의 경우 함수 호출방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니라 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다. 


#### 5-3-2. 화살표 함수의 this 

> 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다. 
> <br> 이를 Lexical this라고 한다. 

<br>

- 일반 함수 
```
var obj = { 
    foo : function() {
        console.log(this); // this의 참조값은 obj 
    }
}

obj.foo(); 
```

- 화살표 함수 
```
let obj = {
    foo : () => {
        console.log(this); // this의 참조값은 초기값인 window 객체 
    }
}
```

### 5-4. 화살표 함수를 사용해서는 안되는 경우 

- 화살표 함수로 메소드를 정의하는 것은 피해야 한다. 
- 화살표 함수는 prototype 속성이 존재하지 않는다. 
- 화살표 함수는 new 연산자 호출이 불가능하다. 
- arguments를 생성하지 않는다. 



