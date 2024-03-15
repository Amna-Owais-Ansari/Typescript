/*Stripping Names:
Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
/*Storing a Name: You have a person's name, but it's not perfectly clean. There are some extra spaces or tabs at the beginning or end of the name.

Using Whitespace Characters: You're going to deliberately add some spaces or tabs at the start and end of the name. So, it's not just the name; there are some extra spaces before and after it.

Printing the Name: You'll print the name, including those extra spaces, once. So, when you print it, you'll see those spaces around the name.

Stripping the Whitespace: Now, you'll remove those extra spaces from the name. It's like cleaning it up to get rid of the unnecessary spaces.

Printing Again: Finally, you'll print the cleaned-up name without those extra spaces, just the name itself.*/
var pname = "   \tAmna \n    ";
console.log(pname);
var stripping_Name = pname.trim();
console.log(stripping_Name);
