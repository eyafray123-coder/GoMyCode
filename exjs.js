// STRING MANIPULATION FUNCTIONS

// 1. Reverse a String
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // olleh

// 2. Count Characters
function countCharacters(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

console.log(countCharacters("hello world")); // 11

// 3. Capitalize Words
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = "";

    for (let j = 0; j < word.length; j++) {
      if (j === 0) {
        newWord = newWord + word[j].toUpperCase();
      } else {
        newWord = newWord + word[j];
      }
    }

    if (i === words.length - 1) {
      result = result + newWord;
    } else {
      result = result + newWord + " ";
    }
  }

  return result;
}

console.log(capitalizeWords("hello world")); // Hello World

// ARRAY FUNCTIONS

// 4. Find Maximum and Minimum
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMax([3, 7, 2, 9, 4])); // 9
console.log(findMin([3, 7, 2, 9, 4])); // 2

// 5. Sum of Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15

// 6. Filter Array (example: keep only even numbers)
function filterEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// MATHEMATICAL FUNCTIONS

// 7. Factorial
function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// 8. Prime Number Check
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// 9. Fibonacci Sequence
function fibonacci(n) {
  let sequence = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  }

  return sequence;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
