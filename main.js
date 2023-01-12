const randomBtn = document.getElementById("btn-random");
const numberResult = document.getElementById("number-result");
const submitBtn = document.querySelector(".btn-submit");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");
const result5 = document.getElementById("result5");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let n10 = document.getElementById("n10");
const modalElement = document.querySelector("#myModal");
const confirmBtn = document.getElementById("btn-confirm");
//random number

//Data list

// function handleRandom(repeat) {
//   return Math.floor(Math.random() * repeat);
// }
// randomBtn.onclick = function () {
//   let timerId;
//   let count = 0;
//   timerId = setInterval(() => {
//     n1.value = handleRandom(9);
//     n2.value = handleRandom(9);
//     n3.value = handleRandom(9);

//     count++;
//     if (count >= 900) {
//       clearInterval(timerId);
//       modal.style.display = "block";
//       if (parseInt(n1.value) >= 5) {
//         n1.value = handleRandom(4);
//       }
//       if (n1.value == 0 && n2.value == 0) {
//         n3.value = Math.floor(Math.random() * (9 - 1 + 1) + 1);
//       }
//       numberResult.textContent = n1.value + n2.value + n3.value;
//     }
//   });
// };
// let array = [];
// submitBtn.onclick = function () {
//   // handleCloseModal();
//   modal.style.display = "none";
//   array.push(numberResult.textContent);

//   for (let i = 0; i < array.length; i++) {
//     if (i === 0) {
//       result1.textContent = array[i];
//     }
//     if (i === 1) {
//       result2.textContent = array[i];
//     }
//     if (i === 2) {
//       result3.textContent = array[i];
//     }
//     if (i === 3) {
//       result4.textContent = array[i];
//     }
//     if (i === 4) {
//       result5.textContent = array[i];
//     }
//   }
// };
// function handleCloseModal() {
//   modal.style.display = "none";
// }
// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];

// span.onclick = handleCloseModal;
// document.querySelector(".btn-close").onclick = handleCloseModal;

// window.onclick = function (event) {
//   if (event.target == modal) {
//     handleCloseModal();
//   }
// };

const dataList = [
  { fullName: "Nguyen Thi Huyen Trang", phoneNumber: "0813804080" },
  { fullName: "Nguyễn Phạm Hữu Khang", phoneNumber: "0977009983" },
  { fullName: "Đoàn Văn Vĩnh", phoneNumber: "0834696983" },
  { fullName: "Nguyễn Tấn Hưng", phoneNumber: "0399353144" },
  { fullName: "Trần Ngọc Chinh", phoneNumber: "0903928372" },
  { fullName: "Dinh Ngoc Huy Hoang", phoneNumber: "0974824145" },
  { fullName: "Nguyen Thi Ngoc Thu", phoneNumber: "0326217691" },
  { fullName: "Nguyễn Thanh Huy", phoneNumber: "0346353643" },
  { fullName: "Nguyễn Văn Phước", phoneNumber: "0399595645" },
  { fullName: "Nguyễn Phúc Cát Tường", phoneNumber: "0394947376" },
  { fullName: "Phan Quốc Cường", phoneNumber: "0931495171" },
  { fullName: "Nguyễn Minh Nhựt", phoneNumber: "0908670878" },
  { fullName: "Đoàn Công Danh", phoneNumber: "0702514982" },
  { fullName: "Trần Văn Hiền", phoneNumber: "0337122712" },
  { fullName: "Trần Văn Phát", phoneNumber: "0362913379" },
  { fullName: "Lê Nhật Huy", phoneNumber: "0794443245" },
  { fullName: "Nguyễn Đình Hoàng Phương", phoneNumber: "0854468179" },
];

//Handle random i
const handleRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const handleShowResultList = (data) => {
//   resultData.map((item, index) => {
//     if (index === 0) {
//       result1.textContent === item[index] || "loading...";
//     }
//   });
// };

// Handle submit
const handleDial = () => {
  let count = 0;
  const timeId = setInterval(() => {
    n2.value = handleRandom(0, 9);
    n3.value = handleRandom(0, 9);
    n4.value = handleRandom(0, 9);
    n5.value = handleRandom(0, 9);
    n6.value = handleRandom(0, 9);
    n7.value = handleRandom(0, 9);
    n8.value = handleRandom(0, 9);
    n9.value = handleRandom(0, 9);
    n10.value = handleRandom(0, 9);
    count++;
    if (count >= 150) {
      clearInterval(timeId);
      console.log(dataList[handleRandom(0, dataList.length)].phoneNumber[1]);
      const empItem = handleRandom(0, dataList.length);
      n2.value = dataList[empItem].phoneNumber[1];
      n3.value = dataList[empItem].phoneNumber[2];
      n4.value = dataList[empItem].phoneNumber[3];
      n5.value = dataList[empItem].phoneNumber[4];
      n6.value = dataList[empItem].phoneNumber[5];
      n7.value = dataList[empItem].phoneNumber[6];
      n8.value = dataList[empItem].phoneNumber[7];
      n9.value = dataList[empItem].phoneNumber[8];
      n10.value = dataList[empItem].phoneNumber[9];
      // modalElement.style.display = "block";
      // numberResult.textContent = dataList[empItem].fullName;
    }
  }, 70);
};

randomBtn.onclick = () => {
  handleDial();
};

// const resultData = [];

// confirmBtn.onclick = () => {
//   resultData.push([...resultData, numberResult.textContent]);
//   // modalElement.style.display = "none";
//   for (let i = 0; i < resultData.length; i++) {
//     if (i === 0) {
//       result1.textContent = resultData[i];
//     }
//     if (i === 1) {
//       result2.textContent === resultData[i];
//     }
//   }
// };
