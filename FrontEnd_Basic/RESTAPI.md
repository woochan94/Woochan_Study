# REST, REST API, RESTful

<br>

## 1. REST 탄생 
> REST는 Representational State Transfer라는 용어의 약자로서 2000년도에 로이 필딩 (Roy Fielding)의 박사학위 논문에서 최초로 소개되었다. 로이 필딩은 HTTP의 주요 저자 중 한 사람으로 그 당시 웹(HTTP) 설계의 우수성에 비해 제대로 사용되어지지 못하는 모습에 안타까워하며 웹의 장점을 최대한 활용할 수 있는 아키텍처로써 REST를 발표했다고 한다.

<br>

## 2. REST란? 

### 2.1 REST 정의 
> - 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미한다. 
> - 즉, 자원(resource) 의 표현(representation)에 의한 상태 전달 
>   - 자원의 표현 : 그 자원을 표현하기 위한 이름 
>     - DB의 학생정보가 자원일 때, 'students'를 자원의 표현으로 칭함 
>   - 상태 전달 
>     - 데이터가 요청되어지는 시점에서 자원의 상태를 전달한다.
>     - JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적 
> - REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다. 

### 2.2 REST 구성 
> - 자원 (RESOURCE) - URI
>   - 모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재한다. 
>   - Client는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청한다.  
> - 행위 (Verb) - HTTP Method
>   - HTTP 프로토콜의 Method를 사용한다. (GET, POST, PUT, DELETE)  
> - 표현 (Representations) 
>   - Client가 자원의 상태에 대한 조작을 요청하면 Server는 이에 적절한 응답을 보낸다. 
>   - REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등의 여러 형태의 응답으로 나타내어 질 수 있다. 

### 2.3 REST의 구체적인 개념 
> - HTTP URI를 통해 자원을 명시하고, HTTP Method를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다. <br>
> - CRUD Operation : HTTP Method 
>   - Create : 생성 (POST) 
>   - Read : 조회 (GET) 
>   - Update : 수정 (PUT) 
>   - Delete : 삭제 (DELETE)
>   - HEAD : header 정보 조회 (HEAD) 

### 2.4 REST의 특징 

1. Server-Client (서버-클리언트 구조) 
   - 자원이 있는 쪽이 Server, 요청하는 쪽이 Client가 된다. 
   - REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트 등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 서로간 의존성이 줄어듬 
2. Stateless (무상태)
   - 작업을 위한 상태정보를 따로 저장하고 관리하지 않는다. 
      - 세션정보나 쿠키정보를 따로 저장하고 관리하지 않기때문에 API 서버는 들어오는 요청만 단순히 처리하면 된다. 
   - Server는 각각의 요청을 완전히 별개의 것으로 인식하고 처리한다. 
     - 이전 요청이 다음 요청의 처리에 연관되어서는 안된다. 
     - 이전 요청이 DB를 수정하여 DB에 의해 바뀌는 것은 허용 
3. Cacheable (캐시 처리 가능)
    - 웹 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용할 수 있다. 
      - HTTP가 가진 특징 중 하나인 캐싱 기능을 적용할 수 있다. 
    - 대량의 요청을 효율적으로 처리하기 위해 캐시가 요구됨 
    - HTTP 프로토콜 표준에서 사용하는 Last-Modified 태그나 E-Tag를 이용해 캐싱 구현 가능하다. 
4. Layered System (계층화) 
    - Client는 REST API Server만 호출한다. 
    - REST Server는 다중 계층으로 구성될 수 있다. 
    - PROXY, 게이트웨이 같은 네트워크 기반의 중간 매체를 사용할 수 있다.
5. Code-on-demand (optional) 
    - Server로부터 스크립트를 받아서 Client에서 실행한다.
    - 반드시 충족할 필요는 없다. 
6. Uniform Interface (인터페이스 일관성) 
    - URI로 지정한 Resource에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다. 
    - HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다. 

<br>

## 3. REST API 란? 

- API란 ?
    -  데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것

### 3.1 REST API 정의 
> REST 기반으로 서비스 API를 구현한 것 

### 3.2 REST API 특징 
> - REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지보수 및 운용을 편리하게 할 수 있다. 
> - REST는 HTTP 표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트, 서버를 구현할 수 있다. 

### 3.3 REST API 디자인 가이드 

1. URI는 정보의 자원을 표현해야 한다. (동사보다는 명사, 대문자보다는 소문자 사용) 
```
GET /member/delete/1        (x) // URI에 HTTP Method가 들어가면 안된다. 
```
위와 같은 방식은 REST를 제대로 적용하지 않은 URI이다. <br>
URI는 자원을 표현하는데 중점을 두어야 한다. delete와 같은 행위에 대한 표현이 들어가면 안된다. 

2. 자원에 대한 행위는 HTTP Method로 표현  (GET, PUT, POST, DELETE)

위의 잘못된 URI를 HTTP Method를 통해 수정하면 
```
DELETE /memebers/1 
```
으로 수정할 수 있다. 

- 회원 정보를 가져오는 URI 
```
GET /members/show/1     (x)
GET /members/1          (o)
```
- 회원을 추가할 때 
```
GET /members/insert/2   (x) // GET 메서드는 리소스 생성에 맞지 않는다. 
POST /members/2         (o)
```

### 3.4 REST API 설계 규칙 
1. 슬래시 구분자( / )는 계층 관계를 나타내는데 사용한다. 
2. URI 마지막 문자로 슬래시( / )를 포함하지 않는다. 
3. 하이픈( - ) 은 URI 가독성을 높이는데 사용 
4. 밑줄 ( _ ) 은 URI에 사용하지 않는다. 
5. URI 경로에는 소문자가 적합하다. 
6. 파일확장자는 URI에 포함하지 않는다. 