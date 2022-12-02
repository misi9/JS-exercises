 const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function filter(key, value){
 if (typeof value === 'string'){
  return Symbol
 }
 else {
   return value
 }
}

const json = JSON.stringify(person, filter);

console.log(json); // Should return: { id: 1, age: 25 }