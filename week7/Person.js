class Person {
  #fullName;
  #birthDate;
  #age;
  constructor(fullName, birthDate = []) {
    this.#fullName = fullName;
    this.#birthDate = new Date(...birthDate);
    this.#age =
      new Date(new Date(Date.now()) - this.#birthDate).getFullYear() - 1970; //สูตรนี้จะคำนวณเวลาที่เปะเลย
  }
  get fullName() {
    return this.#fullName;
  }
  get birthDate() {
    return this.#birthDate;
  }
  get age() {
    return this.#age;
  }

  equalPerson(other = this) {
    return this.#fullName.toLowerCase() === other.#fullName.toLowerCase();
  }
}

const p1 = new Person('wichira', [2004, 4]);
const p2 = new Person('n', [2003, 11, 5]);

// console.log(p1.equalPerson(p2));
console.log(2023 - 1970);
