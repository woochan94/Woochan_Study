# JS-객체 지향 프로그래밍 

<br>

## 프로토타입 기반 언어 
> 자바스크립트는 멀티-패러다임 언어로 명령형, 함수형, 프로토타입 기반 객체지향 언어다.
> - *클래스가 없어서 객체지향이 아니라고 생각할 수 있으나 프로토타입 기반의 객체지향 언어다.* 
>
> 자바스크립트는 클래스 개념이 없고 별도의 객체 생성 방법이 존재한다. 

```js
// 객체 리터럴 
const obj1 = {}; 
obj1.name = "Jeong";

// Object() 생성자 함수 
const obj2 = new Object(); 
obj2.name = "Jeong";

// 생성자 함수 
function F() {}
const obj3 = new F(); 
obj3.name = "Jeong";
```
> 자바스크립트는 이미 생성된 인스턴스의 자료구조와 기능을 동적으로 변경할 수 있다는 특징이 있다. 객체 지향의 상속, 캡슐화 등의 개념은 프로토타입체인과 클로저 등으로 구현할 수 있다. 

<br>

*자바스크립트의 OOP특징에 대해서는 아래 참고사이트를 참고*

<br>

## 참고 사이트 
1.[poiemaweb]

[poiemaweb]:https://poiemaweb.com/js-object-oriented-programming
