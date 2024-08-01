

const employees = []

class Employees {
    constructor(name, jobTitle, salary, status = "Full Time") {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status = status;
        // for (let i = 0; i < employees.length, i++){
        //     employees.push() 
    }
    printEmployeeForm = function(){
        console.log(this.name, this.jobTitle, this.salary, this.status)
    }
}

// Employees.prototype.status =  function(){
//     console.log(this.status)
// }
    
    // Adding New Employees?
const hireEmployee = (name, jobTitle, salary, status) => {
    let num = new Employees(name, jobTitle, salary, status)
    employees.push(num)
}

hireEmployee('Joe', "Rep", "$40,000")
hireEmployee("Emily", "Manager", "$60,000")    
hireEmployee("Shonda","Analyst", "$70,000", "Part-Time") 
hireEmployee("Issac", "CEO", "$500,000")   

// let employee1 = new Employees("Joe", "Rep", "$40,000") 
// let employee2 = new Employees("Emily", "Manager", "$60,000")
// let employee3 = new Employees("Shonda","Analyst", "$70,000", "Part-Time")
// employees.push(employee1,employee2,employee3)
// console.log('employees', employees)
// employee1.printEmployeeForm(employee1)

for(i = 0; i < employees.length; i++){
    employees[i].printEmployeeForm()
}

// console.log(employee1, employee2, employee3)