export default function sum(...num) {
  return num.reduce((total, num) => total + num);
}
