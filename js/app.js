







let leen ={
    firstName :'Leen'    ,
  lastName:'Rasllan',
  salary: 2500,
  image: "https: //icon2.cleanpng.com/20180319/vwq/kisspng-computer-icons-user-profile-avatar-profile-transparent-png-5ab03f3dba6729.3105587215214999657635.jpg" ,
  employeeId: generateEmployeeId(),
  level: calculateLevel(2500),
  department:getRandomDepartment(),
  netSalary:calculateNetSalary(2500),
  
  };
  
  let rama ={
    firstName :'Rama'    ,
  lastName:'Zahran',
  salary: 1800,
  image: "https://png.pngtree.com/png-clipart/20190614/original/pngtree-woman-long-hair-sihouette-png-image_3787396.jpg" ,
  employeeId: generateEmployeeId(),
  level: calculateLevel(2500),
  department:getRandomDepartment(),
  netSalary:calculateNetSalary(1800),
  
  };
  let noor ={
    firstName :'Noor'    ,
  lastName:'Alahwal',
  salary: 1200,
  image: "https://spng.pinpng.com/pngs/s/94-941951_woman-standing-silhouette-png-woman-human-silhouette-png.png" ,
  employeeId: generateEmployeeId(),
  level: calculateLevel(1800),
  department:getRandomDepartment(),
  netSalary:calculateNetSalary(1200),
  
  };
  let aysha ={
    firstName :'Aysha'    ,
  lastName:'Rawashdeh',
  salary: 1000,
  image: "https://spng.pngfind.com/pngs/s/27-278138_woman-silueta-persona-de-pie-png-transparent-png.png" ,
  employeeId: generateEmployeeId(),
  level: calculateLevel(1000),
  department:getRandomDepartment(),
  netSalary:calculateNetSalary(1000),
  
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
  
  
  function getRandomDepartment() {
    const department = ['Administration', 'Marketing', 'Development', 'Finance'];
    const randomIndex = Math.floor(Math.random() * department.length);
    return department[randomIndex];
  }
  
  const randomObject = getRandomDepartment();
  
  
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
  function calculateLevel(netSalary) {
    let level = ''
  
    if (netSalary >= 2000) {
      level = 'senior';
    } else if (netSalary >= 1500 && netSalary < 2000) {
      level = 'mid-senior';
    } else if (netSalary >= 1000 && netSalary < 1500) {
      level = 'junior';
    }
  
    return level;
  }



  const employeeInfo =document.getElementById("employeeInfo")
employeeInfo.innerHTML+=
     "<h2>Employee Name: " + leen.firstName +leen.lastName + "</h2>" +
     "<p>Name  :" + leen.firstName + "</p><br>"+
     "<p>Net Salary (after 7.5% tax): $" + leen.netSalary + "</p><br>"+
     
     


     "<h2>Employee Name: " + rama.firstName +rama.lastName + "</h2>" +
     "<p>Name  :" + rama.firstName + "</p><br>"+
     "<p>Net Salary (after 7.5% tax): $" + rama.netSalary + "</p><br>"+
     


    

     
    " <h2>Employee Name: " + noor.firstName + noor.lastName + "</h2>" +
    "<p>Name  :" + noor.firstName + "</p><br>"+
     "<p>Net Salary (after 7.5% tax): $" + noor.netSalary + "</p><br>"+
    


     "<h2>Employee Name: " + aysha.firstName + aysha.lastName + "</h2>" +
     "<p>Name  :" + aysha.firstName + "</p><br>"+
     "<p>Net Salary (after 7.5% tax): $" + aysha.netSalary + "</p><br>";



     console.log(leen);
console.log(rama);
console.log(noor);
console.log(aysha);
