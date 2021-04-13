/* Keeping Up with the Javascript : ES6 
       Homework #2 :  Variables and Constants  */

 /* request : Create a file called variables.js
 
 Hoisting - What is hoisting ? What does the word mean, and how does hoisting work in Javascript? */    

 /* conceptually definition (hoisting - MDN Web Docs) : a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.
  Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.*/

       // Variables 

  // Def : Variables in JavaScript are containers which hold reusable data. 
  
  /* VAR type : Before ES2015, JavaScript variables were solely declared using the var keyword.
     LET type :  Is constrained to whichever scope it is declared in. Its declaration and assignment are similar to var. let was introduced to mitigate issues posed by variables scope which developers face during development.In short, let helps us by making it easier to see where variables live in our code.
   
   Difference between VAR and LET variables :

   1. The main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope.The scope of let not only limited to the block in which it is defined but variable with let also do not get added with global window object even if it get declared outside of any block. But we can access variable with var from window object if it is defined globally.
   2. Also, one difference between var and let is variable with var can be redeclared to some other value while variable could not be redeclared if it is defined with let.
   */
  
    // Examples with "var"
  
   /*1*/ var age = 22;
    var age = 25;
    console.log(age);

    /*2*/function foo() {
     var x = 1;
     function bar() {
       var y = 2;
       console.log(x); // 1 (function `bar` closes over `x`)
       console.log(y); // 2 (`y` is in scope)
     }
     bar();
     console.log(x); // 1 (`x` is in scope)
     console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
   }

   /*3*/  var _lastName = "Johnson";
          var _x = 2;
          var _100 = 5;

          console.log(_lastName);
          console.log(_x);
          console.log(_100);

         
         var password = "hunter2";         // Assign value to password variable
             password = "hunter3";         //// Reassign variable value with a new value.
             console.log(password);



   /*4*/  var species = "human";           // Initialize a global variable

          function transform() {
            var species = "werewolf";      // Initialize a local, function-scoped variable
            console.log(species);
}


            console.log(species);           // Log the global and local variable
            transform();
            console.log(species);    


   // Examples with "let"

   let x, y, z;
   let x = 50, y = 20, z = 3; // Multiple declariation can also be made with LET

 /*1*/  let x = 20;
   let x = 50;
  console.log(x);            // SyntaxError: identifier "x" has already been declared.

 /*2*/ let a = 1;
   if (a === 1) {
       let a = 2;
   console.log(a);           // expected 2
}

   console.log(a);            // expected  1



  /*3*/ function varTest() {
     var i = 1;
     {
       var i = 2;          // same variable!
       console.log(i);     // 2
     }
     console.log(i);       // 2
   }
   
   
   
   
   function letTest() {
     let j = 1;
     {
       let j = 2;          // different variable
       console.log(j);     // 2
     }
     console.log(j);       // 1
   }