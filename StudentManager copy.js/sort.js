//10. return [3, 5, 10, "apple", "banana", "cherry"]
const mixedValues = [10, 'apple', 5, 'banana', 'cherry', 3];

mixedValues.sort((a, b) => {
  if (a - b) return a - b;
  if (typeof a === 'string' && typeof b === f) return 1;
});
