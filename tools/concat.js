function length(array) {
  let count = 0;
  for (let element of array) {
    count++;
  }
  return count;
}

export function concat(array1) {
  let array3 = [];
  let array2 = [5, 6, 7];
  let j = 0;

  for (let i = 0; i < length(array1) + length(array2); i++) {
    if (i < length(array1)) {
      array3[i] = array1[i];
    } else {
      array3[i] = array2[j];
      j++;
    }
  }

  return array3;
}

console.log(concat([1, 2, 3]));
