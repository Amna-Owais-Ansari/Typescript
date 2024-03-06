/*Name Cases: 
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let pname:string='aMna';
let Uppercase:string=pname.toUpperCase();
console.log(Uppercase);
let Lowercase:string=pname.toLowerCase();
console.log(Lowercase);
let TitleCase:string=pname.charAt(0).toUpperCase()+pname.slice(1).toLowerCase();
console.log(TitleCase);