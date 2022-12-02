const person = {
  get firstName() {
    return this._firstName;  
  },
  set firstName(name){
     this._firstName = name;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(surname){
     this._lastName = surname;
  },
  fullName(){
    return `${this._firstName}  ${this._lastName} `
  }
}
const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';
const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins