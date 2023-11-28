let a = undefined;
let b = ' ';
let c = !b;

let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

console.log(d,e,f);

// ผลลัพธ์ที่ได้จาก console.log(d, e, f) คือ false true false 

// false: เป็นผลลัพธ์ของการแปลงค่า undefined เป็น Boolean ซึ่งจะได้ค่า false.

// true: เป็นผลลัพธ์ของการแปลง string ' ' เป็น Boolean ซึ่งจะได้ค่า true เนื่องจาก string ที่ไม่ว่างเปล่าจะถือเป็น true.

// false: เป็นผลลัพธ์ของการประเมินผลลัพธ์ของ !b ซึ่ง !b หมายถึง "NOT" 
// ของค่า boolean ของ b ซึ่ง b เป็น string ที่ไม่ว่างเปล่า ดังนั้น !b จะได้ผลลัพธ์เป็น false