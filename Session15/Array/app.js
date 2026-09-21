// ARRAY: 
// phan tu, phan tu dau tien la 0, chi so index, length (do dai)
// push(), splice(), pop(), shift(), unshift(), for in, for, indexOf(), include()
// CRUD 

// let user1= "Vy"
// let user2= "Bach"
// let user3= "Phuong"
// console.log(user1, user2, user3);

// Mảng: tap hop cac phan tu co tinh chat tuong dong nhau 
// let numbers = [1,2,3,4,5]
// let studentName = ["Bach","Vy","Phuong"]
// let mixed = ["1", 1, true, null, undefined, [1,2,3]] // khong sai nhung khong nen
// console.log(mixed);

let seasons = ["Mua xuan", "Mua he", "Mua thu", "Mua dong"]
                //0         //1         //2         //3
// Element(Phan tu)- Length (Do dai mang= so luong phan tu) - Index (Chi muc bat tu 0 -> length -1)

// CRUD (Create (Khoi tao- Them moi)- Read (Hien thi) - Update (Chinh sua/cap nhat)- Delete(Xoa))
// Read - Hien thi 
console.log("Mang",seasons);
// Read one 
// console.log("Hien thi phan tu  =>", seasons[4]);
// console.log("Hien thi phan tu  =>", seasons[-1]);

// console.log("Hien thi phan tu thu 1 =>", seasons[0]);
// console.log("Hien thi phan tu thu 2 =>", seasons[1]);
// console.log("Hien thi phan tu thu 3 =>", seasons[2]);
// console.log("Hien thi phan tu thu 4 =>", seasons[3]);
// // Read all 
// for (let index = 0; index < seasons.length; index++) {
//     console.log(`Lan lap thu ${index+1}`, seasons[index]);
// }

// for (const key in seasons) {
//    console.log("Vong lap for in", seasons[key]);
// }

// for (const element of seasons) {
//     console.log("Vong lap for of", element);
// }
// Create (Khoi tao/ Them moi)
seasons.push(1)
console.log("Su dung phuong thuc push() them vao cuoi mang", seasons);
// seasons.unshift(2)
// console.log("Su dung phuong thuc unshift() them vao dau mang", seasons);
// seasons[seasons.length] = 10
// console.log("Su dung phuong thuc unshift() them vao dau mang", seasons);
seasons.splice(2, 0,"BrSe")
console.log(seasons);


// Delete 
// seasons.pop() //Xoa o cuoi
// seasons.shift()// Xoa o dau 
seasons.splice(4,2)
console.log(seasons);

// Update (Chinh sua/Cap nhat)
// seasons[4] = "Mua mua"
// console.log(seasons);
seasons.splice(2,1,"Mua dong")
console.log(seasons);

// Syntax: array.splice(index, count, item1, ....., itemX)

// BTTH6: 
// Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử, 
// thực hiện nhập vào một số nguyên để kiểm tra (k), 
// thực hiện đếm số lần xuất hiện của k trong mảng. và hiển thị ra màn hình
// Input: Mang rong length 10-20 
// Process: 
// B1: Khai bao mang rong 
let numbers = []
// B2: Them 10-20 phan tu vao trong mang 
// B2.1 Xac dinh do dai mang 
let numbersLength = Math.floor(Math.random()*11 )+ 10//0-9 +10
// console.log(numbersLength);
//Math.floor() - lam tron xuong 4.5/4,1->4
//Math.ceil() - lam tron len 4.5/4.2-> 5
// B2.2: Them phan tu ngau nhien vao trong mang 
for (let i = 0; i < numbersLength; i++) {
    let randomNumber = Math.floor(Math.random()*5)
    numbers.push(randomNumber)
}
console.log(numbers);

// // B3: Cho nguoi dung nhap vao so nguyen bat ky 
let inputValue = Number(prompt("Nhap vao so nguyen bat ky"))
// B4: Khai bao bien dem = 0 
let count = 0
// B5: Duyet qua tung phan tu cua mang, so sanh voi gia tri nguoi dung nhap 
for (let i = 0; i < numbers.length; i++) {
   // B5.1: Neu gia tri phan tu = so nguoi dung nhap thi tang bien len 1 
   if(numbers[i] === inputValue){
    count = count + 1
   }
}
//B6: Hien thi ket qua 
console.log(`So lan xuat hien cua so ${inputValue} la:${count} lan`);
// Output: Hien thi so lan xuat hien cua k trong mang 

// ES6: map(),forEach(), filter(), findIndex(), include(), find()