let price = 0;
export function addPrice(number) {
  price = price + number;
}
export function reducePrice(number) {
  price = price - number;
}
function getPrice() {
  return price;
}

export { addPrice as sum, reducePrice, getPrice };
