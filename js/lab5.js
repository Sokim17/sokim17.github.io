"use strict"
//1. function max()
function max(number1, number2){
    if(number1 > number2){
        return number1;
    } else{
        return number2;
    }
}
// console.log(max(10,30));

//2. a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(number1, number2, number3){
    if(number1>number2 && number1>number3){
        return number1;
    }else if(number2>number1 && number2>number3){
        return number2;
    }else{
        return number3;
    } 
}
// console.log(maxOfThree(45,15,20));

//3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isVowel(char){
    if(char == "A" || char == "E" || char == "I" || char == "O" || char == "U" || char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        return true;
    } else{
        return false;
    }
}
// console.log(isVowel("w"))

//4. Define a function sum() and a function multiply()
// that sums and multiplies (respectively) all the numbers in an input array of numbers.

function sum(sArray){   
    var sumArray =0; 
    for(let i = 0; i < sArray.length; i++){
        sumArray += sArray[i];
    }
    return sumArray;
}
function multiply(mArray){
    var multiplyArray = 1; 
    for(let i = 0; i < mArray.length; i++){
        multiplyArray *= mArray[i];
    }
    return multiplyArray;
}

// var arr = [1,2,3,4];
// console.log(sum(arr));
// console.log(multiply(arr));

//5. Define a function reverse() that computes the reversal of a string.
function reverse(string){
    
    const reverseArray = [];
    const stringLength = string.length -1;
    for(let i = stringLength; i >= 0; i--){
        reverseArray.push(string[i]);
    }
    return reverseArray.join('');
}
// console.log(reverse('jag testar'));

//6. Write a function findLongestWord() 
//that takes an array of words and returns the length of the longest one.

function findLongestWord(arr){
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
}
// var array = ["Pizzaaaaaaaaaa", "Hamburger", "nuggets"]
// console.log(findLongestWord(array));

//7. Write a function filterLongWords() that takes an array of words and an integer i and
// returns a new array containing only those words that were longer than i characters
function filterLongWords(names){
    return names.length > i;
}
var i = 6;
const nameList = ["Sokim", "Phearun", "Mosenith", "Taingy"];
// console.log(nameList.filter(filterLongWords));

//8. Write a function named, computeSumOfSquares, that takes as input,
//an array of numbers and calculates and returns the sum of the squares 
//of each number in the input array

function computeSumOfSquares(numbers){
    return numbers.map(x => { return Math.pow(x, 2);}).reduce((x,y) => x + y);
}
// var number = [1,2,3];
// console.log(computeSumOfSquares(number));

//9. printOddNumbersOnly, that takes as input, an array of integral numbers and it finds 
//and prints only the numbers which are odd
function printOddNumbersOnly(arrOfNumbers){
    var oddNumbers = [];
    for(let i=0; i<arrOfNumbers.length; i++){
        if(arrOfNumbers[i] % 2 != 0){
            oddNumbers.push(arrOfNumbers[i]);
        }
    }
    return oddNumbers;
}
// var number = [1,2,3,44,55,35,74];
// console.log(printOddNumbersOnly(number));

//10. computeSumOfSquaresOfEvensOnly
function computeSumOfSquaresOfEvensOnly(numbers){
    var sum = 0;
    for(var i of numbers){
        if(i % 2 == 0){
            sum += i * i;
        }
    }
    return sum;
}
// var number = [1,2,3,4,5];
// console.log(computeSumOfSquaresOfEvensOnly(number));

//11. Array.reduce(…) function re-implement your functions, sum(…) and multiply(…)

function sum(arr){
    var i = 0;
    var sum = arr.reduce((x, y) => x + y, i);
    return sum;
}

function multiply(arr){
    var i = 1;
    var sum = arr.reduce((x, y) => x * y, i);
    return sum;
}
// const arrays = [1, 2, 3, 4];
// console.log(sum(arrays));
// console.log(multiply(arrays));

//12. findSecondBiggest
function findSecondBiggest(arr){
    var max = arr[0];
    var secondBiggest = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            secondBiggest = arr[i-1];
        }
    }
    return secondBiggest;
}
// const arrays = [1, 2, 3, 4];
// console.log(findSecondBiggest(arrays));

//13. printFibo, that takes as input,a given length, n, and any two starting numbers a and b, 
//and it prints-out the Fibonacci sequence,
function printFibo(n, a, b){
    var fibonacci = [];
    fibonacci[0] = a;
    fibonacci[1] = b;
    var nextValue = 0;
    if(n <= 0){
        return "invalid";
    } else{
        for(let i = 2; i < n; i++)
        {
            nextValue = a + b;
            fibonacci.push(nextValue)
            a = b;
            b = nextValue;
        }
    }
    return fibonacci;
}
// console.log(printFibo(12, 0, 1))

//14.1.
function sum(array){
    return array.filter(x => x > 20)
    .reduce((x, y) => x + y);
}
// const number = [12, 30, 40, 3, 60];
// console.log(sum(number))

function getNewArray(arr){
    var newArray = [];
    return arr.filter(x => {
        if(x.length >= 5 && x.includes('a')){
            newArray.push(x);
            return newArray;
        }
    });
}
// var array = ["Pizzaaaaaaaaaa", "Hamburger", "nuggets"]
// console.log(getNewArray(array))

// compute the average grade of all students who took cs303 course 
//which returns an object which key is students' names, values is the average.
//   const students = [
//     { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
//     { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
//     { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
//     { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
//     { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
//   ];
  
//   const course = 'cs303';
  
//   const filteredStudents = students.filter(student => student.courses.includes(course));
  
//   const averages = filteredStudents.reduce((acc, student) => {
//     const total = student.grades.reduce((sum, grade) => sum + grade, 0);
//     const count = student.grades.length;
//     const average = total / count;
//     acc[student.name] = average;
//     return acc;
//   }, {});
  
// //   console.log(averages);
//   // Output: { Quincy: 93.5, Sam: 86.5, Katie: 71.5 }

//   if (true) {
//     let str = "hello";
//     // console.log(str);//hello
// }
//     // console.log(str); //error

//     function foo(arg) {
//         if (arg) {
//         var str = "hello";
//         return str;
//         }
//     }
//         let f = foo(1);
//         // console.log(f)
//         // console.log(str);
        
        