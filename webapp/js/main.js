import { Employee } from './model/employee.js';
import { Person } from './model/person.js';

const john = new Person("John Doe", new Date("1990-01-01"));
const jane = new Person("Jane Smith", new Date("1985-05-15"));
const bob = new Person("Bob Johnson", new Date("1970-12-31"));

const people = [john, jane, bob];
for(let i=0; i<people.length; i++){
    console.log(people[i].toString());
}

var title = "Software Engineer";
const jim = new Employee("Jim Hanson", 245,990.00, new Date("2023-01-01"));
console.log(jim.doJob(title));