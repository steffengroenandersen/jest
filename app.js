function sum(a, b) {
  if (a + b > 10) {
    return null; // is not tested
  }
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function cloneArray(array) {
  return [...array];
}

function getPerson(name, age, isDeveloper) {
  return {
    name: name,
    age: age,
    isDeveloper: isDeveloper,
  };
}

module.exports = {
  sum,
  substract,
  cloneArray,
  getPerson,
};
