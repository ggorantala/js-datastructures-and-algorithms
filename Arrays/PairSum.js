const PairSum = (numbers, targetSum) => {
  const memo = {};

  for(let i = 0; i < numbers.length; i += 1){
    let difference = targetSum - numbers[i];
    
    if(difference in memo) {
      return [i, memo[difference]];
    }
    
    memo[numbers[i]] = i;
  }
  
  return [];
}
