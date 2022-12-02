const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id){
 return new Promise((resolve,reject)=>{
 let person = persons.find(item=>item.id ===id)
 if(person){
   resolve(person)
 }
 else{
   reject(new Error(`la persona con id :${id} non esiste!`))
 }
})
}

function fetchJobById(id){
  return new Promise((resolve,reject)=>{
    let job = jobs.find(item=>item.id===id)
    if(job){
      resolve(job)
    }
    else{
      reject(new Error(`il lavoro con id :${id} non esiste!`))
    }
  })

}

let resultPerson = fetchPersonById(4);
let resultJob = fetchJobById(4);

Promise.all([resultPerson, resultJob]).then((value)=>{console.log(value);})
.catch((e) =>{console.log('Valore inesistente', e);});