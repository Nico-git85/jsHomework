/* Homework Assignment #3: Statements and Operators */

/*      Details:
Let's look at a popular logical argument (a syllogism)

All men are mortal
Socrates is a man.
Therefore, socrates is mortal. */

/* Request :
-Using "if statements" and any other logical operators and data-types you see fit,
recreate this logical argument. Your code should make clear that "socrates" is part
of a collection of items referred to as "men", and that all members of this collection
are mortal. You should also then demonstrate that since Socrates is part of this 
collection, it follows that he is mortal as well. */


// Extra Credit:

// Got the hang of creating a logical argument? Want to try another one? Try this one as well:

// This cake is either vanilla or chocolate.
// This cake is not chocolate.
// Therefore, this cake is vanilla.

let men = ['Socrates', 'Newton', 'Einstein', 'Buddha'];

let mortal = function(e){
  for (let i of men){
    if(i === e){
      return true;
    }
    //if omitted this line will return undefined which is also falsey value
    return false;
  }
}
// OR - for this condition there has to be a single statement true
if (mortal('Socrates') || mortal('Newton')){
  console.log('Therefore, Socrates is mortal')
}

// AND - for this condition all statements has to be true
if (mortal('Socrates') && mortal('Newton') && mortal('Jesus')){
  console.log('Therefore, Socrates is mortal')
} else {
  console.log('Jesus has raised')
}

// second example :


let sort = 'vanilla'
let cake = function(e){
  for (let i of sort){
    if(i === e){
      return true;
    }
    //if omitted this line will return undefined which is also falsey value
    return false;
  }
}
 if (cake ('vanilla') && ('chocolate')){
   console.log('This cake is either vanilla or chocolate.')
 } else if (cake('chocoleta')){
   console.log('This cake is not chocolate.')
 } else {
   console.log('Therefore, this cake is vanilla.')
 }


 