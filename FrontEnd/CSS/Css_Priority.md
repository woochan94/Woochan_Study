# CSS 우선순위 

<br>

### 1. 속성값 뒤에 ```!important``` 를 붙인 속성 

### 2. HTML 에서 ```style```을 직접 지정한 속성 
```html
<div style="background-color: blue;" class="test" />
```

### 3. 선택자가 ```#ID``` 인 경우 
```html
// css 
.css1 {
    background-color : red;
}
#css2 {
    background-color : blue;
}

// html 
<div id="css2" class="css1"></div> 
```
> id 선택자가 class보다 앞서기 때문에 id의 파란색이 적용된다. 

### 4. 선택자가 ```CLASS, :추상클래스``` 인 경우 
```html
// css
div {
    background-color: red;
}  
.css1 {
    background-color: blue;
}

// html 
<div class="css1"></div>
```
> 태그에 css를 적용한 경우와 class에 적용한 경우 class가 더 우선이기 때문에 파란색이 적용됨 

### 5. 선택자가 ```태그이름```인 경우 

### 6. 상위 객체의 상속된 속성 

<br><br>

## 참고사이트 
https://mainia.tistory.com/3243