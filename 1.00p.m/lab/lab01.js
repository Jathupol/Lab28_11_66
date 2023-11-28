let a = undefined;
let b = 2;
let c = a++;

let d = String(a);
let e = String(b);
let f = String(c);

console.log(d, e, f);

// เหตุผลที่ตัวแปร f เป็น NaN เพราะการใช้ a++ ซึ่ง a เป็น undefined 
// ทำให้ c กลายเป็น NaN หรือ Not a Number ซึ่งเป็นผลลัพธ์ของการเพิ่ม
// ค่าของตัวแปรที่มีค่าไม่ใช่ตัวเลข (NaN) ดังนั้น c จึงเป็น NaN ในการแปลงเป็น string จึงได้ค่า NaN