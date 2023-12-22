// document.cookie = 'username=Umaporn';
// document.cookie = 'course=INT201';
// document.cookie = 'credit=3';
// document.cookie = 'credit=2';

// const getValueCookie = function (key) {
//   const map = document.cookie
//     .split(';')
//     .join('')
//     .split('=')
//     .join(' ')
//     .split(' ');
//   return map[map.indexOf(key) + 1];
// };

// console.log(document.cookie);
// console.log(getValueCookie('credit'));

const form = document.getElementById('form');
const input = document.getElementById('input');
const text = document.getElementById('text');

window.addEventListener('load', function () {
  if (localStorage.getItem('fontSize'))
    text.style.fontSize = `${localStorage.getItem('fontSize')}px`;
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  text.style.backgroundColor = `red`;
  localStorage.setItem('fontSize', input.value);
});
