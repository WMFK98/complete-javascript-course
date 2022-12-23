// 'use strict'; // ทำให้ตัว js มีการเข้มงวดมากขึ้น ้เช้นหากมีตัวแปรใหม่ต้องใช้ตัวประกาศด้วย

// let hasDrinersLicrnse = false;
// const passTast = true;

// if (passTast)  hasDrinersLicrnse = true;
// if(hasDrinersLicrnse) console.log('I can drive ')

// function logger(){
//     console.log("hello");
//     return 5;
// }

function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const apples =  fruitProcessor(2,5);
console.log(apples);