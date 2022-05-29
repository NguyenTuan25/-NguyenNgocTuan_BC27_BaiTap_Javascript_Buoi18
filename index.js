var soNguyen = [];
function addSo() {
  var add = +document.getElementById("addSo").value;
  var isSoNguyen = document.getElementById("soNguyen");
  soNguyen.push(add);
  isSoNguyen.style.display = "block";
  isSoNguyen.innerHTML = "Các số trong mảng là : " + soNguyen;
  console.log(soNguyen);
}
//---------------Bài tập tính tổng số dương---------------//
function baitap1() {
  var sum = 0;
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] >= 0) {
      sum += soNguyen[i];
    }
  }
  console.log(sum);
  var tongDuong = document.getElementById("ketQuaTongSoDuong");
  tongDuong.style.display = "block";
  tongDuong.innerHTML = `Tổng số dương trong mảng là: ${sum} `;
}
//----------Bài tập tìm số dương trong mảng----------`------//
function baitap2() {
  var count = 0;
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] > 0) {
      count++;
    }
  }
  var soDuong = document.getElementById("soDuong");
  soDuong.style.display = "block";
  soDuong.innerHTML = "Số dương trong mảng là :" + count;
}
//-----------Bài tập tìm số nhỏ nhất------------//
function baitap3() {
  var min = soNguyen[0];
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] < min) {
      min = soNguyen[i];
    }
  }
  var soNhoNhat = document.getElementById("soNhoNhat");
  soNhoNhat.style.display = "block";
  soNhoNhat.innerHTML = "Số nhỏ nhất trong mảng: " + min;
  console.log(min);
}
// ----------Bài Tập tìm số lớn nhất--------------//
function baitap4() {
  var duongNhoNhat = document.getElementById("duongNhoNhat");
  for (i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] < 0) {
      duongNhoNhat.style.display = "block";
      duongNhoNhat.innerHTML = "Không tìm thấy số dương";
    } else {
      duongNhoNhat.style.display = "block";
      duongNhoNhat.innerHTML =
        "Số Dương nhỏ nhất trong mảng: " + timSoDuongNhoNhat();
      break;
    }
  }
}
function timSoDuongNhoNhat() {
  var soDuongNhoNhat;
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] > 0) {
      soDuongNhoNhat = soNguyen[i];
      break;
    }
  }
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] > 0 && soNguyen[i] < soDuongNhoNhat) {
      soDuongNhoNhat = soNguyen[i];
    }
  }
  return soDuongNhoNhat;
}
//------------Bài tập tìm số chẵn cuối cùng trong mảng-----------//
function baitap5() {
  var ketQua = timChanCuoiCung();
  document.getElementById("chanCC").style.display = "block";
  document.getElementById("chanCC").innerHTML = ketQua;
}
function timChanCuoiCung() {
  for (var i = soNguyen.length - 1; i >= 0; i--) {
    if (soNguyen[i] % 2 === 0) {
      return soNguyen[i];
    }
  }
  return -1;
}
//------Bài tập đổi chổ vị trí trong mảng----------//
function baitap6() {
  var soViTri1 = document.getElementById("vitri1").value;
  var soVitri2 = document.getElementById("vitri2").value;
  var ketQuaDoiCho = document.getElementById("ketQuaDoiCho");
  ketQuaDoiCho.style.display = "block";
  if (soViTri1 == "" || soVitri2 == "") {
    ketQuaDoiCho.innerHTML = "Vui lòng nhập vị trí muốn đổi";
  } else {
    (x = soViTri1), (y = soVitri2);
    soNguyen[soViTri1] = soNguyen.splice(soVitri2, 1, soNguyen[soViTri1])[0];

    ketQuaDoiCho.innerHTML = "Mảng sau khi đổi: " + soNguyen;
  }
}
//----------Bài tập sắp xếp theo thứ tự tăng dần---------------///
function compare(a, b) {
  return a - b;
}
function baitap7() {
  soNguyen.sort(compare);
  console.log(soNguyen);
  var thuTuTangDan = document.getElementById("soTangDan");
  thuTuTangDan.style.display = "block";
  thuTuTangDan.innerHTML = "Thự tự tăng dần của mảng: " + soNguyen;
}
//----------Bài tập tìm số nguyên tố đầu tiên trong mảng-------------//
function baitap8() {
  var soNguyenToDau = document.getElementById("soNguyenTo");
  soNguyenToDau.style.display = "block";
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] < 2) {
      soNguyenToDau.innerHTML = "-1";
      console.log(-1);
    } else if (soNguyen[i] === 2) {
      console.log(soNguyen[i] + "Là số nguyên tố");
      soNguyenToDau.innerHTML = "Số nguyên tố đầu tiên:" + soNguyen[i];
      break;
    } else if (soNguyen[i] % 2 === 0) {
      console.log(-1);
      soNguyenToDau.innerHTML = "-1";
    } else if (soNguyen[i] === 3) {
      console.log(soNguyen[i] + "Là số nguyên tố");
      soNguyenToDau.innerHTML = "Số nguyên tố đầu tiên:" + soNguyen[i];
      break;
    } else if (soNguyen[i] % 3 === 0) {
      console.log(-1);
      soNguyenToDau.innerHTML = "-1";
    } else if (soNguyen[i] % 5 === 0) {
      console.log(-1);
      soNguyenToDau.innerHTML = "-1";
    } else {
      console.log(soNguyen[i] + "Là số nguyên tố");
      soNguyenToDau.innerHTML = "Số nguyên tố đầu tiên:" + soNguyen[i];
      break;
    }
  }
}
// soNguyenToDau.innerHTML = nguyenToDauTien;
// for (var i = 0; i < soNguyen.length; i++) {
//   if (soNguyen[i] < 2) {
//     console.log(soNguyen[i]);
//   } else if (soNguyen[i] >= 2) {
//     console.log(tinhSoNguyenToDauTien());
//   }
// }

