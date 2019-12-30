var assert=require('assert');
var UserRegistration=require('./userRegistration');

describe("for userName functions testCases ",function(){

	it("for valid userName",function(){
	 let userName="VishalVasam12" 
	 var result=UserRegistration.userNameFunction(userName);
	 assert.equal(result,true);
	});
	
	it("for Invalid userName",function(){
         let userName="vishalVasam12@" 
         var result=UserRegistration.userNameFunction(userName);
         assert.equal(result,false);
        });
		
});

describe("for emailPattern functions testCases ",function(){
 
	 it("for valid email neglecting optional parameters",function(){
         let userName="abc@yahoo.com" 
         let result=UserRegistration.emailPattern(userName);
         assert.equal(result,true);
        });

	 it("for valid email with one optional parameters",function(){
         let userEmail="abc-100@yahoo.com" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,true);
        });
 
	 it("for valid email with second optional parameters",function(){
         let userEmail="abc@yahoo.com.in" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,true);
        });
	
	 it("for valid email with all optional parameters",function(){
         let userEmail="abc+100@yahoo.com.in" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,true);
        });
	
	 it("for Invalid email neglecting optional parameters",function(){
         let userEmail="abc@@yahoo,com" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,false);
        });

	 it("for Invalid email with one wrong optional parameters",function(){
         let userEmail="abc++@yahoo.com" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,false);
        });
	
       	it("for Invalid email with second wrong optional parameters",function(){
         let userEmail="abc+erw@yahoo.com.34" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,false);
        });

	it("for Invalid email with all wrong optional parameters",function(){
         let userEmail="abc++erw@yahoo.com.34" 
         let result=UserRegistration.emailPattern(userEmail);
         assert.equal(result,false);
        });
});

describe("for phoneNumber functions testCases ",function(){
 
	 it("for valid phone_number ",function(){
         let userPhoneNumber="9876543210" 
         let result=UserRegistration.phoneNumber(userPhoneNumber);
         assert.equal(result,true);
        });
	
 	it("for invalid first digits in phoneNumber ",function(){
         let userPhoneNumber="0576543210" 
         let result=UserRegistration.phoneNumber(userPhoneNumber);
         assert.equal(result,false);
        });
	
	 it("for invalid count of digits in phoneNumber ",function(){
         let userPhoneNumber="0576543210" 
         let result=UserRegistration.phoneNumber(userPhoneNumber);
         assert.equal(result,false);
        });
 });

describe("for passWord functions testCases ",function(){
	 it("for length of characters is less than 8 characters ",function(){
         let userPassword="vishal" 
         let result=UserRegistration.phoneNumber(userPassword);
         assert.equal(result,result);
        });
	
	it("for password not contaning any upperCharacter characters ",function(){
         let userPassword="vishalvasam" 
         let result=UserRegistration.phoneNumber(userPassword);
         assert.equal(result,result);
        });

});

