function checkEmptyValue(value, idSpan) {
    // Kiểm tra dữ liệu từ người dùng
    if (value == '') {
      document.getElementById(idSpan).innerHTML = 'Vui lòng không bỏ trống';
      return false;
    } else {
      document.getElementById(idSpan).innerHTML = '';
      return true;
    }
  }
  
  function checkEmailValue(value, idSpan) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thoả chuỗi regex hay không
    regexEmail.test(value); // true , dữ liệu không thoả ==> false
    if (regexEmail.test(value)) {
      // dữ liệu thoả regex
      document.getElementById(idSpan).innerHTML = '';
      return true;
    } else {
      document.getElementById(idSpan).innerHTML =
        'Định dạng email không chính xác';
      return false;
    }
  }
  
  // kiểm tra độ dài ký tự
  function checkMinMaxValue(value, idSpan, min, max) {
    // kiểm tra độ dài ký tự
    if (value.length >= min && value.length <= max) {
      // điều kiện đúng dữ liệu thoả yêu cầu
      document.getElementById(idSpan).innerHTML = '';
      return true;
    } else {
      // điều kiện sai
      document.getElementById(
        idSpan
      ).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
      return false;
    }
  }
  