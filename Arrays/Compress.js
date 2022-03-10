const Compress = (s) => {
  const result = [];

  let i = 0, j = 0;

  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      let num = j - i;
      if (num === 1)
        result.push(s[i]);
      else
        result.push(String(num), s[i]);
      i = j;
    }
  }
  return result.join('');
};

console.log(Compress('ccaaatsss')); // -> '2c3at3s'
console.log(Compress('ssssbbz')); // -> '4s2bz'
console.log(Compress('ppoppppp')); // -> '2po5p'