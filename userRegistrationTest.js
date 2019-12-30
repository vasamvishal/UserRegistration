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
         var result=UserRegistration.emailPattern(userName);
         assert.equal(result,true);
        });
 });

