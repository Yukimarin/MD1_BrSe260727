// Xây dựng một ứng dụng quản lý danh sách sinh viên với các chức năng:
// Thêm sinh viên mới: Nhập thông tin sinh viên (tên, tuổi, lớp)
// vào một biểu mẫu và thêm vào danh sách.
// Hiển thị danh sách sinh viên: Thông tin sinh viên sẽ được hiển thị dưới dạng bảng.
// Xóa sinh viên: Mỗi dòng trong bảng có một nút xóa để xóa sinh viên khỏi danh sách.
// Sửa thông tin sinh viên: Khi bấm nút "Sửa", cho phép chỉnh sửa thông tin sinh viên.
// Tìm kiếm sinh viên: Tìm kiếm sinh viên theo tên.

// CRUD => R - C - D - U -
//B1: Tạo dữ liệu mẫu => Chuyen du lieu mau len Local 
let students = JSON.parse(localStorage.getItem("students")) || []
// console.log(students);

// Dua len local tung buoc nhu sau 
// B1: Tao du lieu mau roi dua len local 
localStorage.setItem("students", JSON.stringify(students))
// B2: Xoa du lieu mau di va lay lại tu local 



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
                <button id=${element.id} class="btn-edit">Sửa</button>
                <button id=${element.id} class="btn-delete">Xóa</button>
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
  // Dua du lieu moi len local 
  localStorage.setItem("students", JSON.stringify(students))
  // Hiển thị lại dữ liệu
  renderStudent();
  // Van de 1: Hiên thị cả dữ liệu cũ => van de nam o renderStudent()
  // Van de 2: Input khong tu dọng xoa du lieu vua nhap
  document.getElementById("name").value = ''
  document.getElementById("age").value = ''
  document.getElementById("class").value = ''
  //Tai sao khi su dung ten bien = '' thi khong xoa duoc du lieu nguoi dung nhap????
  // inputName khi nguoi dung nhap thì JS no se hieu inputName là biến được gán giá trị
  // Khi cho inputName = '' thi la gan gia tri moi, không phai thay đổi giá tri của the input 
});

// U D Tim kiem
// e.target 
// e.target.classList.contains("className")
tBody.addEventListener("click", function (e) {
  // console.log(typeof(e.target.id)); //string
  // Khi an xoa dong nao thi du lieu dong do mat 
  // Xoa du lieu(phan tu) trong mang students
  // splice(index,countDelete=1)
  // Tim index phan tu muon xoa
  // Lay ra duoc id cua phan tu trong mang students => index 
  // Delete
  if(e.target.classList.contains("btn-delete")){
    let deleteID = Number(e.target.id)
    // console.log(deleteID);
    // C1: Su dung vong lap for => index 
    // let flag= -1
    // for (let i = 0; i < students.length; i++) {
    //   if(students[i].id === deleteID){
    //     flag=i;
    //     break;
    //   }
    // }
    // students.splice(flag,1)
    // console.log("Sau khi xoa du lieu",students);
    // renderStudent()
    // C2: Su dung cac ham co san => index (findIndex())
    let deleteIndex = students.findIndex((student)=> student.id === deleteID)
    // console.log(deleteIndex);
    students.splice(deleteIndex,1)
    // Dua du lieu moi len local 
  localStorage.setItem("students", JSON.stringify(students))
    // console.log("Sau khi xoa du lieu",students);
    renderStudent()
  }

  // Update
  // Khi an nut Sua => Lay thong tin cu => input => Cho nguoi dung nhap du lieu moi => luu du lieu 
  // Khi an nut Sua => Lay dung thong tin nguoi dung can => ID => Thong tin nguoi dung 
  if(e.target.classList.contains("btn-edit")){
    let editID = Number(e.target.id)
    console.log(editID);
    // C1: Tim index 
    // let flag= -1
    // for (let i = 0; i < students.length; i++) {
    //   if(students[i].id === editID){
    //     flag=i;
    //     break;
    //   }
    // }
    // document.getElementById("name").value = students[flag].fullName
    // document.getElementById("age").value = students[flag].age
    // document.getElementById("class").value = students[flag].class
    // C2: id => du lieu cua nguoi dung (find())
    let findStudent = students.find((student)=> student.id === editID)
    // console.log(findStudent);
    // Dua du lieu thong tin sinh vien can sua len input 
    document.getElementById("name").value = findStudent.fullName
    document.getElementById("age").value = findStudent.age
    document.getElementById("class").value = findStudent.class
    // Thay doi nut Them Sinh vien thanh nut Cap nhat 
    // <button id="btn-add" class="btn-add">Thêm sinh viên</button>
    // <button id="btn-update" class="btn-update">Câp Nhật</button>
    document.getElementById("btn-add").style.display ="none"
    document.getElementById("btn-update").style.display ="inline-block"
    // Gan su kien click cho nut Cạp nhat
    let btnUpdate = document.getElementById("btn-update")
    btnUpdate.addEventListener("click", function (e) {
      e.preventDefault()
    // Lay thong tin moi ma nguoi dung nhap vao 
     let newName = document.getElementById("name").value;
     let newAge = document.getElementById("age").value;
     let newClass = document.getElementById("class").value;
     console.log(newName, newAge, newClass);
    //  Update lại du lieu moi vao sinh vien (findStudent)
      findStudent.fullName = newName
      findStudent.age = newAge
      findStudent.class = newClass
      console.log("Sau khi thay doi du lieu", students)
      // Xoa du lieu nguoi dung vua nhap
      document.getElementById("name").value = ''
      document.getElementById("age").value = ''
      document.getElementById("class").value = ''
      // Doi lai nut cap nhat thanh nut them
      document.getElementById("btn-add").style.display ="inline-block"
      document.getElementById("btn-update").style.display ="none"
      // Dua du lieu moi len local 
  localStorage.setItem("students", JSON.stringify(students))
      // Render lại du lieu 
      renderStudent()
    })
  }
})