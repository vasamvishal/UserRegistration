var controller=require('./userRegistration');
var readLine=require('readline-sync');
let userName=controller.userNameFunction('VishalVasam');
let userEmail=controller.emailPattern('VishalVasam@gmail.com');
let phoneNumber=controller.phoneNumber('9898787867');
let password=controller.validatePassword("Vishal12@");
let password1=controller.validatePassword("Vishal12@@");

