var readLine=require('readline-sync');
let userName=readLine.question("Enter the name");
let userNameValidator=RegExp('^[A-Z]{1}[a-zA-Z]{2,}');
let validate=userNameValidator.test(userName);
if(validate==true)
{
console.log("T");
}
else
{
console.log("F");
}
