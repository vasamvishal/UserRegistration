var assert=require('assert');
var UserRegistration=require('./userRegistration');

describe("for userName Functions testCase ",function(){

	it("for valid userName",function(){
	 let userName="VishalVasam12" 
	 var result=UserRegistration.userNameFunction(userName);
	 assert.equal(result,true);
	});
	
	

});
