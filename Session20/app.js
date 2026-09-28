// getItem, setItem, JSON.stringify, JSON.parse
// Local Storage <5MB, không bị mất dữ liêu khi reload trang
// Chỉ mất dữ liệu khi xóa, hoặc dùng lệnh clear, remove
// Local giúp lưu trư dũ liệu khi chuyển trang 

let fullName = "Nguyen Xuan Bach"
let age = 18 
// console.log(fullName, age);

// // Dưa du lieu nguyen thuy trong JS len local
// // Syntax: localStorage.setItem("key", value) 
// localStorage.setItem("fullName",fullName)
// localStorage.setItem("age", age)
// localStorage.setItem("ages", age)
// // Lấy dữ liệu
// // Syntax: localStorage.getItem("key")
// let resultFullName = localStorage.getItem("fullName")
// let resultAge= localStorage.getItem("age")
// console.log(typeof(resultFullName), typeof(resultAge));

// Dua du lieu phuc tap len local 
let students = [
  { id: 1, fullName: "Bach", age: 18, class: "1A" },
  { id: 2, fullName: "Loan", age: 20, class: "2B" },
  { id: 3, fullName: "Phuong", age: 81, class: "3C" },
];

// Dua len local- JSON.stringify - Convert Array -> string (JSON)
localStorage.setItem("students", JSON.stringify(students))

// Lay tu local ve- JSON.parse - Convert string -> Array (JSON)
let result = JSON.parse(localStorage.getItem("students"))
console.log(result);

