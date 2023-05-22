

/*

let leen ={
  firstName :'Leen'    ,
lastName:'Rasllan',
salary: 2500,
image: "https: //icon2.cleanpng.com/20180319/vwq/kisspng-computer-icons-user-profile-avatar-profile-transparent-png-5ab03f3dba6729.3105587215214999657635.jpg" ,
employeeId: generateEmployeeId(),

};

let rama ={
  firstName :'Rama'    ,
lastName:'Zahran',
salary: 1800,
image: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-woman-long-hair-sihouette-png-image_3787396.jpg" ,
employeeId: generateEmployeeId(),

};
let noor ={
  firstName :'Noor'    ,
lastName:'Alahwal',
salary: 1200,
image: "https://spng.pinpng.com/pngs/s/94-941951_woman-standing-silhouette-png-woman-human-silhouette-png.png" ,

};
let aysha ={
  firstName :'Aysha'    ,
lastName:'Rawashdeh',
salary: 700,
image: "https://spng.pngfind.com/pngs/s/27-278138_woman-silueta-persona-de-pie-png-transparent-png.png" ,
employeeId: generateEmployeeId(),
}
*/


/*
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

*/

  
 /*
  leen.age = generateRandomAge(minAge, maxAge);
  rama.age = generateRandomAge(minAge, maxAge);
  noor.age = generateRandomAge(minAge, maxAge);
  aysha.age = generateRandomAge(minAge, maxAge);
 */

/*
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

    */
    
  
  
  
    /*
    leen.netSalary = calculateNetSalary(leen.salary);
    rama.netSalary = calculateNetSalary(rama.salary);
    noor.netSalary = calculateNetSalary(noor.salary);
    aysha.netSalary= calculateNetSalary(aysha.salary);

*/

console.log( 'hi');
    const department = ['Administration','Marketing','Development','Finance', ];
    
    
    
    function generateEmployeeId() {
      var employeeId = "";
      var digits = "0123456789";
    
      for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * digits.length);
        employeeId += digits.charAt(randomIndex);
      }
    
      return employeeId;
    }
    
    
    
    const randomIndex = Math.floor(Math.random() * department.length);
    const randomObject = department[randomIndex];
    
    
    
    
    function generateRandomAge(minAge, maxAge) {
        return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
      }
     
      const minAge = 18;
      const maxAge = 70;


  function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const netSalary = salary * (1 - taxPercent / 100);
    return netSalary;
  }










    'use strict';


    function Employees (firstName, lastName,salary,image,mineSalary,maxSalary,) {
      this.firstName=firstName;
      this.lastName =lastName;
      this.salary=salary;
      this.image = image;
      this.department = randomObject;
      this.age= function generateRandomAge(minAge, maxAge) {
        return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
      }
      this. employeeId= generateEmployeeId();
      this.minSalary = mineSalary;
      this.maxSalary = maxSalary;
      this.netSalary = calculateNetSalary(this.salary);
     
  function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const netSalary = salary * (1 - taxPercent / 100);
    return netSalary;
  }
      
  }

  

 
 

let abood =new Employees( "Abdulqader", "Rasil" , 1200," https://www.pngfind.com/pngs/m/320-3208592_confident-cartoon-businessman-transparent-cartoon-businessman-hd-png.png" ,1000 ,1500,);
  let hamood =new Employees(" moohammed"," Ahmad" , 800," https://image.pngaaa.com/203/2543203-middle.png" ,500 ,1000,);
  let rahof =new Employees( "Rahaf", "Alsaqa" , 900," https://spng.pngfind.com/pngs/s/443-4432916_female-woman-profile-silhouette-overlay-pub-dom-silhouette.png" ,500 ,1000,);
  let rama =new Employees( "Rama", "Zahran" , 1800," https://spng.pngfind.com/pngs/s/443-4432916_female-woman-profile-silhouette-overlay-pub-dom-silhouette.png" ,1500 ,2000,);
  let noor =new Employees( "Noor", "Alahwal" ,1200,"https://spng.pinpng.com/pngs/s/94-941951_woman-standing-silhouette-png-woman-human-silhouette-png.png" ,1000 ,1500,);
  let aysha =new Employees( "Aysha", "Rawashdeh" ,700,"https://spng.pngfind.com/pngs/s/27-278138_woman-silueta-persona-de-pie-png-transparent-png.png" ,500 ,1000,);
  let leen =new Employees( "Leen", "Rasllan" , 2500," https: //icon2.cleanpng.com/20180319/vwq/kisspng-computer-icons-user-profile-avatar-profile-transparent-png-5ab03f3dba6729.3105587215214999657635.jpg" ,2000 ,2500,);

 
 const employeeInfo =document.getElementById("employeeInfo")
 employeeInfo.innerHTML+=
      "<h2>Employee Name: " + leen.firstName +leen.lastName + "</h2>" +
      "<p>Department: " + leen.department + "</p>" +
      "<p>Salary: $" + leen.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + leen.netSalary + "</p><br>"+


      "<h2>Employee Name: " + rama.firstName +rama.lastName + "</h2>" +
      "<p>Department: " + rama.department + "</p>" +
      "<p>Salary: $" + rama.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + rama.netSalary + "</p><br>"+


      " <h2>Employee Name: " + hamood.firstName + hamood.lastName + "</h2>" +
      "<p>Department: " + hamood.department + "</p>" +
      "<p>Salary: $" + hamood.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + hamood.netSalary + "</p><br>"+

      " <h2>Employee Name: " + rahof.firstName + rahof.lastName + "</h2>" +
      "<p>Department: " + rahof.department + "</p>" +
      "<p>Salary: $" + rahof.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + rahof.netSalary + "</p><br>"+

      " <h2>Employee Name: " + abood.firstName + abood.lastName + "</h2>" +
      "<p>Name: " + abood.department + "</p>" +
      "<p>Salary: $" + abood.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + abood.netSalary + "</p><br>"+



      
     " <h2>Employee Name: " + noor.firstName + noor.lastName + "</h2>" +
      "<p>Department: " + noor.department + "</p>" +
      "<p>Salary: $" + noor.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + noor.netSalary + "</p><br>"+


      "<h2>Employee Name: " + aysha.firstName + aysha.lastName + "</h2>" +
      "<p>Department: " + aysha.department + "</p>" +
      "<p>Salary: $" + aysha.salary + "</p>" +
      "<p>Net Salary (after 7.5% tax): $" + aysha.netSalary + "</p><br>";




 
  
  console.log(leen);
  console.log(rama);
  console.log(noor);
  console.log(aysha);
  console.log(abood);
  console.log(rahof);
  console.log(hamood);



