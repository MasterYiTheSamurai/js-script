function feladat01(n, k) {
    function factorial(num) {
      if (num === 0 || num === 1) {
        return 1;
      }
      return num * factorial(num - 1);
    }
  
    const combinationsCount = factorial(n) / (factorial(k) * factorial(n - k));
    return combinationsCount;
  }
  
  // Példa használat:
  const elements = ["piros", "kek", "zold"];
  const n = elements.length;
  let totalCombinations = 0;
  
  for (let k = 1; k <= n; k++) {
    totalCombinations += feladat01(n, k);
  }
  
  console.log(totalCombinations);
  