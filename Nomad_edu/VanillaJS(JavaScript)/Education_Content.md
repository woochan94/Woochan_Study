## 1. HTML에서 JavaScript 코드가 body 맨 밑에 넣는 이유 

- 웹 브라우저가 HTML 문서를 해석(Parsing) 할 때 \<script> 태그를 만나면 그 안에 있는 JavaScript 의 처리가 끝날 때 까지 다른 HTML의 해석을 멈추기 때문에 사용자 입장에서 HTML 페이지가 화면에 다 그려지기까지 더 오래 걸리게 된다.

      <!DOCTYPE html>
      <html>
        <head>
            <title> 제목 </title>
            <link rel="stylesheet" href="index.css">
        </head>
        <body>
            <h1>This works!</h1>
             <script src = "index.js"></script>
        </body>
      </html>

<br>

# 2. var, let, const

- var는 function-scoped이고, let, const는 block-scoped 이다. 

## 스코프(Scope)
> - 어떤 변수들에 접근할 수 있는지를 정의 
> - 어떤 선언된 변수가 있다면 이 변수가 유효한 공간적 범위를 말함 
> - 전역 스코프(Global Scope) <br>
  \- 변수가 함수 바깥이나 중괄호 바깥에 선언되었다면, 전역 스코프에 정의된다고 한다.<br>
  \- 전역 변수를 선언하면, 코드 모든 곳에서 해당 변수를 사용할 수 있다.
> - 지역 스코프(Local Scope)<br>
  \- 코드의 특정 부분에서만 사용할 수 있는 변수
>   - 함수 스코프(function-scope)
>   - 블록 스코프(block-scope)

### 함수 스코프(Function Scope)
- 함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근 가능 

      function sayHello () {
         const hello = 'Hello CSS-Tricks Reader!'
         console.log(hello)
        }

        sayHello() // 'Hello CSS-Tricks Reader!'

        console.log(hello) // Error, hello is not defined

### 블록 스코프(Block Scope) 
- 중괄호 내부에서 const또는 let으로 변수를 선언하면, 그 변수들은 중괄호 블록 내부에서만 접근 가능 
  
        {
          const hello = 'Hello CSS-Tricks Reader!'
          console.log(hello) // 'Hello CSS-Tricks Reader!'
        }
        console.log(hello) // Error, hello is not defined

### var, let, const 
> - var, let은 변수를 선언하는 키워드이고, const는 상수를 선언하는 키워드 
> - let과 const는 block-scoped로 블록 내부에 let, const로 선언된 변수는 외부 스코프에 영향을 주지 않는다.
> - let과 const는 ECMA6에 도입된 키워드이며, <u>var로 인해 발생하는 혼란스럽고 불 명확한 코드작성을 피하기 위하여</u> 만들어 졌다. 

<br>

## **var vs let <br> (왜 let을 써야 하는가? var가 어떠한 혼란을 불러일으키는가?)**
### 1. var 키워드는 변수명을 재선언해도 아무런 문제가 발생하지 않는다. 

      var userName = "JeongWooChan";

      .... // 긴 코드가 존재한다고 가정 

      var userName = "정우찬"; // 아무런 문제가 발생하지 않는다.
                              -> 앞서 선언한 userName="JeongWooChan"이 의도치 않게 유실된 것이다.

### 반면, let은 변수명 재선언시 에러를 발생시킴 
      let userName = "JeongWooChan"; 

      .... // 긴 코드가 존재한다고 가정 

      let userName = "정우찬"; // SyntaxError 발생


<br>

### 2. var 키워드는 호이스팅(hoisting)이라는 메커니즘을 통해 끌어 올려진다.
\* 호이스팅(hoistiong) : 끌어올리다.  
    
      console.log(userName); // 선언되지 않은 변수를 console 출력
      var userName = "정우찬"; 
      console.log(userName); 

      >> 실행 결과 
      undefined
      정우찬 

- 선언되지 않은 변수를 console로 출력했음에도 정상적으로 동작하는 것을 확인할 수 있다.<br>  그 이유는 var 키워드는 자바스크립트 해석기가 호이스팅을 통해 재해석하기 때문이다. 
  
※ var의 호이스팅을 막기 위해서는 자바스크립트 scope에 'use strict'를 사용해야 한다. 
      
      'use strict'
      console.log(userName); 
      var userName = "정우찬"; 
      console.log(userName);

      >> 실행 결과 
      ReferenceError : userName is not defined 

<br>

### 3. var 키워드 변수로 인한 전역스코프 오염의 위험 
- var 키워드 변수는 scope에 가두려면, 반드시 함수가 필요하다. 그래서인지 var 키워드 변수를 function-scoped라고 부른다. 

      var age = 20; // 전역스코프 영역 

      if(age = 20) {
          var age = "홍길동"; 
          console.log("name : " + age);
      }

      // 20대신 홍길동이 찍힌다. 위에 4줄의 작은 조건문에서의 실수가 전역스코프를 오염시켜
         프로그램 전체에 큰 영향을 미친다.
      console.log(age);

### let, const 키워드는 block-scoped, 즉 블록 내부에 let, const로 선언된 변수는 외부 스코프에 영향을 주지 않는다. 

      let age = 1; 

      if(age = 1) {
          let age = 3; 
      }

      console.log(age); // 전역스코프에 선언된 age는 오염되지 않고 여전히 1의 값 유지 

<br>

# 3. 참고 사이트 
https://blog.hanumoka.net/2018/09/21/javascript-20180921-javascript-var-let-const/
https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d