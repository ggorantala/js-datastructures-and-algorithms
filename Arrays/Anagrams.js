const Anagrams = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  const memo = {};

  for (let ch of s1) {
    if (!(ch in memo)) {
      memo[ch] = 1;
    } else {
      memo[ch] += 1;
    }
  }

  for (let ch of s2) {
    if (ch in memo) {
      memo[ch] -= 1;
    } else {
      return false;
    }
  }

  for (let ch in memo) {
    if (memo[ch] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(Anagrams('restful', 'fluster')); // -> true
console.log(Anagrams('cats', 'tocs')); // -> false