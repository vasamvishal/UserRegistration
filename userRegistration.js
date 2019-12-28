var readLine=require('readline-sync');
//let userEmail=readLine.question("Enter the email");
let userPhoneNumber=readLine.question("Enter the phone number");
let emailPattern=RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');
let phonenumber=RegExp('^[6-9]{1}[0-9]{9}$');
let validate=phonenumber.test(userPhoneNumber);
if(validate==true)
{
console.log("T");
}
else
{
console.log("F");
}
