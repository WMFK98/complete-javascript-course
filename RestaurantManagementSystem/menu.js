class MenuItem {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const test = ['a', 'b', 'c', 'd', 'e'];

test.sort((a, b) => 0);

console.log(test);
