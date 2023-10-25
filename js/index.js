// xác định một số bước cần làm
// mảng chứa id của tất cả input cần lấy dữ liệu
var arrIdInput = [
    'txtMaSV',
    'txtTenSV',
    'txtEmail',
    'txtPass',
    'txtNgaySinh',
    'khSV',
    'txtDiemToan',
    'txtDiemLy',
    'txtDiemHoa',
  ];
  var arrIdSpan = [
    'spanMaSV',
    'spanTenSV',
    'spanEmailSV',
    'spanMatKhau',
    'spanNgaySinh',
    'spanKhoaHoc',
    'spanToan',
    'spanLy',
    'spanHoa',
  ];
  // B3: Tạo một mảng lưu trữ thông tin người dùng
  var arrSinhVien = [];
  // B1: Tạo một hàm lấy dữ liệu từ người dùng
  function getValueUser() {
    // preventDefault giúp ngăn chặn sự kiện reload lại trang
    event.preventDefault();
  
    // var sinhVien = {}
    // sinhVien.maSv = txtMaSV
    // var txtMaSV = document.getElementById('txtMaSV').value;
    // var txtTenSV = document.getElementById('txtTenSV').value;
    // B2: Tạo một đối tượng dùng để lưu trữ thông tin sinh viên
    var sinhVien = new SinhVien();
    // chạy vòng lặp
    var isValid = true; // 0
    for (var i = 0; i < arrIdInput.length; i++) {
      var valueInput = document.getElementById(arrIdInput[i]).value;
  
      // gọi checkEmptyValue và thêm các dữ liệu vào để kiểm tra
      // sử dụng isValid để hứng các dữ liệu tới từ checkEmptyValue
  
      // trả về 0 hoặc 1  true && false ==> false
      // isValid = isValid && checkEmptyValue(valueInput, arrIdSpan[i]);
      // if (arrIdInput[i] == 'txtEmail') {
      //   // chỉ kiểm tra với input email
      //   checkEmailValue(valueInput, arrIdSpan[i]);
      // }
      // kiểm tra input mật khẩu về độ dài
      if (arrIdInput[i] == 'txtPass') {
        isValid = checkMinMaxValue(valueInput, arrIdSpan[i], 6, 10);
      }
  
      // sinhVien.txtMaSV
      sinhVien[arrIdInput[i]] = valueInput;
      // sinhVien[arrIdInput[0]]; // txtMaSV
  
      // Kiểm tra dữ liệu đầu vào từ người dùng
    }
    // i = 0,arrIdInput[i] = "txtMaSV", valueInput = document.getElementById("txtMaSV").value = SE140604, sinhVien[arrIdInput[i]] = valueInput
    // i = 1,arrIdInput[i] = "txtTenSV", valueInput = document.getElementById("txtTenSV").value = Lý Hải, sinhVien["txtTenSV"] = valueInput
    // isValid = 0 ==> false
    console.log(isValid);
    if (isValid) {
      console.log(sinhVien);
      // gọi tới mảng và dùng phương thức push để đưa dữ liệu sinh viên vào mảng lưu trữ
      arrSinhVien.push(sinhVien);
      saveLocalStore('arrSinhVien', arrSinhVien);
      console.log(arrSinhVien);
  
      // console.log(content);
      renderDisplay();
      // gọi tới form để xử lí reset value thông qua phương thức reset
      document.getElementById('formQLSV').reset();
    }
  }
  
  function renderDisplay(arr) {
    // kiểm tra nếu như khi gọi hàm mà không truyền tham số thì lúc đó sẽ lấy cái mảng arrSinhVien ra sử dụng
    console.log(arr);
    // arr = undefined // false
    if (!arr) {
      arr = arrSinhVien;
    }
  
    // biến content giúp lưu trữ các chuỗi html khi chạy vòng lặp
    var content = '';
    // dùng vòng lặp đưa tất cả dữ liệu sinh viên đang có trong mảng lên giao diện
    for (var z = 0; z < arr.length; z++) {
      // khởi tạo một đối tượng để giúp các đối tượng được lấy từ local lên sẽ có phương thức
      var sinhVien = new SinhVien(); // name : Long
      var valueSinhVien = arr[z]; // name:"Long"
      // sử dụng object.assign để copy dữ liệu từ một đối tượng cũ cho một đối tượng mới, nhận vào 2 giá trị, giá trị đầu là đối tượng nhận, giá trị thứ 2 là đối tượng cho
      Object.assign(sinhVien, valueSinhVien);
      console.log(sinhVien);
      content += `
      <tr>
        <td>${sinhVien.txtMaSV}</td>
        <td>${sinhVien.txtTenSV}</td>
        <td>${sinhVien.txtEmail}</td>
        <td>${sinhVien.txtNgaySinh}</td>
        <td>${sinhVien.khSV}</td>
        <td>${sinhVien.tinhDiemTrungBinh()}</td>
        <td>
          <button onclick="deleteUser('${
            sinhVien.txtMaSV
          }')" class="btn btn-danger">Delete</button>
          <button class="btn btn-dark">Edit</button>
        </td>
      </tr>
      `;
    }
    document.getElementById('tbodySinhVien').innerHTML = content;
  }
  
  // ---------------- Chức năng xoá sinh viên -------------------------
  function deleteUser(maSV) {
    console.log('Tôi là xoá');
    console.log(maSV);
    var index = -1;
    for (var i = 0; i < arrSinhVien.length; i++) {
      var sinhVien = arrSinhVien[i];
      if (sinhVien.txtMaSV == maSV) {
        console.log(i);
        index = i;
      }
    }
    if (index != -1) {
      arrSinhVien.splice(index, 1);
      saveLocalStore('arrSinhVien', arrSinhVien);
      // gọi lại hàm render giao diện để update dữ liệu mới lên giao diện
      renderDisplay();
      console.log(arrSinhVien);
    }
    // arrSinhVien.splice()
  }
  
  // ----------------- Chức năng lưu dữ liệu xuống localStorage
  function saveLocalStore(key, value) {
    // chuyển dữ liệu object, array về chuỗi JSON
    var valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  }
  
  // ----------------- Chức năng lấy dữ liệu từ localStorage
  function getLocalStore(key) {
    var arrLocal = JSON.parse(localStorage.getItem(key));
    console.log(arrLocal);
    // có trường hợp xảy ra // có dữ liệu --- dữ liệu null
    if (arrLocal) {
      arrSinhVien = arrLocal;
      console.log(arrSinhVien);
      renderDisplay();
    }
  }
  getLocalStore('arrSinhVien');
  
  
  