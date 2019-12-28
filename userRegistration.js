
var readLine=require('readline-sync');
class UserRegistration{
 userNameFunction(userName){
		let userNameValidator=RegExp('^[A-Z]{1}[a-zA-Z]{2,}');
		let validate=userNameValidator.test(userName);
	}

  emailPattern(userEmail){
		let emailPattern=RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');
		let emailValidate=emailPattern.test(userEmail);
	}

  phoneNumber(userPhoneNumber){
		let phonenumber=RegExp('^[6-9]{1}[0-9]{9}$');
   		let validatephonenumber=phonenumber.test(userPhoneNumber);
  	}
 validatePassword(pwd){
		let passwordRegex=RegExp("^[a-zA-Z0-9]{8,}");
		let uppercaseRegex=RegExp("[A-Z]");
		let digitRegex=RegExp("[0-9]");
		let specialCharacter=RegExp("^([a-zA-Z0-9])*[!@#$%^&*()<>-_+]{1}([a-zA-Z0-9])*$");
	if(specialCharacter.test(pwd)){
		var password=passwordRegex.test(pwd) && uppercaseRegex.test(pwd) && digitRegex.test(pwd);
	}else{
		console.log("False");
	}
}
   
	}
	module.exports=new UserRegistration();
