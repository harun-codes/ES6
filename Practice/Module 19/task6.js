function createIdGenerator() {
  let counter = 1;

  return function () {
    return counter++;
  };
}

const nextId = createIdGenerator();

console.log(nextId()); // 1
console.log(nextId()); // 2
console.log(nextId()); // 3
console.log(nextId()); // 4