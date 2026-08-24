// Bien, hang so, vong lap, chuoi ky tu, cau dieu kien re nhanh, toan tu so sanh
// Bo ba dieu kien, while, for loop, cac kieu du lieu, cac toan tu , mo hinh IPO

// 1. Biến (Variable)
// Syntax (Cú pháp): Từ khóa khai báo biến + Tên biến = giá trị
// let firstNumber = 1
// 1.1 Phan biet var, let, const
// var co the khai bao lai, còn let và const thi không thể khai báo lại
// var va let co the gan lai gia tri, const khong the gan lai gia tri
// var a = 5
// console.log(a);
// a = 10
// console.log(a);
// let b = 2
// console.log(b);
// b = 5
// console.log(b);
// const c = 3
// console.log(c);
// c = 5
// console.log(c);

// Hoisting: đưa mọi khai báo lên trên cùng (var)
// debugger
// var a
// console.log(a);
// var a = 10
// console.log(a);

// console.log(b);
// let b = 5
// 1.2 Teen bien viet theo quy tac camelCase (firstNumber,secondNumber,...)
// snakeCase (first_number)
// kebapCase (first-number)

// 2. Kieu du lieu
// Kieu du lieu nguyen thuy (7): string,number,boolean,undefined,null,symbol, bigInt(76372632n)
// let fullName = "Nguyen Van A"
// let age = 18
// let felmale = true
// let address
// let job = null
// Kieu du lieu tham chieu: Array, Object

//3. Nhap va xuat du lieu (Input va Output)
// Output: console.log(variable_name); alert(variable_name)
// Input: prompt("Nhap 1 so nguyen bat ky")
// Viet chuong trinh cho nguoi dung nhap ten va nhap tuoi. Sau do hien thi ket qua
// let fullName = prompt("Moi ban nhap ten:");
// let age = prompt("Moi ban nhap tuoi")
// console.log(`Ong/ba ${fullName}. Nam nay ${age} tuoi`); // Template String ES6
// console.log("Ong/ba "+ fullName + ".\n Nam nay" + age + "tuoi");

// let firstNumber = Number(prompt("Moi ban nhap so thu nhat")) // string => number
// console.log(typeof(firstNumber));
// // Ep kieu: +; Number(prompt); parseInt(prompt), parseFloat(prompt)
// let secondNumber = + prompt("Moi ban nhap so thu hai") //string => number
// let sum = firstNumber + secondNumber
// console.log("Tong hai so la:", sum);

// VD:
// let a = 5 //number
// let b = "0" //string
// // string + number = string
// // number + string = string
// console.log(a+b); // 53  - 50
// console.log(a-b); // loi 2 5-3 53 - 5
// console.log(a*b); // loi 15 - 0
// console.log(a/b); // loi 5/3 - Infinity

//4. Toan tu  boolean (True/False)
// Toan tu so sanh
// let a = 5;
// let b = "5";
// console.log(a>b);//False
// console.log(a<b);//False
// console.log(a==b);//True => so sanh tuong doi: so sanh gia tri
// console.log(a===b);//False => so sanh tuyet doi: so sanh gia tri va kieu du lieu
// // Toan tu logic
// console.log(2<3 && 3>5);// True && False =>False
// console.log(2<3 || 3>5);// True || False => True

//5. Control Statement (Cac cau lenh dieu khien)
//5.1Cau lenh dieu kien re nhanh
// Menh de dieu kien If...else
// Syntax:
// if(condition){
//     //expression
// }else{
//     //expression
// }

// debugger;
// let age = 11;
// Validate: kiem tra du lieu nguoi dung nhap

// if (age<20){
//     console.log("Ban van chua du tuoi uong ruou");
// }
// if (age>=20){
//     console.log("Ban da du tuoi uong ruou");
// }
// if(age<0){
//     console.log("Tuoi ban nhap khong hop le");
// }else if(age<20){
//     console.log("Ban van chua du tuoi uong ruou");
// }else{
//     console.log("Ban da du tuoi uong ruou");
// }
// console.log("Hello");

// VD: Ternary Operator (Toan tu 3 ngoi)
// Syntax: Dieu kien ? logic if : logic else
// let age = 18;
// if(age>18){
//     console.log("Ban du tuoi lai xe may");
// }else{
//     console.log("Ban khong du tuoi lai xe may");
// }
// age>=18 ? console.log("Ban du tuoi lai xe may") : console.log("Ban khong du tuoi lai xe may")
// Nested If (If long nhau)???

// 5.2 Menh de switch.case
// Dieu kien logic phuc tap se dung if..else. Neu gia tri so sanh co dinh va cu the thi se dung switch..case
// Syntax
// debugger
// let month = 1;
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Day la mua xuan");
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log("Day la mua he");
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log("Day la mua thu");
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log("Day la mua dong");
//         break;
//     default:
//         break;
// }
//break: thoat khoi menh de dieu kien
// Lam menu tu 1-4 
// C1: Dung if else
// let choice = prompt("Chon gia tri tu 1-4");
// if (choice == 1){
//     console.log("Lua chon 1");
// }else if(choice == 2){
//     console.log("Lua chon 2");
// }else if (choice == 3){
//     console.log("Lua chon 3");
// }else if (choice ==4){
//     console.log("Lua chon 4");
// }else{
//     console.log("Lua chon khong hop le");
// }

// C2: Chuyen thanh switch--case
// let choice = prompt("Chon gia tri tu 1-4");
// switch (choice) {
//     case 1:
//         console.log("Lua chon 1");
//         break;
//     case 2:
//         console.log("Lua chon 2");
//         break;
//     case 3:
//         console.log("Lua chon 3");
//         break;
//     case 4:
//         console.log("Lua chon 4");
//         break;
//     default:
//         console.log("Lua chon khong hop le");
//         break;
// }

//Vong lap (For...loop)
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// Syntax
// for (Khai bao bien dem; dieu kien ket thuc vong lap; tang bien dem) {
//    //expression
// }
// debugger
for (let i = 1; i <= 10; i=i+1) {
    if(i%2!==0){
        console.log(i);
    }
}



