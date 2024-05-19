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

  function formatArrayString(strings, numbers) {
    if (!Array.isArray(strings) || !Array.isArray(numbers)) {
      throw new Error('Both inputs must be arrays');
    }
  
    if (strings.length !== numbers.length) {
      throw new Error('Both arrays must have the same length');
    }
  
    return strings.map((str, index) => {
      const num = numbers[index];
      return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
  }
  
  
  const strings = ["Akoto", "camera", "bicycle", "train", "practice"];
  const numbers = [4, 3, 9, 14, 13];
  
  const modifiedStrings = formatArrayString(strings, numbers);
  
  console.log(modifiedStrings); 
  
  