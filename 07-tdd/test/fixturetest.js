var should = require('should');
var fix = require('../test/fixture.json');
var fixture = require('../src/fixture.js');



describe('fixtures',function(){
	it("should just work", function(){
		var user1 = fix.a.firstName;
		should(user1).equal("a");
	})

	it("should also just work", function(){
		var user2 = fix.b.firstName;
		should(user2).equal("b");
	})
	it("should set name to Hansi",function(){
		var test = fixture(fix.a.firstName, "Hansi");
		should(test).equal("Hansi");
	})
	it("should set name to Matilda", function(){
		var test = fixture(fix.b.firstName, "Matilda");
		should(test).equal("Matilda");
	})
})
