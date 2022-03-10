const IsPrime = n => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(IsPrime(2));
console.log(IsPrime(17));
console.log(IsPrime(12));
console.log(IsPrime(29));