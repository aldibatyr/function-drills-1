function createGreeting(name, age) {
  try {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old.  I was born in ${yearOfBirth}.`;
   } catch (e) {
     console.log(e);
   }
};

function getYearOfBirth(age) {
  const yearOfBirth = 2019 - age; 
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  return yearOfBirth;
};

const greeting1 = createGreeting('Chris', -29);
console.log(greeting1);