// function tinhSoNguyenToDauTien() {
//   // var n = soNguyen[0];
//   // if (n < 2) {
//   //   return -1;
//   // } else if (n > 2) {
//   //   if (n % 2 === 0) {
//   //     return -1;
//   //   }
//   //   for (var i = 3; i < n; i += 2) {
//   //     if (n % i === 0) {
//   //       return -1;
//   //     }
//   //   }
//   //   for (var i = 2; i < n; i++) {
//   //     return soNguyen[i];
//   //   }
//   // }
//   for (var i = 0; i < soNguyen.length; i++) {
//     if (soNguyen[i] >= 2) {
//       return soNguyen[i];
//     }
//     // if (soNguyen[i] < 2) {
//     //   return -1;
//     // }
//   }
// }
//--------Bài tập đếm số nguyên--------//

//-------Bài tập so sánh số dương và âm-------//

function baitap10() {
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < soNguyen.length; i++) {
    if (soNguyen[i] > 0) {
      count1++;
    }
  }
  for (var j = 0; j < soNguyen.length; j++) {
    if (soNguyen[j] < 0) {
      count2++;
      console.log(count2);
    }
  }
  if (soNguyen == "") {
    document.getElementById("sosanh").style.display = "block";
    document.getElementById("sosanh").innerHTML = "Vui lòng nhập số liệu";
  } else if (count1 > count2) {
    document.getElementById("sosanh").style.display = "block";
    document.getElementById("sosanh").innerHTML = "Số dương" + ">" + "Số âm";
  } else if (count1 < count2) {
    document.getElementById("sosanh").style.display = "block";
    document.getElementById("sosanh").innerHTML = "Số âm" + ">" + "Số dương";
  } else {
    document.getElementById("sosanh").style.display = "block";
    document.getElementById("sosanh").innerHTML = "Số âm" + "=" + "Số dương";
  }
}
var b = [];
function baitap9() {
  var themso = document.getElementById("themso").value;
  b.push(themso);

  document.getElementById("ketQuaThemSo").style.display = "Block";
  document.getElementById("ketQuaThemSo").innerHTML = b;
}
function checkSoNguyen(n) {
  var flag = 1;
  if (Math.ceil(n) != Math.floor(n)) flag = 0;
  return flag;
}
function demSoNguyen() {
  var i = 0;
  check = 0;
  count3 = 0;
  for (vari = 0; i < b.length; i++) {
    check = checkSoNguyen(b[i]);
    if (check == 1) {
      count3++;
      console.log(count3);
    }
  }
  document.getElementById("demsonguyen").style.display = "block";
  document.getElementById("demsonguyen").innerHTML =
    "số nguyên trong mảng là: " + count3;
  // console.log(Number.isInteger(b[i]));
  // console.log(Number.isInteger(1.5));
}
