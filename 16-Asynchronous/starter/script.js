'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//whereAmI v2
//=============================================
// const renderError = function (mag) {
//     countriesContainer.insertAdjacentText('beforeend', mag); // เหมือนกับอินเสิชแต่ว่ารอบนี้เอาเป็นแค่ตัวหนังสือยัดเข้าไปเลย
//     // countriesContainer.style.opacity = 1;
// }
// const getJSON = function (url, errMsg = 'Something went wrong') {
//     return fetch(url).then(response => { // ที่ต้องส่งถ้ากลับตัวนี้เพราะจะได้ใช้ function ของ then ได้
//         if (!response.ok) throw new Error(`${errMsg} (${response.status})`)
//         return response.json();
//     })

// }

// const getCountData = function (country) { // use arrow function

//     getJSON(`https://restcountries.com/v2/name/${country}`)
//         .then(data => {
//             renderCountry(...data)
//             const neighbour = data[0].borders?.[0];
//             if (!neighbour) throw new Error('No neighbour found!')
//             //Country 2
//             return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`)

//             // fetch(`https://restcountries.com/v2/alpha/${neighbour}`).then(respones => ) //ห้ามทำแบบ the hell นี่เด็ดขาด ที่เอาโค้ดไปข้างในอีกที

//         })
//         // .then(respones => respones.json()) //เอามาต่อข้างนอก
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.error(err) //ขึ้นมาเป็นกรอบสีแดง เมื่อมีการ throw method นี้จะถูกทำงานและส่งค่าทรูไปที่พารามิเตอร์ตัวแรกที่ catch รับ
//             renderError(`Something went wrong. ${err.message} Please try again.`)

//         })// จับ error ทุกตัวในห่วงโซ่
//         .finally(() => {
//             countriesContainer.style.opacity = 1; // ในที่นี้คือไม่ว่าจะถูกหรือผิดก็จะเป็นจริงเสมอ ซึ่งจะ do ตลอด
//         })
// }
// const renderCountry = function (data, className = '') {
//     const html = `
//     <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1) + "M"} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>`;

//     // console.log(html);
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1;

// }

// ///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//     const request = new XMLHttpRequest();// ไว้สำหรับเรียกใช้ Api ต่างๆ
//     request.open('GET', `https://restcountries.com/v2/name/${country}`)
//     request.send();// กำลังขอให้ดึงข้อมูลในพื้นหลัง
//     console.log("888", request.responseText); // อันนี้จะยังไม่ปรากฏอะไรเพราะว่าด้านบนยัง ดึงข้อมูลไม่เสร็จแล้วเรียกใช้อันนี้พอดีเลยออกมาเป็น ค่าว่าง

//     request.addEventListener('load', function () { //load คือจะทำงานก็ต่อเมื่อ request นั้นทำงานเสร็จหมดแล้ว
//         // console.log(this.responseText); //this ในที่นี้หมายถึง request
//         const [data] = JSON.parse(request.responseText); //[] คือแตกโครงสร้าง
//         console.log(data);
//         renderCountry(data);

//         const [neighbour] = data.borders; //เอาตัวแรกของ array
//         console.log(neighbour);
//         if (!neighbour) return;

//         //AJAX call country 2 ชื่อเพื่อนบ้าน
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
//         request2.send();
//         // callback hell ซ้อนกัน code นรกสัสๆ
//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText)
//             console.log(data2);
//             renderCountry(data2, 'neighbour');
//         })
//     })
// }

// getCountryAndNeighbour('usa')// สิ่งนี้จะเป็นทำงานแบบ asynchrobos ซึ่งหมายความว่าลำดับการทำงานที่ปรากฏในบางครั้งอาจจะไม่เรียงกันหาอันแรกยังโหลดไม่เสร็จ
// // getCountryData('usa')
// getCountryAndNeighbour('thai')

//=====================

// const request = fetch('https://restcountries.com/v2/name/usa')
// console.log(request);

// const getCountData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) { //then เมื่อตรวจสอบเสร็จแล้วจะได้ทำอะไรต่อ ค่าใน function คือ ผลรับที่ส่งมาจ
//         return response.json(); //joson เป็นแบบ asycho ตั้งน้ั้นเมื่อ return จึงออกมาเป็น promiss อีกรอบ
//     }).then(function (data) {
//         console.log(data);
//         renderCountry(...data)
//     })

