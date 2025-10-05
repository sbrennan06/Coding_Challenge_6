//Coding Challenge 6

//create base class
class Employee {
    constructor(name, department) {
        this.name =  name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in ${this.department}.`; 
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); //super calls constructor from parent class
    }
    describe() {
        return `${this.name} manages a team of ${this.teamSize} people in ${this.department}`;
    }
}