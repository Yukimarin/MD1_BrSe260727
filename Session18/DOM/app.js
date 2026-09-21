// DOM: Truy xuat các phan HTML sang JS (5 cách), 
// Lay content tu HTML, Thêm thuộc tính,Lay gia tri cac thuoc tinh
// Thay doi css bang JS, parentE, childrenE, Event (gắn sự kiện)

// DOM - Document Object Model (Mo hinh doi tuong tai lieu)
// 1. Lay cac phan tu HTML sang ben JS (5 cach) => Chọn lấy theo id 
// let divE = document.getElementById("container")
// console.log(divE);
// let divEByClass = document.getElementsByClassName("container")
// console.log(divEByClass); // => HTML Collection la kieu du lieu dạng mang nhung khong phai mang
// let divEByTagName = document.getElementsByTagName("div")
// console.log(divEByTagName);
// // querySelector, querySelectorAll => NodeList

// 2. Content (Nội dung bên trong the)
// let divE = document.getElementById("container")
// // console.log(divE.textContent);
// console.log(divE.innerHTML);
// console.log(divE.innerText);
// divE.innerHTML=`<ol id="list-item">
//         List Item
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ol>
//       <form action="">
//         <input id="name" type="text" />
//       </form>`


// 3. Attribute 
// let divE = document.getElementById("container")
// divE.style.backgroundColor= "red" // Viet theo kieu camelCase (CSS viet theo kebap-case)

// 4. Dom Traversal 
// let divE = document.getElementById("container")
// let ulE = document.getElementById("list-item")
// console.log("parentE", divE.parentElement.parentElement);
// console.log("childrenE",ulE.children[0].innerText);

//5. Create Element và appendChild => TodoList
// <tagname attribute =value> Content </tagname>
// let li = document.createElement('li')
// li.innerText = 'Item 4'
// li.style.color = "yellow"
// // Them id ="item-4", class = 'item4' cho the li: element.setAttribute(name, value)
// li.setAttribute("id", "item-4")
// li.setAttribute("class", "item-4")
// let ulE = document.getElementById("list-item")
// ulE.appendChild(li)

// 6. Event (Gan su kien trong Dom)- click submit
// // C1: Su dung onClick 
// let btnClick = document.getElementById('btn-click')
// btnClick.onclick = function () {
//     console.log("I love U chiu chiu");
// }

// // C2: addEventListener
// btnClick.addEventListener("click", function () {
//     console.log("Bum Bum Bum"); 
// })

// Luyen tap 1
// let pE = document.getElementById("text")
// let btnHide = document.getElementById("hide")
// let btnShow = document.getElementById("show")
// console.log(pE, btnHide, btnShow);

// btnHide.addEventListener("click", function () {
//     pE.style.display = "none"
// })

// btnShow.addEventListener("click", function () {
//     pE.style.display = "inline-block"
// })

// Luyen tap 2
let pE = document.getElementById("text")
let btnToggle = document.getElementById("toggle")

console.log(pE, btnToggle);
let flag = true // true thi la dang hien thi
console.log("Truoc khi click", flag);//true

btnToggle.addEventListener("click", function () {
    // Neu chu dang an thi hien thi len 
    // Neu chu dang hien thi thi an no di 
    if(flag){
        pE.style.display = "none"
        flag = false
    }else{
        pE.style.display = "block"
        flag = true
    }
    console.log("sau khi click", flag);
})

