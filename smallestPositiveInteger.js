function smallestPositiveInteger(A) {
  let smallestPositive = 1;
  const set = new Set(A); // Use a set to remove duplicate elements and improve lookup time

  while (set.has(smallestPositive)) {
    smallestPositive++;
  }

  return smallestPositive;
}