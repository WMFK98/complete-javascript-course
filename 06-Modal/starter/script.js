'use strict';

const modal = document.querySelector('.modal'); //อ้างตำแหน่ง class ใส่จุดเสมอ
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal'); //ถ้ามีหลายอันมันจะโชว์แค่อันแรกเสมอ
const btnOpenModal = document.querySelectorAll('.show-modal'); //โชว์หมดต้อง All array
const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const OpenModal = function () {
  modal.classList.remove('hidden'); //เอาคำสั่งนี้ใส่ทุกปุ่ม //ตอนจัดการ class ไม่ต้องใส่ จุด
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', OpenModal); // btnOpenModal = document.querySelectorAll('.show-modal').addEventListener(....)
}
btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key); //บอกปุ่มที่กด
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //ตรวจหาว่ามีคลาสนั้นอยุ่หรือไม่
    CloseModal();
  }
});
