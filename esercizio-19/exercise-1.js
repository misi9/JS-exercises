const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon'


/*Modificando il valore della proprietà di person2 si modifica anche il valore della proprietà di person1 perchè abbiamo dichiarato che person2 è uguale a person1,quindi andando a modificare la proprietà di uno si modifica anche nell'altro ,si chiama assegnazione per valore*/

console.log(person1);
console.log(person2);