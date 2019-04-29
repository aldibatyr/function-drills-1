function createGreeting(name, age) {
  if (typeof name === "string" && typeof age === "number") {
    try {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old.  I was born in ${yearOfBirth}.`;
   } catch (e) {
     console.log(e);
   }
  } else {
    throw new Error("Arguments not valid");
  }
};

function getYearOfBirth(age) {
  const yearOfBirth = 2019 - age; 
  if (age < 0) {
    throw new Error("Age can not be negative");
  }
  return yearOfBirth;
};

const greeting1 = createGreeting("Chris", "twenty-nine");
console.log(greeting1);