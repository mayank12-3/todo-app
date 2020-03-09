var nameVar = 'Mayank';
nameVar = 'Jain';
console.log('nameVar:', nameVar);

let nameLet = 'Tony';
nameLet = 'John';
console.log('nameLet:', nameLet);

const nameConst = 'Rochelle';
console.log('nameConst:', nameConst)

function getLastName() {
  const lastName = 'Jain';
  return lastName
}

const lastName = getLastName();
console.log(lastName)

const fullName = 'Mukta Mohan';

if(fullName) {
  const firstName = fullName.split(' ')[0];
  console.log('inside block:', firstName);
}

console.log(fullName)
