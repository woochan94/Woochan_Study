var data = [1,2,undefined,null,""]; 
// // for문 사용 
// for(var i = 0; i < data.length; i++) {
//     console.log(i);
// }

// // forEach 사용 
// data.forEach(function(value){
//     console.log("valueis", value);
// });

// // for in 사용 - 배열 순회에 부적합 
// Array.prototype.getIndex = function(){}; 
// for(let idx in data) {
//     console.log(data[idx]);
// }

// for...of 사용 
// 배열 순회
Array.prototype.getIndex = function() {};
for(let value of data) {
    console.log(value);
}

// 문자열 순회
let str = "hello world"; 
for(let value of str) {
    console.log(value);
}