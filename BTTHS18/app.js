// Xây dựng một ứng dụng quản lý danh sách sinh viên với các chức năng:
// Thêm sinh viên mới: Nhập thông tin sinh viên (tên, tuổi, lớp)
// vào một biểu mẫu và thêm vào danh sách.
// Hiển thị danh sách sinh viên: Thông tin sinh viên sẽ được hiển thị dưới dạng bảng.
// Xóa sinh viên: Mỗi dòng trong bảng có một nút xóa để xóa sinh viên khỏi danh sách.
// Sửa thông tin sinh viên: Khi bấm nút "Sửa", cho phép chỉnh sửa thông tin sinh viên.
// Tìm kiếm sinh viên: Tìm kiếm sinh viên theo tên.

// CRUD => R - C - D - U -
//B1: Tạo dữ liệu mẫu
let students = [
  { id: 1, fullName: "Bach", age: 18, class: "1A" },
  { id: 2, fullName: "Loan", age: 20, class: "2B" },
  { id: 3, fullName: "Phuong", age: 81, class: "3C" },
];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// students.forEach((element)=>{
//     console.log(element);
// })

//B2: Hien thi du lieu ra man hinh
//B2.1 Xác định dữ liệu hiển thi trong câu trúc HTML
let tBody = document.getElementById("table-body");
// console.log(tBody);
function renderStudent() {
// console.log(students);
//   console.log(tBody.innerHTML);
  tBody.innerHTML=''
  students.forEach((element) => {
    // Moi lan lap sinh ra them 1 tr
    let tr = document.createElement("tr");
    // console.log(tr);
    // console.log(element);
    // tr duoc sinh ra mang cau truc HTML <td>Huấn</td>
    // <td>18</td>
    // <td>A1</td>
    // <td>
    //   <div class="action-buttons">
    //     <button class="btn-edit">Sửa</button>
    //     <button class="btn-delete">Xóa</button>
    //   </div>
    // </td>
    tr.innerHTML = ` <td>${element.fullName}</td>
            <td>${element.age}</td>
            <td>${element.class}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-edit">Sửa</button>
                <button class="btn-delete">Xóa</button>
              </div>
            </td>
    `;
    tBody.appendChild(tr);
  });
}

renderStudent();
// Moi khi nguoi dung thao tac tren web
// => ảnh hưởng/thay đổi trạng thái của trang
// => render lại trang (hiển thị lại dữ liệu của trang)

// B3: Thuc hien chuc nang C - Them moi sinh vien
// Lay 3 input sang JS do nguoi dung nhap du lieu
// Lay nut Them sinh vien sang JS
let btnAdd = document.getElementById("btn-add");
// console.log(btnAdd,inputAge,inputClass,inputName);

btnAdd.addEventListener("click", function (e) {
  e.preventDefault(); // Ngan chan su kien mac dinh cua the form
  // console.log("kiem tra");
  // Nguoi dung nhap du lieu => Lay duoc du lieu ma nguoi dung nhap
  let inputName = document.getElementById("name").value;
  let inputAge = document.getElementById("age").value;
  let inputClass = document.getElementById("class").value;
  //   console.log(inputAge, inputClass, inputName);
  // Tao doi tuong moi co cau truc { id: 3, fullName: "Phuong", age: 81, class: "3C"}
  let newStudent = {
    id: Date.now(),
    fullName: inputName,
    age: inputAge,
    class: inputClass,
  };
  //   console.log(newStudent)
  // Đưa đối tượng mới vào bên trong mảng students
  students.push(newStudent);
  // Hiển thị lại dữ liệu
  renderStudent();
  // Van de 1: Hiên thị cả dữ liệu cũ => van de nam o renderStudent()
  // Van de 2: Input khong tu dọng xoa du lieu vua nhap
  document.getElementById("name").value = ''
  document.getElementById("age").value = ''
  document.getElementById("class").value = ''
//Tai sao khi su dung ten bien = '' thi khong xoa duoc du lieu nguoi dung nhap????
});

// U D Tim kiem
// e.target 
// e.target.classList.contains("className")