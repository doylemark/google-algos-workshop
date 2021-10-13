const isPalindrome = (word) => {
  const hash = {};

  for (let i = 0; i < word.length; i++){
    if(!hash[word[i]]) {
      hash[word[i]] = 1; 
    } else {
      hash[word[i]]++;
    }
  }

  let count = 0;

  for (j in hash) {
    if(hash[j] % 2 !== 0) {
      count++;
    }

    if(count > 1) {
      return false
    }
  }

  return true
};

console.log(isPalindrome("vicic"));
console.log(isPalindrome("iiccv"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("mark"))
console.log(isPalindrome("google"))