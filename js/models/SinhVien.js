// mã sinh viên, tên sinh viên, email, password,ngày sinh, khoá học, điểm toán, điểm lý, điểm hoá
function SinhVien() {
    this.txtMaSV = '';
    this.txtTenSV = '';
    this.txtEmail = '';
    this.txtPass = '';
    this.txtNgaySinh = '';
    this.khSV = '';
    this.txtDiemToan = '';
    this.txtDiemLy = '';
    this.txtDiemHoa = '';
  
    // tạo thêm một phương thức giúp xử lí tính điểm trung bình
    this.tinhDiemTrungBinh = function () {
      var diemTrungBinh =
        (this.txtDiemHoa * 1 + this.txtDiemToan * 1 + this.txtDiemLy * 1) / 3;
      return diemTrungBinh;
    };
  }
  