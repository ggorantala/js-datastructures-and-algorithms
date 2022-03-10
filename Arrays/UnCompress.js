const UnCompress = (s) => {
  const result = [];
  const numbers = '0123456789';

  let i = 0, j = 0;

  while (j < s.length) {
    if (!numbers.includes(s[j])) {
      const number = Number(s.slice(i, j));

      for (let c = 0; c < number; c++) {
        result.push(s[j]);
      }

      j += 1;
      i = j;
    } else {
      j += 1;
    }
  }
  return result.join('');
};

console.log(UnCompress('2c3a1t'));