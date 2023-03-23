// {prop_name: prop_value, .... }
//  key-value pair
// nest js, node js,
// next js, react, angular, vue,
const person = { name: "abdullah", age: 22 };
// access single property
//  syntax1: obj_name.prop_name
//  syntax2: obj_name["prop_name"]
// console.log("age", person.age)
// console.log("name", person["name"]);

//  Loop through an object
const man = { fname: "John", lname: "Doe", age: 25 };
for (let key in man) {
  // key = "fdfd"
  // man. key ----> man."fname", man."lname"
  // man.["fname"], man["lname"], man["age"] ----> man.fname, man.lname
  // console.log(typeof key)
  // console.log(man[key]);
}

// array of objects
//  syntax : [{}, {},.....]

const persons = [
  { name: "abdullah", age: 22 },
  { name: "hasan", age: 23 },
  { name: "Hamim", age: 21 },
];
// persons.push({ name: "abdullah", age: 22});
// console.log(persons[1].name);
// for(let i =0 ; i<persons.length; i++){
//     console.log(persons[i]);
// }
for (const singlePerson of persons) {
  // console.log(singlePerson)
}

// for (const iterator of object) {

// }

// find that person whose age is equal to 23

for (const singlePerson of persons) {
  // console.log(singlePerson)
  // condition to check the age
  if (singlePerson.age == 23) {
    // console.log(singlePerson);
  }
}
function personFinder(persons) {
  let allPerson = [];
  for (const singlePerson of persons) {
    // console.log(singlePerson)
    // condition to check the age
    if (singlePerson.age >= 22 && singlePerson.age <= 23) {
      allPerson.push(singlePerson);
    }
  }

  return allPerson;
}
// invoke function
// console.log("61 no. line", personFinder(persons));
// [{},{}]
const countries = [
  {
    countryName: "Bangladesh",
    languages: { primary: "bangla", secondary: "english" },
  },
  {
    countryName: "India",
    languages: { primary: "hindi", secondary: "english" },
  },
];

for (const country of countries) {
  // console.log(country.countryName);
  // console.log(country.languages);
  const languages = country.languages;
  for (let singleLang in languages) {
    // console.log(languages[singleLang]);
  }
}

const languages = { primary: "bangla", secondary: "english" };
// Object.keys()

const allPropName= Object.keys(languages)
console.log(allPropName);

// Object.values

const allPropValues = Object.values(languages);
console.log(allPropValues);

// Object.entries()

const allProp = Object.entries(languages);
console.log(allProp);


// map, filter, find
// JSON
// API

// React (optional: OAuth, ),---> vite, react-router-dom,
// first server express js(mongo db), (mandatory: JWT)
// CRUD

// 3 person team 
