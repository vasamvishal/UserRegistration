var assert=require('assert');
var sum=require('./sum');

describe('Test for Sum Functionalities',function(){
	it('given both a and b is null should return 0',function(){
		var result=sum("","");
		assert.equal(result,0);
	});
	it('given both a and b is undefined should return 0',function(){
                var result=sum(undefined,undefined);
                assert.equal(result,0);
        });
	it('given both a and b isNaN should return 0',function(){
                var result=sum("b","a");
                assert.equal(result,0);
        });
	it('given both a and b in values  should return output value',function(){
                var result=sum(3,4);
                assert.equal(result,7);
        });




});
