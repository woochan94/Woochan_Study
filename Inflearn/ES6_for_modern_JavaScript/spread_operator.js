// let pre = ["apple", "orange", 100]; 
// let newData = [...pre]; // spread operator => ... 은 펼쳐준다라는 의미로 받아들이면 된다. 
// console.log(pre, newData);

// let pre = [100, 200, "hello", null]; 
// let newData = [0, 1, 2, 3, 4, ...pre]; // spread operator을 사용한 배열 합치기 
// console.log(newData);

// // spread operator로 함수
// let pre = [100, 200, 300];
// function sum(a, b, c) {
//     return a+b+c;
// }
// console.log("result => ", sum(...pre));