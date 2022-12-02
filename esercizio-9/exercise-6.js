function getKeys(obj) {
  let array=[];
 for (let keys in obj){
   array.push(keys);
 }
return array
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);