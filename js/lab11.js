Array.prototype.even = function() {
    return this.filter((num) => num % 2 === 0);
  };
  
  Array.prototype.odd = function() {
    return this.filter((num) => num % 2 !== 0);
  };
  
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Even Numbers are: " + arr.even()); // [2, 4, 6, 8]
console.log("Odd Numbers are: " + arr.odd()); // [1, 3, 5, 7]
