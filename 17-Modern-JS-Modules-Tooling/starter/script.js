// //importing module
// //ทุกตัวที่อิมพอร์ตจะถูกดำเนินการก่อน
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // หากเราต้องการหยิบตัว export ตัวไหนเราต้องใส่ชื่อให้ตรงกันกับตัวนั้นที่อยู่ใน module
// // as เป็นการตั้งชื่อใหม่

// addToCart('bread', 5)

// console.log(price, tq);
// console.log('Importing module');
// // แม้จะอยู่ข้างใต้ก็ยังจะถูกrunก่อนเสมอ
import * as ShoppingCart from './shoppingCart.js' // เป็นการสร้างอ๊อฟเจ็กที่เอาทุกอย่างในตัวของ export มาสร้างเป็นชื่อของ ShoppingCart 

// ShoppingCart.addToCart('bread', 5);

// import add, { cart } from './shoppingCart.js'; // ถ้าทำแบบนี้ไม่ว่าคุณจะใส่ตัวแปลอะไรไปมันก็จะไม่ Error พอใช้คาเริ่มต้น
// add('pizza', 2);
// add('bread', 5)

// console.log(...cart); // ผลลัพธ์ที่ออกมาคือจะเก็บข้อมูลทั้งหมดที่ถูก add เอาไว้ดังนั้นแต่ว่าข้อมูลที่เรา export มานั้นไม่ใช่ก๊อปปี้แต่เป็นการเชื่อมกัน

//===============level await
// //await โดยปกติจะต้องใช้ใน asnyc function เท่านั้นแต่ว่าในเวอร์ชั่นใหม่ ES2022 เราสามารถใช้ใน top-level ได้แล้วเฉพาะใน "Module"
// const res = await fetch('https://jsonplaceholder.typicode.com/comments')
// const data = await res.json(); // เขียนง่ายก็จริงแต่เนื่องจากอยู่บนสุดดังนั้นมันจะไปหยุดทุกคำสั่งใน module ซึ่งอันตรายมากๆ
// console.log(data);

// ดังนั้น
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data);
    return { name: data.at(-1).name, body: data.at(-1).body }
}

getLastPost().then(last => console.log(last))


