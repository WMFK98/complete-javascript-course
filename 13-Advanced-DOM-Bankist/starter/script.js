'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');

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

// const allSection = document.querySelectorAll('.setion');

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

// const alertH1 = function (e) {
//   alert('he');
// };
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // หน่วงเวลา

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

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget); //แสดงเป้าหมายที่จิ้มครั้งแรก e.target
//   //currentTarget เป้าหมายหลายตัว
//   console.log(e.currentTarget === this); //เมกือนกันทุกประการ
//   // e.stopPropagation(); //หยุดการทำงานตัวอื่น
// });

// document.querySelector('.nav__links').addEventListener(
//   'click',
//   function (e) {
//     e.preventDefault();
//     this.style.backgroundColor = randomColor();
//     console.log('conytainer', e.target, e.currentTarget);
//   },
//   true
// );

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     e.preventDefault();
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   true //คือเอาจากตัวลึกใน dom ก่อนแล้วตอนส่งกลับค่อย call ตัวที่อยู่ด้านบน
// );

//แบบนี้ไม่แนะนำเพราะมันเป็นการ loop ถ้ามี 10000 จะไม่มีประสิทธิถ้าพ
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//ต้องใช้ Propagation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1')

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //บอกองค์ประกอบลูก
console.log(h1.children); //บอกeleลูก

// setInterval(() => {
h1.firstElementChild.style.color = randomColor();
h1.lastElementChild.style.color = randomColor();

// }, 100);
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.backgroundColor = 'var(--gradient-secondary)'; //เข้าถึงตัวใหญ่ๆได้ทั้งหมด

console.log(h1.previousElementSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

const tabsContenier = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

//activate-content-area
tabsContenier.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); // หากหาไม่เจอค่ะจะเป็น null
  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  console.log(clicked.dataset.tab);
});
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibings.forEach(el => {
      // ต้องระวังการตั้งรูปแบบฟังก์ชันไว้ให้ดีเพราะถ้าตั้งแบบ function this keyword จะใช้เป็นของตัวในนั้นของมันแทนที่จะใช้ของ handleHover
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//manu animation add
nav.addEventListener('mouseover', handleHover.bind(0.5)); // สามารถรับได้แค่พารามิเตอร์เดียวที่จะใส่อัตโนมัติ
nav.addEventListener('mouseout', handleHover.bind(1)); // สิ่งนี้คือการกำหนดค่าของ this ให้กับตัวในฟังก์ชันเพื่อเอาไปใช้
const initalralCoords = section1.getBoundingClientRect();

// //sticky nav ไม่แนะนำเพราะเป็นการทำงานที่หนักหน่วง
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initalralCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Better Way: The Intersection Observer API
// const obsCallback = function (entires, observer) {
//   alert('j');
//   entires.forEach(entire => console.log(entire));
// };
// const obsOption = {
//   root: null,
//   threshold: [0, 0.2], // สามารถ เห็น viewport ตาม ตามค่าเป็นเปอร์เซ็นต์ได้ให้แสดงตามที่กำหนดอย่างเช่น 0% 20%  ค่อยแสดง
// };

// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);
const navHight = nav.getBoundingClientRect().height;
const navObserver = function (entires) {
  const [entire] = entires;
  if (!entire.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(navObserver, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHight}px`,
});

//ปุ่ม option
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // if (clicked.classList.contains('operations__tab')) {
  if (!clicked) return; //check same

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  //ลบตัวเดิม
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active'); //มาจาก dataset-tap
headerObserver.observe(header);

//Revealing Elements on Scroll

const allSection = document.querySelectorAll('.section');

const revealsSec = function (entires, observe) {
  const [entire] = entires;
  console.log(entire);
  if (!entire.isIntersecting) return;
  entire.target.classList.remove('section--hidden'); //ตัวที่บ่งบอกถึงปัจจุบันที่กำลังสังเกตอยู่
  observe.unobserve(entire.target); // หลังจากแสดงแล้วก็ไม่ต้องสังเกตอีก
};

const secObserver = new IntersectionObserver(revealsSec, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(sec => {
  secObserver.observe(sec);
  sec.classList.add('section--hidden');
});
