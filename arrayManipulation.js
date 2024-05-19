function processArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input must be an array');
    }
  
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  
  // Example usage:
  const nums = [10, 5, 3, 6, 11];
  const processedNums = processArray(nums);
  
  console.log(processedNums); 