export class Person{
    name;
    dateOfBirth;

    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    getName(){
        return this.name;
    }
    setName(name){
        if(name.length < 4){
            alert("Name is too short.");
        }else{
            this.name = name;
        }
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    setDateOfBirth(dob){
        this.dateOfBirth = dob;
    }
    toString(){
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`; 
    }
}