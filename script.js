// // 1-SAVOL JAVOBI IF

// let num = +prompt("Sonni kiriting");
// if (num > 0) {
//   num = nu = m + 1;
// } else {
//   num = num + 0;
// }
// console.log(num);

// // 2-SAVOL JAVOBI

// let num = +prompt("Sonni kiriting");
// if (num > 0) {
//   num = num + 1;
// } else {
//   num = num - 2;
// }
// console.log(num);

// // 3-SAVOL JAVOBI

// let num = +prompt("Sonni kiriting");
// if (num > 0) {
//   num = num + 1;
// } else if (num == 0) {
//   num = num + 10;
// } else {
//   num = num - 2;
// }
// console.log(num);

// // 4-SAVOL JAVOBI

//  let num1 = +prompt("1-sonni kiriting");
//  let num2 = +prompt("2-sonni kiriting");
//  let num3 = +prompt("3-sonni kiriting");

// let count = 0;

// if (num1 > 0) {
//   count = count + 1;
// }
// if (num2 > 0) {
//   count = count + 1;
// }
// if (num3 > 0) {
//   count = count + 1;
// }

// console.log(count);

// // 5-SAVOL JAVOBI
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let num3 = +prompt("3-sonni kiriting");
// let count = 0;
// let sum = 0;

// if (num1 > 0) {
//   count = count + 1;
// } else {
//   sum = sum + 1;
// }
// if (num2 > 0) {
//   count = count + 1;
// } else {
//   sum = sum + 1;
// }
// if (num3 > 0) {
//   count = count + 1;
// } else {
//   sum = sum + 1;
// }
// console.log("Musbatlar soni:", count);
// console.log("Manfiylar soni:", sum);

// // 6-SAVOL JAVOBI
//  let num1 = +prompt("1-Sonni kiriting")
//  let num2 = +prompt("2-Sonni kiriting")
//  let sum;

//  if(num1 > num2){
//     sum = num1
//  } else{
//     sum = num2
//  }

//  console.log("Eng katta son:",sum);

// // 7-SAVOL JAVOBI

// let num1 = +prompt("1-sonni kiriting:");
// let num2 = +prompt("2-sonni kiriting:");

// if (num1 < num2) {
//   console.log("Eng kichik sonning tartib raqami: 1");
// } else if (num1 > num2) {
//   console.log("Eng kichik sonning tartib raqami: 2");
// } else {
//   console.log("2ta son ozaro teng.");
// }

// // 8-SAVOL JAVOBI
// let num1 = +prompt("1-Sonni kiriting");
// let num2 = +prompt("2-Sonni kiriting");
// if (num1 > num2) {
//   alert("Eng kattasi: " + num1 + "\nEng kichigi: " + num2);
// } else if (num1 < num2) {
//   alert("Eng kattasi: " + num2 + "\nEng kichigi: " + num1);
// } else {
//   alert("Ikkala son teng: " + num1);
// }

// // 9-SAVOL JAVOBI
// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");

// if (A >= B) {
//   let res = A;
//   A = B;
//   B = res;
// }

// alert("A: " + A + "\nB: " + B);

// // 10-SAVOL JAVOBI
// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");
// let res;

// if(A != B){
//     res = A + B
// }

// // 11-SAVOL JAVOBI
// let A = +prompt("A sonini kiriting:");
// let B = +prompt("B sonini kiriting:");

// if (A != B) {
//   if (A > B) {
//     B = A;
//   } else {
//     A = B;
//   }
// } else {
//   A = 0;
//   B = 0;
// }

// alert("A: " + A + "\nB: " + B);

// // 12-SAVOL JAVOBI
// let num1 = +prompt("1-sonni kiriting:");
// let num2 = +prompt("2-sonni kiriting:");
// let num3 = +prompt("3-sonni kiriting:");
// let res = num1;
// if (num2 < res) {
//   res = num2;
// }
// if (num3 < res) {
//   res = num3;
// }
// alert("Eng kichik son:" + res);

