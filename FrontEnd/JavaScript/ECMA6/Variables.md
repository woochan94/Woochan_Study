<hr>

## 목차 

### var, let, const 비교 설명 
- [용어 정리](#1-용어-정리)
- [var, let 비교](#2-var-let-비교)
- [const](#3-const)
- [const 키워드를 사용하여 함수, 객체 등을 선언하는 이유](#4-const-키워드를-사용하여-함수-객체-등을-선언하는-이유)
- [정리](#5-정리)

<hr>

<br>

# var, let, const 비교 설명 

<br> 

## 1. 용어 정리 
#### 식별자 (Identifier)
> 식별자는 무엇을 식별 할 수 있는 도구로 변수, 상수, 함수명등이 포함된다. <br> 
> ```let room1 = conference_room``` 에서 room1은 변수를 가리키는 식별자이다. 

#### 리터럴 (literal) 
> ```let currentTemp = 22;``` 에서 22가 리터럴이다. 리터럴이라는 단어는 값을 프로그램 안에서 직접 지정한다는 의미이다. 


#### 스코프(scope) 
> 스코프란 어떤 변수들에 접근할 수 있는지를 정의 <br>
> 어떤 선언된 변수가 있다면 이 변수가 유효한 공간적 범위를 말한다.

<br> 

## 2. var let 비교 
### 1. var 키워드는 변수명을 재선언해도 아무런 문제가 발생하지 않는다. 

```js
var userName = "woochan";

... 

var userName = "JeongWooChan";
// 아무런 문제가 발생하지 않는다. 
// 앞서 선언한 userName = "woochan"은 의도치 않게 유실된 것이다. 
```
위의 코드의 변수를 let으로 바꿔서 실행해보면 에러를 발생시킨다. 

```js
let userName = "woochan"; 

... 

let userName = "JeongWooChan"; 
>> SyntaxError 
```

<br> 

### 2. var 키워드는 호이스팅 이라는 메커니즘을 통해 끌어 올려진다. 

> 해당 링크에 Hoisting에 대한 개념을 정리 해놨으니 참고하면 되겠다. <br>
> [호이스팅 개념 정리 바로가기](https://github.com/JeongWooChan/Woochan_Study/blob/master/FrontEnd/JavaScript/Hoisting.md)

<br>

> var 키워드는 호이스팅이 동작하여 코드상 미리 선언되지 않은 변수에 대해 에러를 발생시키지 않는다. 
```js
console.log(userName); // undefined 
var userName = "정우찬"; 
console.log(userName); // 정우찬 
```
> 반면 let은 변수를 사용하기 전에 미리 선언하지 않으면 오류가 발생한다. 
```js
console.log(userName);  
let userName = "정우찬"; 
console.log(userName); 

>> ReferenceError: userName is not defined
```

<br>

### 3. var 변수로 인한 전역스코프 오염의 위험 

```js

var age = 20; //전역스코프 영역 

if (age = 20) {
    // 의도치 않게 변수의 이름을 name이 아닌 이미 선언했던 age라고 했을 경우 
    var age = "정우찬"; 
    console.log("name" + age); 
}

// 20 대신 "정우찬" 이 찍힌다. 
// 위의 작은 실수가 전역스코프를 오염시켜 프로그램 전체에 영향을 주게 된다. 
console.log(age); // 정우찬
```

let 변수는 block-scope, 즉 블록 내부에 선언된 변수는 외부 스코프에 영향을 주지 않는다. 
```js
let age = 1;

if(age = 1){
  let age  = 3;
}

console.log(age);  // 전역스코프에 선언된 age는 오염되지 않고 여전히 1의 값을 유지한다.
```

## 3. const 

> const 는 let과 전반적으로 유사하며, 단지 상수선언 용이므로 리터럴값을 재 할당 하는것이 불가능하며, 선언과 동시에 값 할당을 해야 한다. 
```js 
const PI = "3.14"; // 선언과 동시에 값을 할당해야 함 
PI = "3.141592"; // const 키워드로 선언된 식별자에 리터럴 값을 재할당 할 경우 error 발생 

const NAME; // 선언과 동시에 값을 할당하지 않을 경우에도 error 발생 
```

일반적으로 const로 변수와 상수의 식별자를 구별하기 위하여 상수 식별자의 경우 대문자로 작성한다. 

<br>

## 4. const 키워드를 사용하여 함수, 객체 등을 선언하는 이유 

> - 선언된 배열, 객체, 함수 등의 값이 재할당 되는 것을 막고 싶기 때문 
> - const 식별자로 선언된 배열이나 객체 같은 경우, 일종의 객체타입이라는 자료형을 유지하기 위한 수단으로 사용된다. 

<br> 

## 5. 정리 

> - var로 변수선언하는 것을 피하자! 
> - let 키워드는 변수의 재선언을 막아준다. 
> - let 키워드는 변수 호이스팅이 되지 않으므로, 변수 사용전 반드시 선언을 먼저 해야 한다. 
> - const 키워드는 리터럴값 재할당이 불가능하며 선언과 동시에 값 할당을 해야 한다. 

<br><br>

## 참고 사이트 

1. https://blog.hanumoka.net/2018/09/21/javascript-20180921-javascript-var-let-const/<br>
2. https://velog.io/@marcus/2019-02-10-1702-%EC%9E%91%EC%84%B1%EB%90%A8