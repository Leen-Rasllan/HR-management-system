

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

console.log('hi');
const department = ['Administration', 'Marketing', 'Development', 'Finance',];



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




'use strict';


function Employees(firstName, lastName, salary, image, mineSalary, maxSalary,) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
  this.image = image;
  this.department = randomObject;
  this.age = function generateRandomAge(minAge, maxAge) {
    return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
  }
  this.employeeId = generateEmployeeId();
  this.minSalary = mineSalary;
  this.maxSalary = maxSalary;
  this.netSalary = calculateNetSalary(this.salary);

  function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const netSalary = salary * (1 - taxPercent / 100);
    return netSalary;
  }
  this.level = calculateLevel(this.netSalary);


}






let abood = new Employees("Abdulqader", "Rasil", 2500, " https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Ghazi.jpg?raw=true", 2000, 2500,);
let hamood = new Employees(" moohammed", " Ahmad", 1800, " https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Omar.jpg?raw=true", 1500, 2000,);
let rahof = new Employees("Rahaf", "Alsaqa", 1800, " https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Tamara.jpg?raw=true", 1500, 2000,);
let rama = new Employees("Rama", "Zahran", 1800, " https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Lana.jpg?raw=true", 1500, 2000,);
let noor = new Employees("Noor", "Alahwal", 1200, "https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Safi.jpg?raw=true", 1000, 1500,);
let aysha = new Employees("Aysha", "Rawashdeh", 1200, "https://spng.pngfind.com/pngs/s/27-278138_woman-silueta-persona-de-pie-png-transparent-png.png", 1000, 1500,);
let leen = new Employees("Leen", "Rasllan", 2500, " https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Rana.jpg?raw=true", 2000, 2500,);

/*
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
     "<p>Net Salary (after 7.5% tax): $" + aysha.netSalary + "</p><br>";*/







let empInfo = document.createElement("div");
let body = document.getElementsByTagName("body")[0];
body.appendChild(empInfo);





let leenInfo = document.createElement("div");

empInfo.appendChild(leenInfo);


let empImage = document.createElement("img");
empImage.src = leen.image;
empImage.alt = leen.firstName;
leenInfo.appendChild(empImage);


let empName = document.createElement("h1");
empName.textContent = `Name: ${leen.firstName}`;
leenInfo.appendChild(empName);

let empSalary = document.createElement("h3");
empSalary.textContent = `salary: ${leen.netSalary}`;
leenInfo.appendChild(empSalary);


let empLevel = document.createElement("h3");
empLevel.textContent = `Level: ${leen.level}`;
leenInfo.appendChild(empLevel);



let empId = document.createElement("h3");
empId.textContent = `Id: ${leen.employeeId}`;
leenInfo.appendChild(empId);


let empDepartment = document.createElement("h3");
empDepartment.textContent = `Department: ${leen.department}`;
leenInfo.appendChild(empDepartment);

empImage.style.border = "2px solid brown";
empImage.style.height = "100px ";
empImage.style.width = "100px ";
empImage.style.margin = "10px ";

leenInfo.style.border = "2px solid brown";
leenInfo.style.height = "300px ";
leenInfo.style.width = "150px ";
leenInfo.style.margin = "10px ";
leenInfo.style.padding = "3rem 2rem";
leenInfo.style.background = "#ffffff8f";
leenInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";





let noorInfo = document.createElement("div");

empInfo.appendChild(noorInfo);


let noorImage = document.createElement("img");
noorImage.src = noor.image;
noorImage.alt = noor.firstName;
noorInfo.appendChild(noorImage);

let noorName = document.createElement("h1");
noorName.textContent = `Name: ${noor.firstName}`;
noorInfo.appendChild(noorName);

let noorSalary = document.createElement("h3");
noorSalary.textContent = `salary: ${noor.netSalary}`;
noorInfo.appendChild(noorSalary);


let noorLevel = document.createElement("h3");
noorLevel.textContent = `Level: ${noor.level}`;
noorInfo.appendChild(noorLevel);



let noorId = document.createElement("h3");
noorId.textContent = `ID: ${noor.employeeId}`;
noorInfo.appendChild(noorId);


let noorDepartment = document.createElement("h3");
noorDepartment.textContent = `Department: ${noor.department}`;
noorInfo.appendChild(noorDepartment);


noorImage.style.border = "2px solid brown";
noorImage.style.height = "100px ";
noorImage.style.width = "100px ";
noorImage.style.margin = "10px ";

noorInfo.style.border = "2px solid brown";
noorInfo.style.height = "300px ";
noorInfo.style.width = "150px ";
noorInfo.style.margin = "10px ";
noorInfo.style.padding = "3rem 2rem";
noorInfo.style.background = "#ffffff8f";
noorInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";




let ramaInfo = document.createElement("div");

empInfo.appendChild(ramaInfo);


let ramaImage = document.createElement("img");
ramaImage.src = rama.image;
ramaImage.alt = rama.firstName;
ramaInfo.appendChild(ramaImage);

let ramaName = document.createElement("h1");
ramaName.textContent = `Name: ${rama.firstName}`;
ramaInfo.appendChild(ramaName);

let ramaSalary = document.createElement("h3");
ramaSalary.textContent = `salary: ${rama.netSalary}`;
ramaInfo.appendChild(ramaSalary);


let ramaLevel = document.createElement("h3");
ramaLevel.textContent = `Level: ${rama.level}`;
ramaInfo.appendChild(ramaLevel);



let ramaId = document.createElement("h3");
ramaId.textContent = `ID: ${rama.employeeId}`;
ramaInfo.appendChild(ramaId);


