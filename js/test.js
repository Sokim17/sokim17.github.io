function sortByName(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].name > arr[j].name) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  let students = [
    { name: "John", age: 20 },
    { name: "Alice", age: 22 },
    { name: "Bob", age: 21 },
  ];
  console.log(sortByName(students)); // [{name: "Alice", age: 22}, {name: "Bob", age: 21}, {name: "John", age: 20}]
  