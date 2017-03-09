var employeeArr = [];

var employeeOne = employeeArr.push(new Employee("Phil", "Lead Bungholer", "$60/hour"));
var employeeTwo = employeeArr.push(new Employee("Garth", "Junior Scallywag", "$5.15/hour"));
var employeeThree = employeeArr.push(new Employee("Marlena", "Director of Eye Candy", "$69/hour", "Part Time"));

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name, "Job Title: " + this.jobTitle, "Salary: " + this.salary, "Status: " + this.status);
    }
}

employeeArr[0].printEmployeeForm();
employeeArr[1].printEmployeeForm();
employeeArr[2].printEmployeeForm();