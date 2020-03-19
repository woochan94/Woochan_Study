# REST API 

<br>

## 1. REST 란  

```
REpresentational State Transfer(REST) is a software architectural style 
that defines a set of constraints to be used for creating Web services.

Web services that conform to the REST architectural style, called RESTful Web services,
provide interoperability between computer systems on the Internet.
```
>REST란 용어는 HTTP/1.0과 1.1의 스펙 작성에 참여하고 아파치 HTTP 서버 프로젝트의 공동설립자인 로이필딩 (Roy Fielding)의 2000년 논문에서 처음 소개됨. <br>
발표 당시 웹이 HTTP의 설계 상 우수성을 제대로 사용하지 못하고 있는 상황을 보고 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로서 REST를 소개. 

REST란 <b>HTTP URI를 통해 자원(Resource)를 명시하고, HTTP Method(GET, POST, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용</b>하는 것을 의미 한다. <br>
즉, REST는 자원 기반의 구조 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.

- REST 아키텍처는 클라이언트와 서버간의 독립적인 개발을 진행할 수 있는 아키텍처 스타일
- 서버와 클라이언트의 데이터는 HTTP 프로토콜 위에서 데이터를 주고 받으며 <u>REST 아키텍처 스타일에서 명시하는 조건</u>을 준수해야 함.

<br>

## 2. REST를 사용하는 이유 

### REST의 장점 
- HTTP 프로토콜의 인프라를 그대로 사용하기 때문에 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없다. 
- HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다. 
- REST APip 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.
- 서버와 클라이언트의 역할을 명확하게 분리

> 요즘같이 클라이언트의 종류가 많고 안드로이드폰과 아이폰, 다양한 브라우저에서 원활한 통신을 하기 위해서는 멀티 플랫폼에 대한 지원이 필수적. <br>
> REST 의 이러한 장점으로 인해 통해 멀티 플랫폼에 대한 지원을 보다 편리하게 대응 할 수 있다.

<br>

## 3. REST 특징 
#### 1. 클라이언트-서버
클라이언트와 서버가 명확히 분리되어야 한다. 
- Server : API 제공 및 비즈니스 로직 처리 및 저장 
- Client : 서버로 부터 제공받은 데이터를 이용하여 사용자가 원하는 화면 보여주는 역할

#### 2. 무상태성
서버에 클라이언트의 상태 정보를 저장하지 않는다. <br>

#### 3. 캐시 가능 
클라이언트의 응답을 캐시할 수 있어야 한다. <br>
캐시 사용을 통해 응답시간이 빨라지고 REST Server 트랜잭션이 발생하지 않기 때문에 전체 응답시간, 성능, 서버의 자원 이용률을 향상시킬 수 있다. 

#### 4. 계층화 
클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버, 암호화 계층등 중간 매체를 사용 할 수 있어 자유도가 높다. 

#### 5. 코드 온 디멘드 (optional) 
Server로 부터 스크립트를 받아와 클라이언트에서 실행 할 수 있으며, 기능을 일시적으로 확장 가능 

#### 6. 인터페이스 일관성 
URI로 지정한 Resource에 통일되고 한정적인 인터페이스를 제공. <br>
이로써 특정 언어나 기술에 종속되지 않고 HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다.  

<br>

## 4. REST API란 

REST 기반으로 서비스 API를 구현한 것 

### REST API 구성 
1. 자원 (Resource) - URL 
2. 행위 (Verb) - Http method 
3. 표현 (Representation)

### REST API 설계 규칙 
#### 1. URI는 정보의 자원을 표현해야 한다. 
- resource는 동사보다는 명사, 대문자보다는 소문자를 사용
#### 2. 자원에 대한 행위는 HTTP Method로 표현한다. 
- URI에 HTTP Method가 들어가면 안된다. 
```
<회원정보를 가져오는 URI>
GET /members/show/1 (x)
GET /members/1 (o)
```
##### HTTP Method 
Method | 역할 |
|---|:---:|
`GET`| GET을 통해 해당 리소스를 조회한다. 리소스를 조회하고 해당 도큐먼트에 대한 정보를 가져온다.
`POST`| POST를 통해 해당 URI를 요청하면 리소스를 생성 
`PUT` | PUT을 통해 해당 리소스를 수정 
`DELETE` | DELETE를 통해 리소스를 삭제 

### URI 설계 시 주의점 
1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용 
2. URI 마지막 문자로 슬래시 구분자(/)를 포함하지 않는다.
3. 밑줄(_)은 URI에 사용하지 않고 URI의 가독성을 높이는데 하이픈(-)을 사용 
4. 파일 확장자는 URI에 포함하지 않는다. 

<br>

## 5. HTTP 응답 상태 코드 
잘 설계된 REST API는 URI만 잘 설계된 것이 아닌 그 리소스에 대한 응답을 잘 내어주는 것 까지 포함되어야 한다. 

<br>
<br>

## 참고 사이트 
https://meetup.toast.com/posts/92 <br>
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html <br>
https://engkimbs.tistory.com/855