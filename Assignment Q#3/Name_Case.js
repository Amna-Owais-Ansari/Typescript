/*Name Cases:
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
var pname = 'aMna';
var Uppercase = pname.toUpperCase();
console.log(Uppercase);
var Lowercase = pname.toLowerCase();
console.log(Lowercase);
var TitleCase = pname.charAt(0).toUpperCase() + pname.slice(1).toLowerCase();
console.log(TitleCase);
