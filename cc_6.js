//Coding Challenge 6

//create base class
class Employee {
    constructor(name, department) {
        this.name =  name;
        this.department = department;
    }
    describe() {
        return 
    `${this.name} works in ${this.department}.`; 
    }
}