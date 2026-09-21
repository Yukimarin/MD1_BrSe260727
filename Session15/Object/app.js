//Object(Doi tuong)(key:value)
// let student= {
//     name: "Nguyen Thi Phuong",
//     age: 18,
//     phone: "0904662012",
// }
// console.log(student);

// //CRUD
// // Read one Object.key = value
// console.log(student.name);
// console.log(student.age);
// console.log(student.phone);
// // Read All
// for (const key in student) {
//     console.log(student[key]);
// }
// // Create
// student.email = "phuong@gmail.com"
// console.log(student.email);
// console.log(student);

// // Delete: delete Object.key
// delete student.phone
// console.log(student);

// // Update
// student.age = 81
// console.log(student);

//Mang doi tuong
// BTTH6

// Viết một chương trình quản lý danh sách sách với các chức năng sau:
// Xay dung menu => if else / switch case
// Su dung vong lap while
// Thêm sách mới(C)
// Nhập ID, Tên sách, Tác giả, Năm xuất bản.
// Thêm sách vào danh sách.
// Hiển thị danh sách sách (R)
// Duyệt qua danh sách và in thông tin của từng sách ra màn hình.
// Tìm kiếm sách theo tên (F)
// Nhập từ khóa tìm kiếm.
// Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
// Nếu không tìm thấy, thông báo cho người dùng.
// Xóa sách theo ID (D)
// Nhập ID của sách cần xóa.
// Nếu sách tồn tại, xóa khỏi danh sách.
// Nếu sách không tồn tại, thông báo lỗi.
// Thoát chương trình (E)
// Dừng chương trình khi người dùng chọn thoát.

// B1: Khai bao mang doi tuong
let books = [
  { id: 1, name: "Doraemon", year: 1991, author: "Nguyen Xuan Bach" },
  { id: 2, name: "Conan", year: 2000, author: "Nguyen Thi Phuong" },
  { id: 3, name: "Kindaichi", year: 2020, author: "Nguyen Thanh Loan" },
];

let check = true;
// Ham in du lieu
function renderData() {
  for (let i = 0; i < books.length; i++) {
        console.log(
          `${i + 1}. ${books[i].name} -${books[i].author}-${books[i].year} `,
        );
  }
}
renderData()
while (check) {
  // B2: Xay dung menu de khach hang lua chon
  console.log(`CHAO MUNG BAN DEN VOI HE THONG QUAN LY SACH`);
  console.log(`1. Them moi sach`);
  console.log(`2. Hien thi sach`);
  console.log(`3. Tim kiem sach`);
  console.log(`4. Xoa sach`);
  console.log(`5. Thoát chương trình`);
  // B3: Cho nguoi dung nhap vao lua chon cac chuc nang
  let choice = Number(prompt("Nhap vao chuc nang ban muon su dung"));
  // B4: Su dung menh de dieu kien => So sanh voi lua chon nguoi dung
  switch (choice) {
    case 1: // B4.1: Them moi sach
      // Nhập ID, Tên sách, Tác giả, Năm xuất bản.
      // Thêm sách vào danh sách.
      //B1: ID sinh tu dong (duy nhat -unique),Cho nguoi dung nhap ten sach, ten tac gia, nam xuat ban
      // let newId= Math.floor(Math.random()*1000000)
      let newId = Date.now();
      let newName = prompt("Moi ban nhap ten sach");
      let newYear = Number(prompt("Moi ban nhap nam xuat ban"));
      let newAuthor = prompt("Moi ban nhap ten tac gia");
      //B2: Validate xem sach da ton tai hay chua?
      //B3: Tao doi tuong moi luu cac gia tri ma nguoi dung nhap voi key tuong ung
      let newBook = {
        id: newId,
        name: newName,
        year: newYear,
        author: newAuthor,
      };
      // console.log("Du lieu sach moi", newBook);
      //B4: Dua no mang chua sach
      books.push(newBook);
      // console.log(books);
      //B5: Hien thi lai toan bo sach dang co sau khi them moi
      console.log("Hien thi sach moi sau khi them");
      renderData()
      // for (let i = 0; i < books.length; i++) {
      //   console.log(
      //     `${i + 1}. ${books[i].name} -${books[i].author}-${books[i].year} `,
      //   );
      // }
      break;
    case 2: // B4.2: Hien thi sach
      console.log("Hien thi sach");
      renderData()
      // for (let i = 0; i < books.length; i++) {
      //   console.log(
      //     `${i + 1}. ${books[i].name} -${books[i].author}-${books[i].year} `,
      //   );
      // }
      break;
    case 3:
      // B4.3: Tim kiem sach
      // Nhập từ khóa tìm kiếm.
      // Tìm và hiển thị sách có tên chứa từ khóa đó (không phân biệt hoa thường).
      // Nếu không tìm thấy, thông báo cho người dùng.
      // B1: Tao bien luu gia tri nguoi dung nhap vao
      let inputSearch = prompt("Nhap ten sach muon tim kiem").toLowerCase();
      // B2: Su dung vong lap de duyet qua tung phan tu cua mang
      let found = false;
      for (let i = 0; i < books.length; i++) {
        // B2.1: So sanh ten sach voi gia tri nguoi dung nhap (su dung include)
        // Neu khong tim thay thi hien thi cho nguoi dung
        // Neu tim thay thi hien thi thong tin sach
        // console.log(books[i].name.toLowerCase().includes(inputSearch));
        if (books[i].name.toLowerCase().includes(inputSearch)) {
          console.log(
            `${i + 1}. ${books[i].name} -${books[i].author}-${books[i].year} `,
          );
          found = true;
        }
      }
      if (found == false) {
        console.log("Khong tim thay sach");
      }
      break;
    case 4: // B4.4: Xoa sach
      // Nhập ID của sách cần xóa.
      // Nếu sách tồn tại, xóa khỏi danh sách.
      // Nếu sách không tồn tại, thông báo lỗi.
      // B1: Cho nguoi dung nhap so thu tu muon xoa
      let deleteID = Number(prompt("Nhap vao ID muon xoa"));
      // B2: Su dung if else de so sanh
      let flag = -1;
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === deleteID) {
          flag = i;
        }
      }
      console.log("Sach can xoa o vi tri", flag);
      if (flag === -1) {
        // Nếu sách không tồn tại, thông báo lỗi.
        console.log("Sach ban muon xoa khong ton tai");
      } else {
        // Nếu sách tồn tại, xóa khỏi danh sách.
        books.splice(flag, 1);
      }
      console.log("Hien thi cac sach sau khi xoa");
      renderData()
      // for (let i = 0; i < books.length; i++) {
      //   console.log(
      //     `${i + 1}. ${books[i].name} -${books[i].author}-${books[i].year} `,
      //   );
      // }
      break;
    case 5: // B4.5: Thoat chuong trinh
      console.log("Thoat chuong trinh");
      check = false;
      break;
    default:
      console.log("Lua chọn sai. Yeu cau chon lai");
      break;
  }
}
// B5: Dua toan bo chuong trinh vao trong vong lap while
