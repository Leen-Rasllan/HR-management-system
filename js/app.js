console.log('hi');
const department = ['Administration', 'Marketing', 'Development', 'Finance'];

let array = [
  leen = {
    firstName: 'Leen',
    lastName: 'Rasllan',
    salary: 2500
  },
  rama = {
    firstName: 'Rama',
    lastName: 'Rasllan',
    salary: 1800
  },
  noor = {
    firstName: 'Noor',
    lastName: 'Alahwal',
    salary: 1200
  },
  aysha = {
    firstName: 'Aysha',
    lastName: 'Rawashdeh',
    salary: 700
  }
];

const randomIndex = Math.floor(Math.random() * department.length);
const randomObject = department[randomIndex];

leen.department = randomObject;
leen.maxSalary = 2000;
leen.minSalary = 1500;
leen.level = 'level';

rama.department = randomObject;
rama.minSalary = 1000;
rama.maxSalary = 1500;
rama.level = 'level';

noor.department = randomObject;
noor.maxSalary = 1000;
noor.minSalary = 500;
noor.level = 'level';

aysha.department = randomObject;
aysha.maxSalary = 2000;
aysha.minSalary = 1500;
aysha.level = 'level';

function generateRandomAge(minAge, maxAge) {
  return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
}

const minAge = 18;
const maxAge = 70;

array.forEach(obj => {
  obj.age = generateRandomAge(minAge, maxAge);
});

array.forEach(obj => {
  if (obj.salary >= 2000 && obj.salary <= 1500) {
    obj.level = 'senior';
  } else if (obj.salary >= 1500 && obj.salary <= 1000) {
    obj.level = 'mid-senior';
  } else if (obj.salary >= 1000 && obj.salary <= 500) {
    obj.level = 'junior';
  }
});

function calculateNetSalary(salary) {
  const taxPercent = 7.5;
  const netSalary = salary * (1 - taxPercent / 100);
  return netSalary;
}

array.forEach(obj => {
  if (obj.salary >= 2000 && obj.salary <= 1500) {
    obj.level = 'bingo';
  } else if (obj.salary >= 1500 && obj.salary <= 1000) {
    obj.level = 'done';
  } else if (obj.salary >= 1000 && obj.salary <= 500) {
    obj.level = 'bad';
  }
  
  obj.netSalary = calculateNetSalary(obj.salary);
});

console.log(array);
