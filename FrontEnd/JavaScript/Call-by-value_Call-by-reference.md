<hr>

## 목차 

### [함수 호출 방식](#함수-호출-방식)
- [call-by-value](#1-call-by-value-값에-의한-호출)
- [call-by-reference](#2-call-by-reference-참조에-의한-호출)
- [예제를 통해 알아보기](#예제)

<hr>

<br>

# 함수 호출 방식 

<br>

### 1. call-by-value (값에 의한 호출) 
- 함수가 호출될 때, 메모리 공간 안에서는 **함수를 위한 별도의 임시 공간**이 생성된다. 
- call-by-value 값에 의한 호출방식은 함수 호출시 전달되는 변수의 값을 복사하여 함수의 인자로 전달한다. 
- 복사된 인자는 함수 안에서 지역적으로 사용되는 locla value의 특성을 가진다. 
- **<u>따라서 함수 안에서 인자의 값이 변경되어도, 외부 변수의 값은 변경되지 않는다.</u>**
- primitive type(boolean, number, string, undefinedm null)인 경우에 해당 

<br>

### 2. call-by-reference (참조에 의한 호출) 
- 함수가 호출될 때, 메모리 공간 안에서는 **함수를 위한 별도의 임시 공간**이 생성된다.
- call-by-reference 참조에 의한 호출방식은 함수 호출시 인자로 전달되는 변수의 레퍼런스를 전달한다. (해당 변수를 가르킨다.) 
- **<u>따라서 함수 안에서 인자의 값이 변경되면, 아규먼트로 전달된 객체의 값도 함께 변경된다.</u>**
- array, object 등의 객체 타입인 경우에 해당 

<br>

### 예제 
```js
let i = 10; 
const some = {
    num: 10, 
    name: 'CodeStates'
}; 

function foo(val) {
    val = val * 2; 
}

function foo2(val) {
    val.num = 20;
}

foo(i); 
foo2(some); 

console.log(i);
console.log(some.num);
```

> 과연 출력값이 각각 어떻게 될까?<br> 
> 결과부터 말하자면 첫번째 값은 10, 두번째 값은 20이다. <br>
> 여기에서 call by value와 call by reference가 발생한다. 
> 앞서 설명했듯이 기본자료형은 그 값을 복사하여 function에서 실행될 뿐 원본값에는 어떠한 변화가 없다. (call-by-value) <br>
> 결국 ```i=10```의 값이 ```foo(i)```함수 안에서 *2가 되지만 함수가 끝난 뒤에는 사라지는 값이기 때문에 console.log(i)했을때 원본값인 10이 그대로 출력된다. 
> <br><br>
> 기본 자료형을 제외한 Object, Array 등은 원본값을 참조하기 때문에 ```foo2(some)```을 통해서 Object some의 ```num:10```값을 변화시킨다. 
> <br>따라서 console.log(some.num)의 값은 변화된 20이 출력된다. (call-by-reference)

<br><br>

## 참고 사이트 
1. https://wayhome25.github.io/cs/2017/04/11/cs-13/
2. https://medium.com/@Taewoong/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EB%86%93%EC%B9%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%95%84%EC%A3%BC-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EB%B6%80%EB%B6%84-b777a00df9c7