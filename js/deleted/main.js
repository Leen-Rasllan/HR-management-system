
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  function calculateNetSalary(salary) {
    var taxPercent = 7.5;
    var taxAmount = (salary * taxPercent) / 100;
    var netSalary = salary - taxAmount;
    return netSalary;
  }
  

  function generateEmployeeId() {
    var employeeId = "";
    var digits = "0123456789";
  
    for (var i = 0; i < 4; i++) {
      var randomIndex = Math.floor(Math.random() * digits.length);
      employeeId += digits.charAt(randomIndex);
    }
  
    return employeeId;
  }
  

  var salaryTable = {
    level1: { minSalary: 30000, maxSalary: 50000 },
    level2: { minSalary: 50001, maxSalary: 70000 },
    level3: { minSalary: 70001, maxSalary: 90000 },
  };
  

  var employeeInfoElement = document.getElementById("employeeInfo");
  

  var employees = [];
  

  for (var i = 1; i <= 6; i++) {
    var employee = {
      id: generateEmployeeId(),
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
  
 
  employeeInfoElement.innerHTML = employeeInfo;







 function generateEmployeeId() {
  var employeeId = "";
  var digits = "0123456789";

  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * digits.length);
    employeeId += digits.charAt(randomIndex);
  }

  return employeeId;
}


function calculateNetSalary(salary) {
  var taxPercent = 7.5;
  var taxAmount = (salary * taxPercent) / 100;
  var netSalary = salary - taxAmount;
  return netSalary;
}


var salaryTable = {
  Senior: { min: 1500, max: 2000 },
  "Mid-Senior": { min: 1000, max: 1500 },
  Junior: { min: 500, max: 1000 },
};


var employee1 = {
  employeeId: generateEmployeeId(),
  fullName: "Ghazi Samer",
  department: "Administration",
  level: "Senior",
  imageUrl: "https://example.com/ghazi_samer.jpg",
};

var employee2 = {
  employeeId: generateEmployeeId(),
  fullName: "Lana Ali",
  department: "Finance",
  level: "Senior",
  imageUrl: "https://example.com/lana_ali.jpg",
};

var employee3 = {
  employeeId: generateEmployeeId(),
  fullName: "Tamara Ayoub",
  department: "Marketing",
  level: "Senior",
  imageUrl: "https://example.com/tamara_ayoub.jpg",
};

var employee4 = {
  employeeId: generateEmployeeId(),
  fullName: "Safi Walid",
  department: "Administration",
  level: "Mid-Senior",
  imageUrl: "https://example.com/safi_walid.jpg",
};

var employee5 = {
  employeeId: generateEmployeeId(),
  fullName: "Omar Zaid",
  department: "Development",
  level: "Senior",
  imageUrl: "https://example.com/omar_zaid.jpg",
};

var employee6 = {
  employeeId: generateEmployeeId(),
  fullName: "Rana Saleh",
  department: "Development",
  level: "Junior",
  imageUrl: "https://example.com/rana_saleh.jpg",
};

var employee7 = {
  employeeId: generateEmployeeId(),
  fullName: "Hadi Ahmad",
  department: "Finance",
  level: "Mid-Senior",
  imageUrl: "https://example.com/hadi_ahmad.jpg",
};

// Function to render employee name and salary
function renderEmployee(employee) {
  var randomSalary = Math.floor(
    Math.random() * (salaryTable[employee.level].max - salaryTable[employee.level].min + 1) +
      salaryTable[employee.level].min
  );
  var netSalary = calculateNetSalary(randomSalary);

  document.write(
    "Employee name: " + employee.fullName + "<br>" +
    "Employee salary: " + randomSalary + "<br><br>"
  );
}

// Call the renderEmployee function for each employee
renderEmployee(employee1);
renderEmployee(employee2);
renderEmployee(employee3);
renderEmployee(employee4);
renderEmployee(employee5);
renderEmployee(employee6);
renderEmployee(employee7); 