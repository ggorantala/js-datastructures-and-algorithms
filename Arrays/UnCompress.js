/**
 *
 * @param s
 * @returns {string}
 * @constructor
 *
 * n = number of groups
 * m = max num found in any group
 * Time: O(n*m)
 * Space: O(n*m)
 */
const UnCompress = (s) => {
  const result = [];
  const numbers = '0123456789';

  let i = 0;
  let j = 0;

  while (j < s.length) {
    let ch = s[j];
    if (numbers.includes(ch)) {
      j += 1;
    } else {
      let number = Number(s.slice(i, j));

      for (let k = 0; k < number; k += 1) {
        result.push(ch);
      }
      j += 1;
      i = j;
    }
  }

  return result.join('');
};

console.log(UnCompress('2c3a1t'));