function length(array) {
  let count = 0;
  for (let element of array) {
    count++;
  }
  return count;
}

export function pop(array1) {
  const lastIndex = length(array1) - 1;
  const newArray = [];
  for (let i = 0; i < lastIndex; i++) {
    newArray[i] = array1[i];
  }

  return newArray;
}

console.log(pop([1, 2, 3, 4]));
