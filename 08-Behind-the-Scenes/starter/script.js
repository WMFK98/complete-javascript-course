'use strict';
let lastName = 'Wichira';
let oldLastName = lastName;
oldLastName = 'Matrakampa';

console.log(oldLastName);
console.log(lastName);

const objects = {
  firstName: 'Wichira',
  lastName: 'Matrakampa',
  family: ['bob', 'hup'],
};

const objects2 = objects;

objects2.firstName = 'jj';

const copy = Object.assign({}, objects); //ตัวนี้จะสร้างให้เลย obj ให้เลยแต่เป็นแบบ ตื้น คือไม่ copy obj in obj เช่น array ใน obj
copy.firstName = 'w';
copy.family.push('pip');
console.log(copy);
console.log(objects);
console.log(objects2); //จะแป็นการชีตำแหน่งไปยัง heep มี่เดียวกัน เมื่อปลียน 2 ผลลัพก็จะเหมือนกัน