// }

// btn.addEventListener('click', function () {
//     getCountData('australia');
// });

//challenge 1
// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//         .then(response => {
//             // console.log(response);
//             return response.json()
//         })
//         .then(data => {
//             if (!data.country) {
//                 console.error("Something went wrong! 403 please wait");
//                 whereAmI(lat, lng);
//                 return;
//             }
//             console.log(`You are in ${data.city},${data.country}`);
//             return data.country;
//         }).then(conuntry => getCountry(conuntry))
//         .catch(err => console.error(`Something went wrong! ${err}`))

// }
// const getCountry = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0])
//             gennerateCountry(data[0])
//         });
// }

// const gennerateCountry = function (data) {
//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1;
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// //mirotask tes=======================
// console.log('Test start'); //
// setTimeout(() => console.log('0 sec timer'), 0) //ยังไม่ถูกทำงานจริง ได้ไปอยู่ที่ callback queue
// Promise.resolve('Rsesolved promise 1').then(res => console.log(res))
// Promise.resolve('Resolved promise 2').then(res => { //ตัวของ callback queue จะต้องรอไปเรื่อยเรื่อยจนกว่าอันนี้จะเสร็จ
//     for (let i = 0; i < 10000000000; i++) { }
//     console.log(res);
// })
// console.log('Test end'); //เป็นแบบ sycronous  จึงทำเสร็จก่อน

// //Building a Simple Promise========

// const lotteryPromise = new Promise(function (resolve, reject) { // ใน promise สามารถรับได้สองตัวแปดก็คือตัวแปรแรกที่จะแสดงเมื่อไม่เกิดปัญหากับอันที่สองที่จะแสดงเมื่อเกิดปัญหา
//     console.log('Lotter drow is happening');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN')
//         } else {
//             reject(new Error('You lost your money')); //ถ้าใส่ Error จะมีการบอกว่าอยู่มันที่บรรทัดไหน
//         }
//     }, 2000)

// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
    return new Promise(function (response) {
        setTimeout(response, seconds * 1000);
    });
};
// //
// // ดูง่ายมากกว่าทำเป็น โคตพีระมิดแบบ setTimeOut
// wait(2)
//     .then(() => { // เมื่อเราไม่ได้ใช้ค่า responseก็ไม่จำเป็นจะต้องใส่ก็ได้
//         console.log('I waited for 1 sec')
//         return wait(1); // เมื่อเรียกใช้ return จะถามให้สามารถ chaining ได้ใน promise
//     })
//     .then(() => {
//         console.log('I waited for 2 sec');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 3 sec');
//         return wait(1);
//     })
//     .then(() => {
//         console.log('I waited for 4 sec');
//         return wait(1);
//     })

// Promise.resolve('abc').then(res => console.log(res)) // สองตัวนี้จะทำงานก่อน
// Promise.reject(new Error('Is Problem')).catch(res => console.error(res)) // คั่วตรงข้าม

//Gelocation======================================

// const whereAmIV2 = function () { // ใช้ gelocation
//     getPosition().then(pos => {
//         const { latitude: lat, longitude: lng } = pos.coords; //แทนค่าสองตัวแปรโดยเอาชื่อมาจาก Object; // อยู่ในปีกกาใช้เครื่องหมาย = ไม่ได้
//         console.log(lat, lng);
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`) // เอาไว้เชื่อมกันกับอันข้างล่าง
//     })
//         .then(response => {
//             // console.log(response);
//             return response.json()
//         })
//         .then(data => {
//             if (!data.country) {
//                 console.error(new Error("Something went wrong! 403 please wait"));
//                 whereAmIV2();
//                 return;
//             }
//             console.log(`You are in ${data.city},${data.country}`);
//             return data.country;
//         }).then(conuntry => getCountry(conuntry))
//         .catch(err => console.error(`Something went wrong! ${err}`))

// }
// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }
// const getCountry = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data[0])
//             gennerateCountry(data[0])
//         });
// }
// const gennerateCountry = function (data) {
//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M</p>
//           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//       </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1;
// }

// getPosition().then(pos => console.log(pos));
// btn.addEventListener('click', whereAmIV2())

//====================================================
//Challeng 2
// const img = document.querySelector('.images');
// const createImage = function (imgPath) {
//     return new Promise(function (resolve, reject) {
//         const addImage = document.createElement('img')
//         addImage.src = imgPath
//         addImage.addEventListener('load', () => resolve(addImage)) // ต้องมีรถก่อนไม่งั้นมันจะไม่รอภาพแล้วจะไปเลย
//         addImage.addEventListener('error', () => reject(`Image path:${imgPath} not found`)) // ไว้หาตอนภาพไม่โหลด
//     })
//         .then(response => {
//             img.append(response)
//             return wait(2).then(() => response);
//         })

//         .then(res => {
//             res.style.display = 'none'
//             console.log('end');
//             return wait(2).then(() => res)
//         }).catch(err => console.error(new Error(err)))
// }

// createImage('img/img-1.jpg').then(() => createImage('img/img-2.jpg')).then(() => createImage('img/img-3.jpg'));
//====================================================
const renderCountry = function (data, className = '') {
    const html = ` 
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1) + 'M'
        } people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

    // console.log(html);
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
// try catch เนื่องจากเมื่อทำแบบนี้จะไม่สามารถใช้ catch ต่อกันแบบเดิมได้แล้วเราจึงหันมาใช้ try catch แทน

