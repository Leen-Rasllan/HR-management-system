console.log( 'hi');
const department = ['Administration','Marketing','Development','Finance', ];


 let leen ={
    firstName :'Leen'    ,
lastName:'Rasllan',
salary: 2500


};

 let rama ={
    firstName :'Rama'    ,
lastName:'Zahran',
salary: 1800


};
 let noor ={
    firstName :'Noor'    ,
lastName:'Alahwal',
salary: 1200

};
let aysha ={
    firstName :'Aysha'    ,
lastName:'Rawashdeh',
salary: 700

}


const randomIndex = Math.floor(Math.random() * department.length);
const randomObject = department[randomIndex];



       leen.department = randomObject;
        leen.maxSalary= 2000;
        leen.minSalary= 1500;
        leen.level = 'level';  

        rama.department = randomObject;
rama.mineSalary= 1000;
rama.maxSalary= 1500;
rama.level = 'level';  

noor.department = randomObject;
noor.maxSalary= 1000;
noor.minSalary= 500;
noor.level = 'level';  

aysha.department = randomObject;
aysha.maxSalary= 2000;
aysha.minSalary= 1500;
aysha.level = 'level';  



rama.department = randomObject;
noor.department = randomObject;
aysha.department = randomObject;
leen.department = randomObject;



function generateRandomAge(minAge, maxAge) {
    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  }
 
  const minAge = 18;
  const maxAge = 70;
  
 
  leen.age = generateRandomAge(minAge, maxAge);
  rama.age = generateRandomAge(minAge, maxAge);
  noor.age = generateRandomAge(minAge, maxAge);
  aysha.age = generateRandomAge(minAge, maxAge);


    if (leen.salary >= 2000 && leen.salary <= 1500) {
      obj.level = 'senior';
    } else if (leen.salary >= 1500 && leen.salary <= 1000) {
      obj.level = 'mid-senior';
    } else if (leen.salary >= 1000 && leen.salary <= 500) {
      obj.level = 'junior';
    }
    leen.netSalary = calculateNetSalary(leen.salary);


    if (rama.salary >= 2000 && rama.salary <= 1500) {
      obj.level = 'senior';
    } else if (rama.salary >= 1500 && rama.salary <= 1000) {
      obj.level = 'mid-senior';
    } else if (rama.salary >= 1000 && rama.salary <= 500) {
      obj.level = 'junior';
    }
    rama.netSalary = calculateNetSalary(rama.salary);


    if (noor.salary >= 2000 && noor.salary <= 1500) {
      obj.level = 'senior';
    } else if (noor.salary >= 1500 && noor.salary <= 1000) {
      obj.level = 'mid-senior';
    } else if (noor.salary >= 1000 && noor.salary <= 500) {
      obj.level = 'junior';
    }
    noor.netSalary = calculateNetSalary(noor.salary);


    if (aysha.salary >= 2000 && aysha.salary <= 1500) {
      obj.level = 'senior';
    } else if (aysha.salary >= 1500 && aysha.salary <= 1000) {
      obj.level = 'mid-senior';
    } else if (aysha.salary >= 1000 && aysha.salary <= 500) {
      obj.level = 'junior';
    }
    aysha.netSalary = calculateNetSalary(aysha.salary);
 
  function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const netSalary = salary * (1 - taxPercent / 100);
    return netSalary;
  }
  
  
  
    
    leen.netSalary = calculateNetSalary(leen.salary);
    rama.netSalary = calculateNetSalary(rama.salary);
    noor.netSalary = calculateNetSalary(noor.salary);
    aysha.netSalary= calculateNetSalary(aysha.salary);
 

 
 const employeeInfo =document.getElementById("employeeInfo")
 employeeInfo.innerHTML+=
      "<h2>Employee Name: " + leen.firstName + "</h2>" +
      "<p>Name: " + leen.lastName + "</p>" +
      "<p>Salary: $" + leen.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + leen.netSalary + "</p><br>"+


      "<h2>Employee Name: " + rama.firstName + "</h2>" +
      "<p>Name: " + rama.lastName + "</p>" +
      "<p>Salary: $" + rama.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + rama.netSalary + "</p><br>"+



     " <h2>Employee Name: " + noor.firstName + "</h2>" +
      "<p>Name: " + noor.lastName + "</p>" +
      "<p>Salary: $" + noor.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + noor.netSalary + "</p><br>"+


      "<h2>Employee Name: " + aysha.firstName + "</h2>" +
      "<p>Name: " + aysha.lastName + "</p>" +
      "<p>Salary: $" + aysha.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + aysha.netSalary + "</p><br>";




 
  
  console.log(leen);
  console.log(rama);
  console.log(noor);
  console.log(aysha);



