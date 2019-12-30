var assert=require('assert');
describe('Basic Mocha String test',function(){
        it('should return no of charcters in a string',function(){
            assert.equal("Hello".length,4);
        });
        it('should return first  charcters of the  string',function(){
            assert.equal("Hello".charAt(0),'H');
   });
});



