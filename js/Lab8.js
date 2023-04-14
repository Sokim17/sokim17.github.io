// Question 1: Object literal
let student = {
    firstName : "",
    lastName : "",
    grades : [],
    inputNewGrade : function(newGrade){
        for(let i=0; i<newGrade.length; i++){
            this.grades.push(newGrade[i]);
        }
        console.log(this.grades)
    },
    computeAverageGrade : function(){
        var sum = 0;
        for(let x in this.grades){
            sum += x;
        }
        return sum/this.grades.length;
    }
};

let grade = [67,54,45,55];
console.log(student.inputNewGrade(grade));
console.log(student.grades);
console.log(student.computeAverageGrade());

let student1 = Object.create(student);
student1.name = "Sokim Nam";
student1.age = 24;
student1.grade = [34,45,35,55];

let student2 = Object.create(student);
student2.name = "Peter Nam";
student2.age = 20;
student2.grade = [44,32,65,34];

let studentArray = [
    { name : student1.name, age:student1.age, grade: student1.grade},
    { name : student2.name, age:student2.age, grade: student2.grade}
];

function calculateGrade(studentList){
    for(let i=0; i<studentList.length;i++){
        var total = 0;
        var count= 0;
        var average = 0;
        for(let j=0; j<studentList[i].grade.length; j++){
            total += studentList[i].grade[j];
            count++;
        }
        average = total/count;
        console.log(`The result is: ` + average);
    }
    return "------------------";
    
}
 console.log(calculateGrade(studentArray));

//Question 2: Constructor Function
function Student(firstName, lastName, grades){
    this.fName = firstName;
    this.lName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function(newGrade){
    for(let i=0; i<newGrade.length; i++){
        console.log(newGrade[i]);
        return this.grades.push(newGrade[i]);
     }
};
Student.prototype.computeAverageGrade= function(){
    var sum = 0;
    for(let x in Student.grades){
        sum += x;
    }
    return sum/Student.grades.length;
};

function sortByName(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].firstName > arr[j].firstName) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const student1 = new Student("Sokim", "Nam", [67,54,45,55]);
const student2 = new Student("Kinin", "Roza", [55,34,48,100]);
const student3 = new Student("Ratanak", "Chhay", [45,67,99,12]);

let studentArray = [
        { firstName : student1.fName, lastName:student1.lName, grade: student1.grades},
        { firstName : student2.fName, lastName:student2.lName, grade: student2.grades},
        { firstName : student3.fName, lastName:student3.lName, grade: student3.grades}
];
// console.log(calculateGrade(studentArray));
studentArray.sort((a, b) => a.firstName.localeCompare(b.firstName));

// console.log(studentArray)
console.log(sortByName(studentArray))
