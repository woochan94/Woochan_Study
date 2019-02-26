# Async/Await

Callback hell 에서 벗어나기 위해 프로미스 패턴을 쓰는 것처럼, 프로미스 패턴의 단점을 극복하기 위해 async/await를 쓴다. <br>
프로미스 패턴은 Callback hell 보다는 낫지만 여전히 코드가 너무 장황하다는 문제점이 있어 async/await를 사용한다. 

<br>

## 사용방법 
function 키워드 앞에 <b>async</b>만 붙여주만 되고 비동기 처리되는 부분 앞에 <b>await</b>만 붙여주면 된다. 다만, await 뒷부분이 반드시 promise를 반환해 주어야 한다. 

```
async function goWork(time1, timeStartWork) {
    const time2 = await wakeUp(time1)
    const time3 = await takeSubway(time2)
    const time4 = await takeOffSubway(time3)
    const arrivalTime = await arriveWork(time4)

    if(arrivalTime > timeStartWork) {
        fire()
    }
}
```

await는 반드시 async 함수 바로 안에서만 쓰여아 한다. async 함수 안에 또 다른 일반 함수가 있고, 그 안에 await가 있으면 안됨 
```
async function a() {
  (function b() {
    await Promise.resolve(true); // async 함수 바로 안이 아니라서 에러. 아래와 같이 수정
  })();
}
```
```
function a() {
  (async function b() {
    await Promise.resolve(true); // 이제 정상 작동.
  })();
}
```