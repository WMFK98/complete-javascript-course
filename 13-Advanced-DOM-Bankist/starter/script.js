'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//selectingฝฝ
console.log(document.documentElement);
const header = document.querySelector('.header');
console.log(document.body); // โชว์เนื้อหาทั้งหมดที่อยู่ในtextนั้น

const allSection = document.querySelectorAll('.setion');

document.querySelector('.setion--1');
document.getElementById('button'); //เข้าถึงไอดี
const allbutton = document.getElementsByTagName('button'); //เข้าถึงปุ่มทั้งหมด
console.log(allbutton); // เป็นการเข้าเขตต่างๆหากไม่อยู่ใน dom ตัวนั้นก็จะหายไปด้วย โดยเมื่อเรียกใช้ตัวนี้ มันจะอัพเดทการเข้าถึงใหม่ด้วย ซึ่งต่าง กับ querySelectorAll จะเป็นการบันทึกค่าเอาไว้เฉยเฉยเมื่อมีการเปลี่ยนแปลงดอมและเรียกใช้ตัวนี้ก็จะเรียก แค่ตัวที่เคยบันทึกในช่วงนั้น

console.log(document.getElementsByClassName('btn'));
//Creating
const message = document.createElement('div');
// อันนี้จะยังไม่ปรากฏใน dom เราต้องเข้ามันเข้า ด้วยตัวเอง

message.classList.add('cookie-message');
// message.textContent() = 'we have cookied'; ไม่นิยมใช้

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>'; //ทำแบบนี้วางทับ

// header.prepend(message); //วางไว้ส่วน หัว
// header.append(message.cloneNode(true)); // เอาไว้ตอนท้าย
//header ไม่สามารถอยู่สองที่ได้

// ถ้าจะทำแบบนั้นต้อง cloneNode

header.after(message); // ทำงานหลังจากหัวข้อ นั้น

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    message.parentElement.removeChild(message); // แบบเก่า
  });

message.style.backgroundColor = '#37383d';
message;

console.log(getComputedStyle(message));
// เอาไว้สำหรับแสดงสไตล์

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// setInterval(function () {
//   document.documentElement.style.setProperty('--color-primary', 'green'); // เปลี่ยนค่ารูทใน CSS
// }, 1000);
// setInterval(function () {
//   document.documentElement.style.setProperty('--color-primary', 'red'); // เปลี่ยนค่ารูทใน CSS
// }, 2000);

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //ค่าที่เข้าถึงจริงๆ
console.log(logo.className);
// สามารถเรียกดูคุณสมบัติต่างๆได้แต่ต้องเป็นคุณสมบัติพื้นฐาน
logo.alt = 'protin'; // เปลี่ยนได้

console.log(logo.getAttribute('desiner'));

console.log(logo.getAttribute('src')); //้จะบอกข้าทีกรอก

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // สิ่งนี้จะโชว์ที่อยู่ด้วย
console.log(link.getAttribute('href')); // โชว์แค่คอนเทนท์

console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

logo.className = 'fluke';
//พยายามอย่าใช้ตัวนี้เพราะว่ามันจะทำการแทนที่คลาสทั้งหมด

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //ตำแหน่งของวัตถุตรงวิลล์พอร์ต
  console.log(s1coords);

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // บอกตำแหน่งของ. สกอร์ ในหน้าเว็บของเรา

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
    // บอกขนาดของสิ่งของนั้นนั้น
  );
  //Scroling
  // แบบเก่า
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // คำสั่งนี้ทำให้เคลื่อนย้ายไปยังตำแหน่งที่มีคลาสนั้น
  //ต้องบวกเพิ่มทำให้อ้างอิงกับตัวหน้าเว็บหลักไม่ใช่แค่วิวพอร์ท

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // //ทำให้มีอนิเมชั่นเลื่อนลง

  section1.scrollIntoView({ behavior: 'smooth' });
  // เหมือนกันและสั้นกว่า
});

const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   // ทำงานเหมือน hover CSS
//   alert('hi');
// });

const alertH1 = function (e) {
  alert('he');
};
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // หน่วงเวลา

//และนี่คือเหตุผลที่ตั้งชื่อให้ฟังชั่นเพื่อรอฟังชั่นออกเพราะต้องการให้มันทำงานแค่ครั้งเดียวที่

// h1.onmouseenter = function (e) {
//   alert('hello');
// }; //ทำงานเหมือนกันกว่าแต่ สั้นกว่า

//191. Event Propagation in Practice

const ramdomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${ramdomInt(0, 255)},${ramdomInt(0, 255)},${ramdomInt(0, 255)})`;

// setInterval(() => {
//   document.documentElement.style.setProperty('--color-primary', randomColor());
// }, 50);

document.querySelector()