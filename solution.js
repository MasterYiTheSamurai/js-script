function feladat01(arr) {
  // Remove duplicates from the array
  const uniqueArray = [...new Set(arr)];

  function getCombinations(arr, k) {
    const result = [];
    
    function backtrack(startIndex, currentCombination) {
      if (currentCombination.length === k) {
        result.push([...currentCombination]);
        return;
      }
      
      for (let i = startIndex; i < arr.length; i++) {
        currentCombination.push(arr[i]);
        backtrack(i + 1, currentCombination);
        currentCombination.pop();
      }
    }
    
    backtrack(0, []);
    return result;
  }

  let sum = 0;
  for (let i = 2; i <= uniqueArray.length; i++) {
    const combinations = getCombinations(uniqueArray, i);
    sum += combinations.length;
  }

  return sum;
}

// Példa használat:
const arr = ["sárga", "sárga", "piros", "zöld"];
const result = feladat01(arr);
console.log(result); // Output: 4
  
