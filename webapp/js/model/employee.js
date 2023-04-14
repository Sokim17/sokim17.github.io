import {Person} from './person.js';

export class Employee extends Person{
    salary;
    hireDate;
    constructor(name, salary, hireDate){
        super(name);
        this.salary = salary;
        this.hireDate = hireDate;
    }
    doJob(jobTitle){
        return `${this.name} is a ${jobTitle} who earns ${this.salary}`;
    }
}