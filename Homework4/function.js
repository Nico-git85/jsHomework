/* Homework Assignment #4: Functions */
/* Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.*/

let men = [
  {name :'Socrates', mortal : true},
  {name :'Newton', mortal : true},
  {name : 'Einstein', mortal : true}, 
  {name : 'Buddha', mortal : true}
];

  const listOfMortal = men.map((human)=>`${human.name}`);


console.log(listOfMortal);

const trueOff = function confirm(listOfMortal){
  if (listOfMortal){
    return true;
  } else {
    return "you find an immortal :P";
  }
}
console.log(trueOff(men));
console.log(trueOff(men.Mario));


