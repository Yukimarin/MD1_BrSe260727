// Function: doi so parameter, argument, tham so, return,HOF, Expression Function, map, filter
// 1. Khai niem:
// Function giam thieu cac tac vu lap di lap lai => code de doc, de bao tri (maintance)
// 2. Phan loai
// 2.1 Built-in Function
// prompt(), alert(), console.log(), Number(), push(), pop(), splice(), split(), join()
// 2.2 Define Function (Ham tu dinh nghia do moi nguoi tu xay)
// 2.2.1 Declaration Function (Hoisting)
// Giai doan dinh nghia ham
// function sayHi() {
//     console.log("Hi BrSE 260727");
// }
// Giai doan thuc thi ham
// sayHi()

// 2.2.2 Expression Function
// let sayHello = function () {
//     console.log("Hello BrSE 260727");
// }
// sayHello()
// // 2.2.3 Arrow Function (ES6)
// let sum = function (a,b) {
//     return a+b
// }
// console.log(sum(2,3));
// let sum = (a,b)=> {
//     //logic
//     return a+b
// }
// let sum = (a,b) => a+b
// console.log(sum(2,5));

// 3. Parameter(Tham so) va Argument (Doi so)
// Tham so: la bien tham gia trong qua trinh khai bao ham
// Doi so: la gia tri truyen trong qua trinh thuc thi ham
// let sum = function (a,b,c) {
//     console.log(a,b,c);
// }
// sum(1,2)

// BTTH
// let arr = [3, 5, 1, 8, -3, 7, 8];
// let arr1 = [0, 0, 0 ,0,0];
// let arr2 = [7,12,-100,-9,10,8];
// Tim min
// B1: Gan min = arr[0]
// B2: Su dung vong lap duyet qua tung phan tu
// B2.2: So sanh
// Neu min < arr[i] => min = arr[i]

// function findMinNumber() {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   console.log("gia tri nho nhat la", min);
// }
// findMinNumber()

// function findMinNumber1() {
//   let min = arr1[0];
//   for (let i = 0; i < arr1.length; i++) {
//     if (min > arr1[i]) {
//       min = arr1[i];
//     }
//   }
//   console.log("gia tri nho nhat la", min);
// }
// findMinNumber1()

// function findMinNumber2() {
//   let min = arr2[0];
//   for (let i = 0; i < arr2.length; i++) {
//     if (min > arr2[i]) {
//       min = arr2[i];
//     }
//   }
//   console.log("gia tri nho nhat la", min);
// }
// findMinNumber2()

// function findMin(arrNumber) {
//     let min = arrNumber[0]
//     for (let i = 0; i < arrNumber.length; i++) {
//     if (min > arrNumber[i]) {
//       min = arrNumber[i];
//     }
//   }
//   console.log("gia tri nho nhat la", min);
// }
// findMin(arr)
// findMin(arr1)
// findMin(arr2)

// Array Method
// ES6: map(),forEach(), filter(), findIndex(), include(), find()
let arr = [1,2,3,4]
// Output: [1,4,9,16]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]    
// }
// console.log(arr);
// Phan biet map() va forEach(): map tao ra mang moi tra ve 1 mang; forEach tra ve undefined
// let resultMap = arr.map(function(element){
//     return element * element
// })
// console.log("Ket qua khi su dung map()", resultMap);

// let resulForEach = arr.forEach(function(element){
//     return element * element
// })
// console.log("Ket qua khi su dung forEach()", resulForEach);
