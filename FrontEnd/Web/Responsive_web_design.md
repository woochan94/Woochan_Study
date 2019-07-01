# Responsive Web Design 

<br>

## 1. Responsive Web Design 이란? 

> 반응형 웹 디자인이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법을 말한다. <br>
> 웹 사이트를 PC용과 모바일용으로 각각 별개로 제작하지 않고, 하나의 공용 웹사이트를 만들어 다양한 디바이스에 대응할 수 있다. <br>
> <b>즉, 반응형 웹사이트란 하나의 웹사이트를 구축하여 다양한 디바이스의 화면 해상도에 최적화된 웹사이트를 제공하는 것이다.</b>

![](../../img/responsive_web.png)

<br>

## 2. viewport meta tag 

> viewport란 사용자가 시각적으로 볼 수 있는 웹페이지 영역을 의미한다. viewport는 디바이스별로 크기가 다양하며, 모바일 디바이스의 경우 PC보다 뷰포트가 작다. 이때문에 데스크탑에 기반하여 설계된 웹페이지를 모바일에서 보면 기본 viewport가 980px이고 이로 인해 내용이 작게 보인다. 즉, 작은화면의 모바일 단말기에서 웹 페이지를 모두 표시하려고 하니 전체적인 페이지의 배율이 조정되는 것이다. <br>
> 모바일 화면에 맞도록 전체적인 페이지가 축소되어 보이지만 페이지 컨텐츠의 배율 축소가 발생해 가독성이 떨어지게 된다. 이때 viewport를 설정하면 다양한 모바일 기기에서도 페이지의 너비나 화면 배율을 설정할 수 있다. 

### 2-1 일반적인 viewport 설정 
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
가로폭을 디바이스의 가로폭에 맞추고 초기 화면 배율을 100%로 설정하는 것을 의미한다. 

<br>

## 3. Media Query 

> 반응형 웹디자인에 사용되는 핵심 기술로써, CSS3에 포함되어 있으며 자바스크립트 등을 사용하지 않고도 특정 요소에 해상도별로 대응하는 스타일을 각각 적용시킬 수 있도록 해준다. 정확히는 Media Type 을 이용한 표현식을 통해 스타일의 적용 범위를 한정할 수 있다. 

### 3-1 기본 형태 
```
@media [Only | Not] MediaType and (조건식) and (조건식) and ... {
  /* 실행문 */
}
```

### 3-2 조건식을 이루는 대표적인 Media Feature 
><b>width (max-width, min-width) / height (max-height, min-height)</b><br>
뷰포트의 너비와 높이를 나타낸다. 뷰포트의 크기는 HTML 컨텐츠의 내용을 표시하는 전체적인 크기를 말하며, 화면의 크기와는 거리가 있는 개념이다.
>
><b>device-width / device-height</b> <br>
디바이스가 출력할 수 있는 영역의 크기, 즉 스크린의 해상도를 의미한다.
>
><b>orientation</b> <br> 
화면이 세로모드인지 가로모드인지 판단할 수 있다. 이를 판단하는 기준은 뷰포트의 너비와 높이의 비율이다.
>
><b>aspect-ratio (max-aspect-ratio, min-aspect-ratio)</b> <br>
스크린의 너비와 높이의 비율. Value 는 너비/높이 형태로 작성한다. 너비와 높이의 비율을 4:5로 하고싶다면 4/5로 작성하면 된다.

### 3-3 임의의 해상도에 따른 breakpoint 정의 
![](../../img/media-query-breakpoints.jpg)

- Media Query 사용 예

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Query 예제</title>
    <style>
        // width 값이 1025px 보다 큰 값은 배경화면 red  
        body { background-color: red; }

        // width 값이 768px ~ 1024px 까지는 배경화면이 blue
        @media (max-width:1024px) {
            body { background-color: blue;}
        }

        // width 값이 481px ~ 768px 까지는 배경화면이 yellow
        @media (max-width:768px) {
            body { background-color: yellow; }
        }

        // width 값이 0 ~ 480px 까지는 배경화면이 black
        @media (max-width:480px) {
            body { background-color: black; }
        }
    </style>
</head>
<body>
    
</body>
</html>
```

<br>

## 4. Semantic Tag

<br> 

<center>

![](../../img/html5_logo.png)

</center>

### 4-1.시맨틱 태그란? 

> - 의미론적 태그
> - HTML5에 도입된 개발자와 브라우저에게 의미있는 태그. 

<center>

![](../../img/semantictag.png)

</center>

### header 

> - 웹 문서의 헤더 영역을 나타낸다.
> - header는 웹 페이지에 대한 소개, 네비게이션 영역, 테이블 영역, 검색 영역, 로고 영역을 포함한 영역이다.
> - header는 제목 태그가 포함 될 수 있으며, 필수 조건은 아니다.
> - header는 섹션 컨텐츠가 아닌 그룹화하기 위한 요소이므로 section요소를 포함할 수 없다.


### main 

> - 웹 문서의 주요 콘텐츠 영역을 나타낼 때 사용한다.
> - main은 웹 페이지에서 한 번만 사용할 수 있으며, 접근성과 검색영역에 노출을 향상시킨다.
> - article, aside, footer, header, nav를 하위 요소로 사용할 수 있다.

### nav 

> - 페이지 내에서 이동 할 수 있는 네비게이션 링크 그룹이다.
> - nav는 문서의 핵심적인 페이지의 메뉴 및 서브 메뉴에서 사용하고, 문서에서 주로 한 번만 사용한다.
> - 문서 안에 링크가 포함된 콘텐츠는 nav를 사용하지 않는다.
> - nav는 핵심적인 네비게이션에 사용해야 하므로 footer 내에 링크 그룹의 사용은 적절하지 않다.

### section 

> - 일반적으로 문서의 콘텐츠 섹션을 의미
> - 콘텐츠와 관련된 한 가지 주제 영역을 말한다.
> - section 요소는 문장이나 문서의 스타일링 요소가 아니기 때문에 편의나 영역을 위함이라면 div 요소가 좋다.
> - section 요소는 제목이 없는 경우는 섹션이라고 할 수 없기때문에 제목을 제공해야 한다.
> - section 요소는 일반적인 주제가 아니라면 구체적인 요소(article, aside, nav)를 사용하는 것이 더 적절하다.

### article 

> - 콘텐츠의 독립적인 항목을 나타내는 콘텐츠를 의미
> - article은 포럼, 신문기사, 잡지, 블로그 항목, 게시판 글 등 콘텐츠의 독립적인 항목을 나타냄
> - section은 하나의 주제를 나타낸다면, article은 주제를 묶은 독립적인 콘텐츠를 의미
> - section 요소 안에는 article 요소를 포함시킬수 있으며, article 요소 안에도 section 요소를 쓸 수 있다.

### aside 

> - 웹 문서의 메인 콘텐츠와 관련된 사이드 컨텐츠 영역으로 나타낸다.
> - aside는 메인 콘텐츠와 관련된 사이드의 정보, 광고 등 부분적인 정보를 그룹할 때 사용한다.

### footer 

> - 웹 문서의 footer 영역을 나타낸다.
> - footer는 저작권 정보, 회사 정보, 관련 링크, 주소, 바닥글, 사이트 정보 등을 포함하는 콘텐츠 영역이다.
> - footer는 섹션 컨텐츠가 아닌 그룹을 나타내는 요소이며, section, article, aside 등을 포함 할 수 있다.
