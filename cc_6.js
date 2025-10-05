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

//create Manager subclass
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department); //super calls constructor from parent class
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name} manages a team of ${this.teamSize} people in ${this.department}.`;
    }
}

//create samples of employees and managers

const emp1 = new Employee("Jason Vorhees", "Risk Management");
const emp2 = new Employee("Michael Myers", "Facility Management");
const emp3 = new Employee("Frederick Krueger", "Information Technology");

const mgr1 = new Manager("Thomas Jarvis", "Risk Management", 13);
const mgr2 = new Manager("Laurie Strode", "Facility Management", 6);
const mgr3 = new Manager("Nancy Thompson", "Information Technology", 7);

// console.log(emp1.describe());
// console.log(mgr1.describe());

//create class for company

class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee); //employee includes employees and managers
    }
    listEmployees() {
        for (const employee of this.employees) {
            console.log(employee.describe());
        }
    }
} 

//instantiate company object

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(mgr1);
company.addEmployee(mgr2);
company.addEmployee(mgr3);

company.listEmployees();


// tested w/ no syntax errors and console.log appears correct