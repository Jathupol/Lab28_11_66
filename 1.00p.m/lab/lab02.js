let a = undefined;
let b = null;
let c = b + '4 2';

let d = Number(a);
let e = Number(b);
let f = Number(c);

console.log(d, e, f);
// ผลลัพธ์ที่ได้จาก console.log(d, e, f) คือ NaN 0 NaN

// NaN หรือ 0 นั้นมาจากการแปลงค่า undefined เป็น NaN และ
// ค่า null เป็น 0 ใน JavaScript และการดำเนินการบวก null
// กับ string ทำให้ได้ผลลัพธ์ที่เป็น NaN ตามเงื่อนไขของการทำงานของภาษา JavaScript
