// ASSESSMENT 3: Coding Practical Questions with Jest

clea// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// describe("fibSequence", () => {
//   it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//       expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5,8])
//       expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

// Good Error - fibSequence › returns an array that length containing the numbers of the Fibonacci sequence
// ReferenceError: fibSequence is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Psuedocode
// Input - fibLength1 (6) and fibLength2 (10)
// Output - Fib sequeence with thee number of fib length the user determines

// for loop needed to iterate over the first two numbers in the array array
// Psuedocode continued within the code 

fibSequence = (anyNumber) => {
// anyNumber represents the number the user inputs 
  let fib = [0, 1,];
// fib represents the first two characters of the starting point in the arrary
  let dataArray = [1];
// dataArray represents the first position in the array
  
  for(let i = 2; i <= anyNumber; i++)
// for loop created - i = the starting point in the array, i <= the ending point must be less that or equal to the number the user selects
// i++ will increment
  {
    fib[i] = fib[i - 1] + fib[i - 2]; 
// The last two numbers are added to determine the current value or number of the fib sequence. I used the web for help in solving this particular piece. 
    dataArray.push(fib[i]);
// .push will add the next integer into the sequence
  }
  
  return dataArray
// returns the array of fib sequence
}
 

console.log(fibSequence(fibLength1))
console.log(fibSequence(fibLength2))

// yarn run v1.22.19
// $ /Users/learnacademy/Desktop/golf/Assessments/week-3-assessment-matt92101/node_modules/.bin/jest
//   console.log
//     [ 1, 1, 2, 3, 5, 8 ]

//       at Object.log (code-challenges.test.js:52:9)

//   console.log
//     [
//       1,  1,  2,  3,  5,
//       8, 13, 21, 34, 55
//     ]

//       at Object.log (code-challenges.test.js:53:9)

//  PASS  ./code-challenges.test.js
//   fibSequence
//     ✓ returns an array that length containing the numbers of the Fibonacci sequence (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// describe("arrSort", () => {
//   it("returns an array of the values sorted from least to greatest", () => {
//       expect(arrSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//       expect(arrSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// Psuedocode inside function
// Input: objects studyMinutesWeek1 and studyMinutesWeek2
// Output: the value in the key-value pairs sorted from least to greatest

orderObject1 = () => {
  let arrValue1 = Object.values(studyMinutesWeek1)
  // create a variable using Object.values. This will separate the key-value pairs

      return arrValue1.sort()
  // use .sort to sort from least to greatest

  
}
          
  console.log(orderObject1(studyMinutesWeek1))

  orderObject2 = () => {
    let arrValue2 = Object.values(studyMinutesWeek2)
      // create a variable using Object.values. This will separate the key-value pairs

        return arrValue2.sort()
      // use .sort to sort from least to greatest

  }
            
  console.log(orderObject1(studyMinutesWeek1))  
  console.log(orderObject2(studyMinutesWeek2))
  

// Output:

  // 15, 15, 20, 30, 30, 60, 90

  // 10, 100, 15, 20, 45,  60, 65

  // I also tried the function  using  this logic. Did not work
  //  orderObject1 = () => {
  //      let arrValue = Object.values()
  
  //  return arrValue.sort()
  // }
  // console.log(orderObject(studyMinutesWeek1))
  // THIS APPROACH DOES NOT WORK
  // Also .sort did not sort correctly in line 137 - the number 100 should be last in the array.
  // Jest test failed
}
      
console.log(orderObject1(studyMinutesWeek1))

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

/describe("sumOf", () => {
  it("returns an array of the accumulating sum", () => {
       expect(sumOf(accountTransactions1)).toEqual([100, 83, 60, 51])
       expect(sumOf(accountTransactions2)).toEqual([250, 161, 261, 165])
       expect(sumOf(accountTransactions3)).toEqual([])

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Input: arrays accountTransactions1 accountTransactions2
// Output: arrays with accumulating sums

// Create a function
// Take an array into the function
// The number in the 0 index position will add to the number in the 1 index position 
// The first returned value will always be the same as the first value in the input array
// The second returned value will be the sum of the first two numbers in in the input at index position 0 and 1


const sumOf = (array) => {
    const output = [];
    array.forEach((number, index) => {
    
        if(index === 0){
          output [index] = number;
          
    // looked at different methods of solving this problem on the web. Ran out of time for solving this problems. 
    // Obvious Jest failure
    }
    
    return output




