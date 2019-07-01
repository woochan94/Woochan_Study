# Ajax ( Asynchronous JavaScript and XML )

<br>

## 1. 기본 웹페이지 통신 방식 

> 브라우저에서 웹페이지를 요청하거나 링크를 클릭하면 화면 갱신이 발생한다. 이것은 브라우저와 서버와의 통신에 의한 것이다. 
> 
> ![](../../img/ajax1.png)
> 서버는 요청받은 페이지(HTML)를 반환하는데 이때 HTML에서 로드하는 CSS나 JavaScript 파일들도 같이 반환된다. 클라이언트의 요청에 따라 서버는 정적인 파일을 반환할 수도 있고 서버 사이드 프로그램이 만들어낸 파일이나 데이터를 반환할 수도 있다. 
> <br> 서버로부터 웹페이지가 반환되면 클라이언트는 이를 렌더링하여 화면에 표시한다. 
> 
> ![](../../img/ajax2.png)

<br>

## 2. Ajax

> Ajax는 자바스크립트를 이용해서 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다. 
> <br> 서버로부터 웹페이지가 반환되면 화면 전체를 갱신해야 하는데 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있도록 하는 것이다. 페이지 전체를 로드하여 렌더링할 필요가 없고 갱신이 필요한 일부분만 로드하여 갱신하면 되므로 빠른 퍼포먼스와 부드러운 화면 표시 효과를 기대 할 수 있다. 
> 
> ![](../../img/ajax3.png)
> Ajax 는 서버와 통신하기 위해 <b>XMLHttpRequest</b> 객체를 사용하며, JSON, XML, HTML 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있다. 
> <br> → Ajax로 실행되는 HTTP통신은 XMLHttpRequest 규격을 이용함 

<br>

## 3. XMLHttpRequest 

> - XMLHttpRequest는 HTTP를 통해 쉽게 데이터를 받을 수 있게 해주는 오브젝트를 제공한다. 
> - 브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송한다. 서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리한다. 

### 3.1 Ajax request 

```
let xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성 
xhr.open('GET', 'http://localhost:3000', true ); // 메소드 방식, url, 비동기 여부 설정 
xhr.send(); // request 전송 
```

### 3.2 Ajax response 

```
// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 이벤트 핸들러를 호출한다.
xhr.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log('Error!');
    }
  }
};
```
<b>onreadystatechange</b>가 요청에 대한 응답을 받는 이벤트 리스너이다. <br><br>
 Ajax 요청시 xhr 객체는 각 상태별로 readyState가 바뀐다. 처음에는 readyState가 0(xhr.UNSENT, 보내지 않음) 이었다가, open 메소드를 호출하는 순간 1(xhr.OPENED)로 바뀐다. 그리고 send시 순차적으로 2(xhr.HEADERS_RECEIVED), 3(xhr.LOADING), 4(xhr.DONE) 으로 바뀐다. <br>
 readyState가 바뀔 때마다 onreadyStatechange에 설정해 두었던 콜백함수가 호출된다. 최종적으로 readyState가 4가 되었을 때 요청이 완료된것이기 때문에 xhr.status로 HTTP 상태 코드를 확인한다. 

 <br>

 ## 4. 참고 사이트 
1. https://poiemaweb.com/js-ajax
2. https://www.zerocho.com/category/HTML&DOM/post/594bc4e9991b0e0018fff5ed
3. https://ocsusu.tistory.com/60