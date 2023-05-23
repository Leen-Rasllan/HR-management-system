



function generateEmployeeId() {
    var employeeId = "";
    var digits = "0123456789";

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * digits.length);
        employeeId += digits.charAt(randomIndex);
    }

    return employeeId;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  function calculateNetSalary(salary) {
    var taxPercent = 7.5;
    var taxAmount = (salary * taxPercent) / 100;
    var netSalary = salary - taxAmount;
    return netSalary;
  }
  

  var salaryTable = {
    level1: { minSalary: 30000, maxSalary: 50000 },
    level2: { minSalary: 50001, maxSalary: 70000 },
    level3: { minSalary: 70001, maxSalary: 90000 },
  };
  var salaryTable = {
    Junior: { minSalary: 30000, maxSalary: 50000 },
    midSenior: { minSalary: 50001, maxSalary: 70000 },
    Senior: { minSalary: 70001, maxSalary: 90000 },
  };
  var salaryTable = {
    level1: { Junior: 30000, maxSalary: 50000 },
    level2: { midSenior: 50001, maxSalary: 70000 },
    level3: { Senior: 70001, maxSalary: 90000 },
  };

var employee1 = {
    name: "Leen Rasllan",
    age: 22,
    department: "Software Engineer",
    salary: 500,
    level: "Junior",
    id: generateEmployeeId()
};
var employee2 = {
    name: "Rama Rasllan",
    age: 19,
    department: "Marketing",
    salary: 800,
    level: "Junior",
    id: generateEmployeeId()
};
var employee3 = {
    name: "Abdulqader Mohammed",
    age: 32,
    department: "Administration",
    salary: 5000,
    level: "Mid-Senior",
    id: generateEmployeeId()
};
var employee4 = {
    name: "Noor Alahwal",
    age: 26,
    department: "Development",
    salary: 50,
    level: "Mid-Senior",
    id: generateEmployeeId()
};
var employee5 = {
    name: "Aysha Alrawashdeh",
    age: 30,
    department: "Web Design",
    salary: 1000,
    level: "Senior",
    id: generateEmployeeId()
};
var employee6 = {
    name: "Wessal Qintar",
    age: 27,
    department: "Finance",
    salary: 100,
    level: "Senior",
    id: generateEmployeeId()
};

var employeeInfoElement = document.getElementById("employeeInfo");

var levelInfo = salaryTable[employee.level];
var randomSalary = getRandomNumber(levelInfo.minSalary, levelInfo.maxSalary);


var netSalary = calculateNetSalary(randomSalary);


employee1.salary = randomSalary;
employee1.netSalary = netSalary;


var employeeInfoElement = document.getElementById("employeeInfo");


var employeeInfo = "<h2>Employee 1:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";
employeeInfoElement.innerHTML = employeeInfo;


var employeeInfo = "<h2>Employee 2:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";

employeeInfoElement.innerHTML = employeeInfo;


var employeeInfo = "<h2>Employee 3:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";
employeeInfoElement.innerHTML = employeeInfo;

var employeeInfo = "<h2>Employee 4:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";
employeeInfoElement.innerHTML = employeeInfo;

var employeeInfo = "<h2>Employee 5:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";

employeeInfoElement.innerHTML = employeeInfo;

var employeeInfo = "<h2>Employee 6:</h2>" +
    "<p>Name: " + employee1.name + "</p>" +
    "<p>Age: " + employee1.age + "</p>" +
    "<p>Department: " + employee1.position + "</p>" +
    "<p>Salary: " + employee1.salary + "</p>" +
    "<p>ID: " + employee1.id + "</p>";


employeeInfoElement.innerHTML = employeeInfo;




console.log("Employee 1:", employee1);
console.log("Employee 2:", employee1);
console.log("Employee 3:", employee2);
console.log("Employee 4:", employee3);
console.log("Employee 5:", employee3);
console.log("Employee 6:", employee3);












// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to calculate net salary after applying tax
  function calculateNetSalary(salary) {
    var taxPercent = 7.5;
    var taxAmount = (salary * taxPercent) / 100;
    var netSalary = salary - taxAmount;
    return netSalary;
  }
  
  // Function to generate a unique four-digit employee ID number
  function generateEmployeeId() {
    var employeeId = "";
    var digits = "0123456789";
  
    for (var i = 0; i < 4; i++) {
      var randomIndex = Math.floor(Math.random() * digits.length);
      employeeId += digits.charAt(randomIndex);
    }
  
    return employeeId;
  }
  
  // Employee level and corresponding salary ranges
  var salaryTable = {
    level1: { minSalary: 30000, maxSalary: 50000 },
    level2: { minSalary: 50001, maxSalary: 70000 },
    level3: { minSalary: 70001, maxSalary: 90000 },
  };
  
  // Get the element where the employee information will be displayed
  var employeeInfoElement = document.getElementById("employeeInfo");
  
  // Array to hold employee objects
  var employees = [];
  
  // Generate and store information for 6 employees
  for (var i = 1; i <= 6; i++) {
    var employee = {
      id: generateEmployeeId(), // Generate unique employee ID
      name: "Employee " + i,
      age: getRandomNumber(20, 60),
      position: "Position " + i,
      level: "level" + getRandomNumber(1, 3),
    };
  
    var levelInfo = salaryTable[employee.level];
    var randomSalary = getRandomNumber(levelInfo.minSalary, levelInfo.maxSalary);
    var netSalary = calculateNetSalary(randomSalary);
  
    employee.salary = randomSalary;
    employee.netSalary = netSalary;
  
    employees.push(employee);
  }
  
  // Create a string with the employee information for all employees
  var employeeInfo = "";
  for (var j = 0; j < employees.length; j++) {
    var emp = employees[j];
    employeeInfo +=
      "<h2>Employee ID: " + emp.id + "</h2>" +
      "<p>Name: " + emp.name + "</p>" +
      "<p>Age: " + emp.age + "</p>" +
      "<p>Position: " + emp.position + "</p>" +
      "<p>Level: " + emp.level + "</p>" +
      "<p>Salary: $" + emp.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + emp.netSalary + "</p><br>";
  }
  
  // Set the HTML content of the employeeInfoElement
  employeeInfoElement.innerHTML = employeeInfo;




