# StudentID: 11255826


# Task one
Input Validation: The function first checks if the input is an array using Array.isArray.
Transformation: It uses the map method to create a new array. The map method applies a function to each element of the array.
Ternary Condition: Within the map method, a ternary operator (num % 2 === 0 ? num * num : num * 3) checks if a number is even or odd.
If the number is even (num % 2 === 0), it squares the number (num * num).
If the number is odd, it triples the number (num * 3).
Return: The map method returns a new array with the transformed numbers.

# Task two
Input Validation: The function first checks if both inputs are arrays using Array.isArray.
Length Check: It ensures that both arrays have the same length.
Transformation: The function uses the map method to create a new array of strings. For each string:
If the corresponding number is even, the string is converted to uppercase using str.toUpperCase().
If the number is odd, the string is converted to lowercase using str.toLowerCase().
Return: The map method returns a new array with the modified strings.

# Task three 
Input Validation: The function first checks if the input is an array using  Array.isArray.
Length Check: It ensures that both arrays have the same length.
Mapping: The map function is used to iterate over the originalNames array. For each originalName, an object is created with:
id: This is the index plus 1 (to start from 1 instead of 0).
originalName: The current name from the originalNames array.
modifiedName: The corresponding name from the modifiedNames array, accessed using the same index.