let ramaDepartment = document.createElement("h3");
ramaDepartment.textContent = `Department: ${rama.department}`;
ramaInfo.appendChild(ramaDepartment);


ramaImage.style.border = "2px solid brown";
ramaImage.style.height = "100px ";
ramaImage.style.width = "100px ";
ramaImage.style.margin = "10px ";

ramaInfo.style.border = "2px solid brown";
ramaInfo.style.height = "300px ";
ramaInfo.style.width = "150px ";
ramaInfo.style.margin = "10px ";
ramaInfo.style.padding = "3rem 2rem";
ramaInfo.style.background = "#ffffff8f";
ramaInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";







let rahofInfo = document.createElement("div");

empInfo.appendChild(rahofInfo);


let rahofImage = document.createElement("img");
rahofImage.src = rahof.image;
rahofImage.alt = rahof.firstName;
rahofInfo.appendChild(rahofImage);

let rahofName = document.createElement("h1");
rahofName.textContent = `Name: ${rahof.firstName}`;
rahofInfo.appendChild(rahofName)
let rahofSalary = document.createElement("h3");
rahofSalary.textContent = `salary: ${rahof.netSalary}`;
rahofInfo.appendChild(rahofSalary)

let rahofLevel = document.createElement("h3");
rahofLevel.textContent = `Level: ${rama.level}`;
rahofInfo.appendChild(ramaLevel);



let rahofId = document.createElement("h3");
rahofId.textContent = `ID: ${rahof.employeeId}`;
rahofInfo.appendChild(rahofId);


let rahofDepartment = document.createElement("h3");
rahofDepartment.textContent = `Department: ${rahof.department}`;
rahofInfo.appendChild(rahofDepartment);


rahofImage.style.border = "2px solid brown";
rahofImage.style.height = "100px ";
rahofImage.style.width = "100px ";
rahofImage.style.margin = "10px ";

rahofInfo.style.border = "2px solid brown";
rahofInfo.style.height = "300px ";
rahofInfo.style.width = "150px ";
rahofInfo.style.margin = "10px ";
rahofInfo.style.padding = "3rem 2rem";
rahofInfo.style.background = "#ffffff8f";
rahofInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";




let aboodInfo = document.createElement("div");

empInfo.appendChild(aboodInfo);


let aboodImage = document.createElement("img");
aboodImage.src = abood.image;
aboodImage.alt = abood.firstName;
aboodInfo.appendChild(aboodImage);

let aboodName = document.createElement("h1");
aboodName.textContent = `Name: ${abood.firstName}`;
aboodInfo.appendChild(aboodName)
let aboodSalary = document.createElement("h3");
aboodSalary.textContent = `salary: ${abood.netSalary}`;
aboodInfo.appendChild(aboodSalary)

let aboodLevel = document.createElement("h3");
aboodLevel.textContent = `Level: ${abood.level}`;
aboodInfo.appendChild(aboodLevel);



let aboodId = document.createElement("h3");
aboodId.textContent = `ID: ${abood.employeeId}`;
aboodInfo.appendChild(aboodId);


let aboodDepartment = document.createElement("h3");
aboodDepartment.textContent = `Department: ${abood.department}`;
aboodInfo.appendChild(aboodDepartment);


aboodImage.style.border = "2px solid brown";
aboodImage.style.height = "100px ";
aboodImage.style.width = "100px ";
aboodImage.style.margin = "10px ";

aboodInfo.style.border = "2px solid brown";
aboodInfo.style.height = "330px ";
aboodInfo.style.width = "150px ";
aboodInfo.style.margin = "10px ";
aboodInfo.style.padding = "3rem 2rem";
aboodInfo.style.background = "#ffffff8f";
aboodInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";











let hamoodInfo = document.createElement("div");

empInfo.appendChild(hamoodInfo);


let hamoodImage = document.createElement("img");
hamoodImage.src = hamood.image;
hamoodImage.alt = hamood.firstName;
hamoodInfo.appendChild(hamoodImage);

let hamoodName = document.createElement("h1");
hamoodName.textContent = `Name: ${hamood.firstName}`;
hamoodInfo.appendChild(hamoodName)
let hamoodSalary = document.createElement("h3");
hamoodSalary.textContent = `salary: ${hamood.netSalary}`;
hamoodInfo.appendChild(hamoodSalary)

let hamoodLevel = document.createElement("h3");
hamoodLevel.textContent = `Level: ${hamood.level}`;
hamoodInfo.appendChild(hamoodLevel);



let hamoodId = document.createElement("h3");
hamoodId.textContent = `ID: ${hamood.employeeId}`;
hamoodInfo.appendChild(hamoodId);


let hamoodDepartment = document.createElement("h3");
hamoodDepartment.textContent = `Department: ${hamood.department}`;
hamoodInfo.appendChild(hamoodDepartment);


hamoodImage.style.border = "2px solid brown";
hamoodImage.style.height = "100px ";
hamoodImage.style.width = "100px ";
hamoodImage.style.margin = "10px ";

hamoodInfo.style.border = "2px solid brown";
hamoodInfo.style.height = "330px ";
hamoodInfo.style.width = "150px ";
hamoodInfo.style.margin = "10px ";
hamoodInfo.style.padding = "3rem 2rem";
hamoodInfo.style.background = "#ffffff8f";
hamoodInfo.style.boxShadow = ".1rem .1rem .8rem #ccc";



console.log(leen);
console.log(rama);
console.log(noor);
console.log(aysha);
console.log(abood);
console.log(rahof);
console.log(hamood);