// // 13-SAVOL JAVOBI
// let num1 = +prompt("1-sonni kiriting:");
// let num2 = +prompt("2-sonni kiriting:");
// let num3 = +prompt("3-sonni kiriting:");

// let med;

// if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
//     med = num1;
// } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
//     med = num2;
// } else {
//     med = num3;
// }
// alert("O'rtacha kiritilgan son: " + med);

// // 14-SAVOL JAVOBI

// let num1 = +prompt("1-sonni kiriting:");
// let num2 = +prompt("2-sonni kiriting:");
// let num3 = +prompt("3-sonni kiriting:");
// let min = num1;
// let max = num1;
// if (num2 < min) {
//   min = num2;
// }
// if (num2 > max) {
//   max = num2;
// }
// if (num3 < min) {
//   min = num3;
// }
// if (num3 > max) {
//   max = num3;
// }
// alert("Eng kichik son: " + min + "\nEng katta son: " + max);

// // 15-SAVOL JAVOBI
// let num1 = +prompt("1-sonni kiriting:");
// let num2 = +prompt("2-sonni kiriting:");
// let num3 = +prompt("3-sonni kiriting:");

// let max = 0;
// let res;

// if (num1 + num2 > max) {
//   max = num1 + num2;
//   res = num1 + " va " + num2;
// }

// if (num1 + num3 > max) {
//   max = num1 + num3;
//   res = num1 + " va " + num3;
// }

// if (num2 + num3 > max) {
//   max = num2 + num3;
//   res = num2 + " va " + num3;
// }

// alert("Eng katta yigindi: " + res + "\nYigindisi: " + max);
// // 16-SAVOL JAVOBI
// let A = +prompt("A uchun qiymat kiriting:");
// let res;

// if (A > 0) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 17-SAVOL JAVOBI

// let A = +prompt("A uchun qiymat kiriting:");
// let res;

// if (A % 2 == 1) {
//   res = "toq";
// } else {
//   res = "toq emas";
// }

// alert(res);

// // 18-SAVOL JAVOBI

// let A = +prompt("A uchun qiymat kiriting:");
// let res;
// if (A % 2 == 0) {
//   res = "juft";
// } else {
//   res = "juft emas";
// }

// alert(res);

// // 19-SAVOL JAVOBI
// let A = +prompt("A sonni kiriting");
// let B = +prompt("B sonni kiriting");
// let res;

// if (A > 2 && B <= 3) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 20-SAVOL JAVOBI

// let A = +prompt("A sonni kiriting");
// let B = +prompt("B sonni kiriting");
// let res;
// if (A >= 0 && B < -2) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 21-SAVOL JAVOBI

// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");
// let C = +prompt("C sonni kiriting:");
// let res;

// if (A <= B && B <= C) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 22-SAVOL JAVOBI

// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");
// let C = +prompt("C sonni kiriting:");
// let res;

// if ((B > A && B < C) || (B < A && B > C)) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 23-SAVOL JAVOBI
// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");
// let res;

// if (A % 2 !== 0 && B % 2 !== 0) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);
// // 24-SAVOL JAVOBI

// let A = +prompt("A sonni kiriting:");
// let B = +prompt("B sonni kiriting:");
// let res;
// if (A % 2 !== 0 || B % 2 !== 0) {
//   res = true;
// } else {
//   res = false;
// }
// alert(res);

// // 25-SAVOL JAVOBI

// let A = +prompt("A sonni kiriting");
// let B = +prompt("B sonni kiriting");
// let res;

// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0)) {
//   res = true;
// } else {
//   res = false;
// }

// alert(res);

// // 26-SAVOL JAVOBI
// let A = prompt("A sonini kiriting");
// let B = prompt("B sonini kiriting");
// let res;

// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
//     res = true;
// } else {
//     res = false;
// }
// alert(res);
