# PHP vs Node.JS 

<br>

## 1. PHP 특징 
### 1. 코드와 컨텐츠의 융합
>  HTML과 CSS로 웹사이트를 제작 하던 중 특정 프로세스를 웹 상에 추가하거나, 데이터베이스에서 가져온 데이터나 텍스트를 통합하고 싶을 수 있다. <br>
> PHP에서는 ```<?php ?>``` 태그를 이용하여 코드 개발을 시작할 수 있다. <br>
> <b>즉, 템플릿이 따로 필요 없다. </b>
> ```php
> <div style="padding-right: 435px" id="write_btn">
>   <?php
>       if (!isset($_SESSION['userid'])) {
>           echo "<button class='btn_write2' onclick='btn_disable()'>글쓰기</button>";
>       } else {
>           echo "<a href=\"write.php\"><button class='btn_write2'>글쓰기</button></a>";
>       }
>   ?>
>   <script>
>       function btn_disable() {
>           alert('로그인이 필요합니다.');
>           var btn = document.getElementById('btn_write');
>           btn.disabled = 'disabled';
>       }
>    </script>
> </div>
> ```

### 2. SQL과의 연동성 
> PHP는 MySQL, MariaDB 등 많은 DB언어들과 공존하고 있는 프로그래밍 언어이다. <br>
> 쿼리에 맞게 조금씩 코드만 변경해준담면 어떤 SQL 데이터베이스와도 호환이 될 것이다. <br> 
> <b>즉, PHP는 웹서버가 가져야 하는 필수요소중 하나인 DB관리 능력을 수월하게 해준다.</b>

### 3. 빠른 코딩속도 
> PHP는 컴파일러, 배치, JAR파일, 전처리기 등이 필요 없기 때문에 코딩을 빠르게 할 수 있다. 

<br>

## 2. Node.JS 특징 
### 1. 코드와 컨텐츠의 분리 
> PHP와 같이 코드와 컨텐츠를 섞어서 개발을 하다보면 처음에는 굉장히 편하고 쉽게 다가올 수 있겠지만, 나중에 보면 완성도가 떨어질 위험이 있다. 즉, 코드의 기반이 무너질 수 도 있다는 것이다. <br>
> 웹 브라우저 코드(Front-end) 와 서버코드(Back-end) 코드를 분리시킨다면 코드를 보기 쉬울 뿐 아니라 유지 보수도 좀 더 편하게 할 수 있다. <br>
> 모델, 뷰, 컨트롤러를 분리하는 것 (MVC패턴)이 낫다는 사실을 인지하고 적용한 것이 Node.JS이다. 

### 2. JSON과의 연동 
> Node.JS는 상당수의 JSON 라이브러리를 지원하기 때문에 JSON과의 연동성이 뛰어나다. <br> 

### 3. 데이터 처리에 최적화 
> Node.JS는 웹 서비스를 통해 데이터만 전달하게끔 최적화가 되어 있다. 앱이 복잡하고 데이터가 많다면, 효율적인 전달에 좋은 토대가 될 수 있다. 

<br>
<br>

## 3. 참고 사이트 
1. https://flearning-blog.tistory.com/24
2. http://www.itworld.co.kr/news/91449