var readLine=require('readline-sync');
let userEmail=readLine.question("Enter the email");
let emailPattern=RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');
let validate=emailPattern.test(userEmail);
if(validate==true)
{
console.log("T");
}
else
{
console.log("F");
}
