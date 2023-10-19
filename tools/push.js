function length(array) {
  let count = 0;
  for (let element of array) {
    count++;
  }
  return count;
}

export function push(a, b) {
  const arraySize = length(a);
  a[arraySize] = b;
  return a;
}