const renderError = function (mag) {
    countriesContainer.insertAdjacentText('beforeend', mag); // เหมือนกับอินเสิชแต่ว่ารอบนี้เอาเป็นแค่ตัวหนังสือยัดเข้าไปเลย
    // countriesContainer.style.opacity = 1;
    // throw new Error(mag);
};
const getJSON = function (url, errMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        // ที่ต้องส่งถ้ากลับตัวนี้เพราะจะได้ใช้ function ของ then ได้
        if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
        return response.json();
    });
};
const whereAMI = async function () {
    try {
        //ฟังชั้นนี้จะทำงานพื้นหลัง เพราะงั่นไม่ขวาง call stack แน่นอน
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error(`Problem getting location data`);
        const dataGeo = await resGeo.json();
        console.log(dataGeo);

        const res = await fetch(
            `https://restcountries.com/v2/name/${dataGeo.country}`
        ); //จะเป็นการเป็นการยุภายในฟังชั่นจะกว่าจะเสร็กค่อยไปต่อ
        if (!dataGeo.country) throw new Error('Geocode was worng💥');
        // console.log(res); // ได้ผลลัพธ์ respones ออกมาทันทีหากใช้โค๊ดกรณีนี้
        const data = await res.json(); // ทำการแปลงตัว json
        // console.log(data);
        renderCountry(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}`; // ถ้าเกิด return ปกติน่าจะคืนค่า เป็น promise เพราะคำสั่งกำลังถูกทำงานอยู่
    } catch (err) {
        console.error(`${err} 💥`);
        renderError(`Something went wrong 💥  ${err.message}`);
        throw err; // ต้องใส่เพื่อให้เวลาที่ error มันจะได้ถูกโยนไป catch ต่ออีกทีเมื่อเรียกใช้
    }
};

console.log(`1: Will get location`);
// พี่ต้องทำการตรวจจับข้างนอกเนื่องจากมีการ return ค่าออกมาถึงแม้ว่าค่าเหล่านั้นจะเกิด Error ขึ้นภายในฟังก์ชันแต่มันก็จะ return ออกมาเป็น undifind ซึ่งเราต้องทำตัวรองรับข้อผิดพลาดนั้นอีกที
// ปิดที่แบบผสม แบบเก่าและแบบใหม่=============================================
// const city = whereAMI();
// console.log(city);//Promise
// whereAMI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err}`))
//     .finally(() => console.log(`3: Will get location`));//ใช้ then เพื่อรับค่า return จาก ascy
// // เออเร่อที่มาจาก throw err จะถูกส่งมาที่ catch

//async วิธีใช้แบบใหม่=======================================
// (async function () {
//     // เนื่องจาก try catch จะทำงานได้แค่เฉพาะใน function เท่านั้นดังนั้นจึงต้องสร้างฟังก์ชั่นที่เป็นแบบ IEFF ซึ่งจะใช้งานได้เพียงครั้งเดียว เหมือน run คำสั่งปกติ จากนั้น จึงค่อยใช้ await และtry catch
//     try {
//         const city = await whereAMI();
//         console.log(`2: ${city}`);
//         //ใช้ then เพื่อรับค่า return จาก ascy
//     } catch (err) {
//         console.error(`2: ${err}`);
//     }
//     console.log(`3: Will get location`);
// })();

