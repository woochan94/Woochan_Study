<hr>

## 목차 

### [호이스팅](#-호이스팅-(hoisting)) 
-  [선언과 할당](###-선언과-할당)
-  [호이스팅 (var의 유효범위)](###-호이스팅-(var의-유효범위))
-  [함수 호이스팅](###-함수-호이스팅)
-  [함수, 변수 우선순위](###-함수,-변수-우선순위)

<hr>

<br>

# 호이스팅 (Hoisting) 

<br> 

> 호이스팅은 var를 통해 정의된 변수의 선언문을 유효범위의 최상단으로 끌어올리는 행위를 말한다. <br>
> 즉, **변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미한다.** <br>
> 변수가 함수 내에서 정의 되었을 경우 선언이 함수의 최상위로, <br>
> 함수의 바깥에서 정의되었을 경우 전역 컨텍스트의 최상위로 변경이 된다. 

<br>

### 선언과 할당
```js
if (true) {
    var name = "woochan";
}
console.log(name); //woochan
```
위 코드는 호이스팅에 의해 아래와 같은 코드로 바뀌어 해석됩니다. 
```js 
var name; //선언 
if (true) {
    name = "woochan"; // 할당 
}
console.log(name); //woochan
```

<br>

### 호이스팅 (var의 유효범위)
```js
function getX() {
    console.log(x); 
    var x = 100; 
    console.log(x); 
}
getX(); 
```
>위 코드의 출력값을 예상해보자면 변수 x가 선언되지 않고 x를 출력하려고 해서 오류가 발생할 것이라고 예상할 수 있다. <br>
> 하지만 자바스크립트에서는 첫번째 x에 대한 출력값을 undefined라고 하고 넘어간다. <br>
> 밑에 줄에 있는 ```var x = 100;``` 에서 var x;를 호이스트하기 때문이다.  <br>
> 즉, 자바스크립트에서의 위 코드를 작동 순서에 맞게 재구성하면 아래와 같다. 
```js
function getX() {
    var x; 
    console.log(x); //undefined 
    x = 100; 
    console.log(x); // 100
}
getX();
```

<br>

### 함수 호이스팅 
> 함수의 선언 역시 호이스팅의 대상이다. 때문에 스코프 내에서 어떤 위치에서 함수 선언을 하든지 호출할 수 있다. 
```js
printName(); // woochan 

function printName() {
    console.log("woochan");
}
```
<br>

**※단, 함수호이스팅은 함수를 끌어올리지만 변수의 값을 끌어올리지 않는다.**
```js
printName(); 

var printName = function() {
    console.log("woochan");
}

>> Syntax Error! 
```
> ```var printName``` 은 변수이기 때문에 '선언과 할당의 분리가 발생한다. 
```js
var printName; 

printName(); 

printName = function() {
    console.log("woochan");
}
```
> 위의 코드와 같이 재구성되어 해석되는데, 순서를 보면 printName이 선언되고 printName()이 호출되지만 printName에 대한 함수가 정의되어 있지 않아서 에러가 발생하게 되는것이다. 

<br>

### 함수, 변수 우선순위 
> 변수 할당이 함수 선언보다 우선순위 이고, 함수 선언이 변수 선언보다 우선 순위이다.<br> 
> 즉, 변수 a선언 → 함수 a선언 → a 값 할당 순으로 실행된다. 
```js
var myName = "hi";

function myName() {
  console.log("woochan");
}
function yourName() {
  console.log("everyone");
}

var yourName = "bye";

console.log(typeof myName); // function ?
console.log(typeof yourName); // string ?
```
위의 코드는 아래와 같은 코드로 재구성되어 해석된다. 
```js
var myName;
var yourName;
function myName() {
  console.log("yuddomack");
}
function yourName() {
  console.log("everyone");
}

myName = "hi";
yourName = "bye";

console.log(typeof myName); // string 
console.log(typeof yourName); // string 
```
> 호이스팅이 일어나면서 위와 같은 코드로 실행되기 때문에 결국은 출력값 모두 string인 것이다. 

<br><br>

## 참고 사이트 
https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85Hoisting
<br>
https://asfirstalways.tistory.com/197