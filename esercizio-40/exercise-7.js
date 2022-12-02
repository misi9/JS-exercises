class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get _firstName(){
    return this._firstName
  }
  get _lastName(){
    return this._lastName
  }
  get _age(){
    return this._age
  }
 
  set _firstName(name){
    return this._firstName = name
  }
  set _lastName(surname){
    return this._lastName = surname
  }
  set _age(old){
    return this._age = old
  }
  get fullName(){
  return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);