//=======================
// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // แบบขั้นตอนด้านล่างนี้จะเป็นการเดิมพันแบบต้องรอทีละตัวหรือเป็นการรันแบบ sequne  ซึ่งถือว่าใช้เวลานานในการโหลดเว็บไซต์
//         const [data1] = await getJSON(
//             `https://restcountries.com/v2/name/${c1}`
//         )
//         const [data2] = await getJSON(
//             `https://restcountries.com/v2/name/${c2}`
//         )
//         const [data3] = await getJSON(
//             `https://restcountries.com/v2/name/${c3}`
//         )

//         const datas = await Promise.all([ // เป็นการ ทำงานแบบ parallel
//             getJSON(`https://restcountries.com/v2/name/${c1}`),
//             getJSON(`https://restcountries.com/v2/name/${c2}`),
//             getJSON(`https://restcountries.com/v2/name/${c3}`),
//         ])
//         console.log();
//         // datas.forEach(([data]) => console.log(data.capital))
//         console.log(datas.map(d => d[0].capital))
//         // console.log(data1.capital, data2.capital, data3.capital);

//     } catch (err) {
//         console.error(err);

//     }
// }

// get3Countries('usa', 'thai', 'canada')


//======================== Promise.race // การแข่งขันกัน ถ้าตัวไหนโหลดเสร็จก่อนมันจะเอาตัวนั้นไป เป็นคำตอบส่วนตัวอื่นก็ปัดทิ้ง 
// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error("Request took too long"))
//         }, sec * 1000)
//     })
// }

// Promise.race([ // ไว้ใช้สำหรับเวลาโหลดนานหรือว่าสัญญาณไม่ดีก็ให้ตัดทิ้งไปเลย
//     getJSON(`https://restcountries.com/v2/name/thai`),
//     timeout(1)
// ]).then(res => console.log(res[0])).catch(err => console.err(err))

// //======================= Promise.allSettled
// Promise.allSettled([ // เป็นตัวใหม่ของ es2020 ไม่ว่า promise ่นั้นจะผิดพลาดหรือไม่ มันก็จะถูกเก็บเป็น array
//     Promise.resolve('Sucess'),
//     Promise.reject('Error'),
//     Promise.resolve('Sucess')
// ]).then(res => console.log(res)).catch((err) => console.error(err)) // แสดงว่าตัวของ catch จะไม่ทำงาน

// Promise.all([ // ต่างจากตัวนี้พี่ถ้าเกิดมันผิดพลาดก็จะเด้งออกมาทันทีเหมือนไฟฟ้าลัดวงจร
//     Promise.resolve('Sucess'),
//     Promise.reject('Error'),
//     Promise.resolve('Sucess')
// ]).then(res => console.log(res)).catch((err) => console.error(err))

// //======================= Promise.any

// Promise.any([ // ต่างจากตัวนี้พี่ถ้าเกิดมันผิดพลาดก็จะเด้งออกมาทันทีเหมือนไฟฟ้าลัดวงจร
//     Promise.resolve('Sucess'),
//     Promise.reject('Error'),
//     Promise.resolve('another Sucess')
// ]).then(res => console.log(res)).catch((err) => console.log(err))

//Challeng 3

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;
// แบบเก่า
// createImage('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.error(err));

// แบบใหม่
const loadNPeuse = async function () {
    try {
        let currentImg
        currentImg = await createImage('img/img-1.jpg')
        console.log('Image 1 loaded');
        await wait(2)
        currentImg.style.display = 'none'
        await wait(2)

        currentImg = await createImage('img/img-2.jpg')
        console.log('Image 2 loaded');
        await wait(2)
        currentImg.style.display = 'none'
        await wait(2)

        currentImg = await createImage('img/img-3.jpg')
        console.log('Image 3 loaded');
        await wait(2)
        currentImg.style.display = 'none'
        await wait(2)

    } catch (err) {
        console.error(err);
    }
}
// loadNPeuse();

const loadAll = async function (imgArr) {
    const imgs = imgArr.map(img => createImage(img))
    console.log(imgs);
    const all = await Promise.all(imgs)
    all.forEach(img => img.classList.add('parallel'))

}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])