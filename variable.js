// Learn Variable in JS
var x = 10; // Variabel global atau fungsi (hindari penggunaan 'var' jika tidak perlu)
let y = 20; // Variabel yang dapat di ubah
const z = 30; // Variabel konstan yang nilainya tidak bisa diubah

// Learn data types for variables in JS
let name = "Dana Raga"; // String
let age = 16; // Integer
let isStudent = true; // Boolean
let score = null; // Null
let grade; // Undefined
let user = {name: "Dana", age: 16}; // Object

// Use of Literal Templates
let name1 = "Dana";
let age1 = 16;
console.log(`Nama saya ${name1}, umur saya ${age1} tahun.`);

// Data Type Conversion
let str = "100";
let num = Number(str);
let strNum = String(num);

// Exercise
// Exercise 1
let nama = "Dana Raga";
let umur = 16;
let sekolah = "SMKN 1 Ciomas";
let kelas = 11;
let jurusan = "PPLG";
console.log(`Halo, perkenalkan nama saya ${nama}, umur saya ${umur} tahun. Saya bersekolah di ${sekolah}, kelas ${kelas} jurusan ${jurusan}.`);

// Exercise 2
let a = 5;
let b = 10;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
console.log(`Tambah: ${addition}`);
console.log(`Kurang: ${subtraction}`);
console.log(`Kali: ${multiplication}`);
console.log(`Bagi: ${division}`);