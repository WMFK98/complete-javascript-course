// const submitButton = document.querySelector('#inner-div > button');
// const submitButton = document.querySelector('#inner-div');
// console.log(submitButton);

// submitButton.addEventListener('click', function (e) {
//   //   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
//   console.log(e.currentTarget); //ดักจับ body ด้วย
//   console.log(e.eventPhase);
//   //   console.log(e.currentTarget);
// });

// const d = document.querySelector('#inner-div');
// console.log(submitButton);

// submitButton.addEventListener('click', function (e) {
//   //   console.log(e);
//   console.log(e.target);
//   console.log(e.type);
//   console.log(e.currentTarget); //ดักจับ body ด้วย 2 target , 3 bun
//   console.log(e.eventPhase);
//   //   console.log(e.currentTarget);
// });

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  const username = document.getElementById('input-user');
  const password = document.getElementById('input-psw');
  const output = document.querySelector('p');
  if (username.value || password.value) output.innerText = 'is empty';
  else output.innerText = 'success';
});
