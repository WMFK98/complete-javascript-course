// console.log('Exporting module');

// const shoppingCart = 10; // สิ่งนี้เป็นแบบส่วนตัวและไม่สามารถเรียกใช้ได้โดยตรงจากการ import
// export const cart = [];

// export const addToCart = function (product, quantity) { // ถึงต้องใช้แบบการ export เอา และต้องอยู่ที่ชั้นบนสุดเท่านั้นเช่นหากอยู่ใน if จะใช้การไม่ได้
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
// }
// //=======test await สังเกตว่านอกจากมันจะต้องรอไฟล์มันเองแล้วในฝั่งที่ import ขอต้องรอตัวนี้ให้เสร็จอีกด้วย
// console.log('Start fetch');
// await fetch('https://jsonplaceholder.typicode.com/comments');
// console.log('finally');

// const totalPrice = 237;
// const totalQuantity = 30;
// export { totalPrice, totalQuantity as tq }; // {} ก็เหมือนเป็นการเก็บใส่ในตะกร้าส่งออก
// // และก็ยังสามารถเปลี่ยนชื่อได้ตั้งแต่ตอนส่งออก
// //===================================
// // เป็นการตั้งค่าเริ่มต้นถ้าเกิดไม่มีตัวแปรนั้นแต่มีการ import ใครจะใช้ค่านี้เสมอ(no recomment)
// export default function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
// }

//===========================================
// รูปแบบที่ module ทำงาน
const shoppingCart2 = (function () { //IIEF โดยปกติแล้วมันจะหายไปเพราะใช้แค่ครั้งเดียวเพราะงั้นจึงมีการเก็บค่าเอาไว้และให้มัน return ออกมาเป็นตัวที่เราต้องการโดยไม่ใช่ทั้งหมด // แต่ข้อมูลที่ไม่ได้เอาออกมาก็ยังคงเชื่อมต่อกันอยู่และสามารถเรียกใช้ได้เฉพาะในฟังก์ชันของมัน
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity })
        console.log();
        console.log(`${quantity} ${product} added to cart`);
    }
    const oderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);


    }
    return { //
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2); // เราจะไม่สามารถเรียกใช้ฟังก์ชันที่ไม่ได้ถูก return ออกมาได้ เหมือนกับ exprort