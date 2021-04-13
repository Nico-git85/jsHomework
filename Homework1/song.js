/* Keeping Up with the Javascripts: ES6 
       HomeWork #1 : Data Type

 File Name : song.js */

// 1. Numebrs

let firstYearReleased = 2010;
let secondYearReleased = '2015';            // The let statement declares a block-scoped local variable, optionally initializing it to a value.    
console.log(firstYearReleased);             //The Console method log() outputs a message to the web console
console.log(typeof (firstYearReleased));    //The typeof operator returns a string indicating the type of the unevaluated operand.
console.log(firstYearReleased + ' is the year when the hit : Unstoppable - by Sia was released');  // concatenate a variable with a text.
console.log(`${firstYearReleased} & ${secondYearReleased}`); 
console.log(typeof (secondYearReleased));    //The typeof operator returns a string indicating the type of the unevaluated operand.
console.log(firstYearReleased.toString());   //The toString() method returns a string representing the source code of the function.

let songsWritten = '50';
console.log(parseInt(songsWritten));        //The parseInt() function parses a string and returns an integer.
console.log(songsWritten.valueOf());        //The valueOf() method returns the primitive value of the specified object.
console.log(Number(songsWritten));          //Values of other types can be converted to numbers using the Number() function.

let othersSongs = 4;
othersSongs++;                   // increment (++)
console.log(othersSongs);



// 2. Strings -- The String object is used to represent and manipulate a sequence of characters.

let firstSong = "Unstoppable";
console.log(typeof(firstSong));  // The typeof operator returns a string indicating the type of the unevaluated operand.
let durationSong = 4.23;
console.log(durationSong.toFixed(0));   // returns a string, with the number written with a specified number of decimals
let secondSong = "Never Give Up";
console.log(secondSong.charAt(2));      // to access an individual character in a string. 
console.log(firstSong.length);          // contains the length of the string. For an empty string, length is 0.

let lyrics = "All smiles, I know what it takes to fool this town";
let word  = "smiles";
console.log(`The ${word}, ${lyrics.includes(word) ? 'is' : 'false'} all that matters!`);

let winner =  "And the award goes to :  🎊 " ;
console.log(winner.toUpperCase());           //The toUpperCase() method returns the calling string value converted to upper case.

console.log(firstSong + " " + "by Sia");       // concatenate 


// 3. Booleans -- Data types Boolean represents one of two values: true or false.

let faimous = true;
if (faimous === true){
      console.log('This is the winner!');
} else {
      console.log('Who is this?');
}

let award = "received";
console.log(Boolean(award));

let recorded = false ;
console.log(Boolean(recorded));


let premium = new Boolean (true);
console.log(premium);


// 4. Objects --  An object is a collection of properties, and a property is an association between a name (or key) and a value.

let firstBand = {
      name : "Metallica",
      genre : "heavy metal",
      year : 1981,
      awarded : true
}
firstBand['band'] = true; 
console.log(firstBand);
console.log(firstBand.name);

let firstArtist = {
     firstName : "Abel",
     lastName: "Tesfaye",
     age: 30,
     stageName : "The Weekend",
     singer: true,
     billboardAward : false,
     address : {
      facebook : "https://www.facebook.com/theweeknd",
      instagram : "https://www.instagram.com/theweeknd/",
      twitter: "https://twitter.com/theweeknd"
     },
}
console.log(firstArtist);
console.log(firstArtist.address);
console.log(firstArtist.address.facebook);
console.log(firstArtist['firstName']);

// with Constructor pattern for creating objects

 function Singer (type, name, age, gender, awarded, faimous){
       this.type = type;
       this.name = name;
       this.age = age;
       this.gender = gender;
       this.awarded = awarded;
       this.faimous = faimous
       this.showType = function (){
             console.log("Type: " + this.type);
       };
       this.isFaimous = function (){
             console.log("This is faimous : " + this.faimous);
       };

 }

 let firstSinger = new Singer("singer" , "Kylie Minogue", 52, "pop", true, false);
 console.log(firstSinger);
 firstSinger.showType();
 firstSinger.isFaimous();
 console.log(firstSinger.age);
 console.log(firstSinger.awarded);
 console.log(firstSinger.name);

 let secondSinger = new Singer("guitarist " , "Guy Berryman", 42, "pop rock", false, true );
 console.log(secondSinger);
 secondSinger.showType();
 secondSinger.isFaimous();
 secondSinger.becameFaimous = true;
 console.log(secondSinger);


 // 5. Arrays  --  The Array is used to store multiple values in a single variable.

 let myMusic = [2015, "Earned it", "billboard", true, firstSinger];
 console.log(myMusic.length);
 console.log(myMusic);
 console.log(myMusic[1]);

 let myMusicList = new Array();
 myMusicList[0] = "Adventure";
 myMusicList[1] = "Burn It Down";
 myMusicList[2] = "Beautiful Smile";

 console.log(myMusicList.length-1);
 myMusicList.push("Otpuskayu");  // Built in method - Adds new elements to the end of an array, and returns the new lengthAdds new elements to the end of an array, and returns the new length.
 myMusicList.pop() ;             //Removes the last element of an array, and returns that element
 myMusicList.shift();            //	Removes the first element of an array, and returns that element


 let revMusic = myMusicList.reverse();           //Reverses the order of the elements in an array.
 console.log(revMusic);
 console.log(myMusicList);

 let play = [ "Drivers License" , "Mood" , "Blinding Lights", "Positions", "Levitating", "Go Crazy", "Holy"];
 console.log(play);
 let mixt = play.slice(1,3);      // 	Selects a part of an array, and returns the new array
 console.log(mixt);

let mostImportant = play.map(function(value, el){   //	Creates a new array with the result of calling a function for each array element.
      return el + " : " + value ;
});

console.log(mostImportant);

let list = myMusicList.concat(play);
console.log(list);