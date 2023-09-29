// const arrayStats = function (arr = []) {
//   const answer = {};
//   if (arr === null || arr == undefined) return answer;
//   answer.sum = arr.reduce((s, i) => i + s);
//   answer.avg = answer.sum / arr.length;
//   answer.min = Math.min(...arr);
//   answer.max = Math.max(...arr);
//   return answer;
// };
// console.log(arrayStats([1, 2, 3, 4]));

const mail = {
  recipent: {
    firstname: 'jjj',
    lastname: 'kkk',
  },
  sentDetail: {
    sentdate: 'kkk',
    host: {
      name: 'sit',
    },
  },
};

const {
  recipent: { firstname, lastname },
  sentDetail: { host },
} = mail;

// console.log(firstname, lastname, host);

('');
const keywords = ['dEstructuring', 'spread', 'rest', 'prototypes', 'function'];

// console.log(first);

const mails = [
  {
    id: 12323502,
    sender: {
      firstname: 'Umaporn',

      lastname: 'Sup',
    },

    subject: 'Welcome to SIT, KMUTT',
  },
  {
    id: 55588811,
    sender: {
      firstname: 'Tisanai',
      lastname: 'Chat',
    },
    subject: 'Reminder: INT201 Class',
  },
];
//1
const first = keywords.reduce((answer, word) => answer + word.charAt(0), '');
//2
const allId = mails.map(({ id }) => id);
console.log(allId);
//3
const es = keywords.filter((word) => word.toLocaleLowerCase().includes('es'));
console.log(es);
