const MostFreqChar = s => {
    const memo = {};

    for (let char of s) {
        if (char in memo) {
            memo[char] += 1;
        } else {
            memo[char] = 1;
        }
    }

    let best = null;

    for (let char in memo) {
        if (best === null || memo[best] < memo[char]) {
            best = char;
        }
    }
    return best;
};

console.log(MostFreqChar('bookeeper')); // 'e'
console.log(MostFreqChar('david')); // -> 'd'
