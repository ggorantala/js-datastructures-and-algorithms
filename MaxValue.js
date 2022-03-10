const MaxValue = (nums) => {
  let max = -Infinity;

  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }

  return max;
};

console.log(MaxValue([4, 7, 2, 8, 10, 9]));