var should = require('should');
var skalar = require('../src/skalar.js');

describe('skalar', function() {
	it('should take a number', function() {
		should(skalar(10)).be.a.Number()
	})

	it('should take a string', function() {
		should(skalar('hello')).be.a.String()
	})

	it('should take a boolean', function() {
		should(skalar(true)).be.a.Boolean()
	})

	it('should not take an object', function() {
		(function() {
			skalar({})
		}).should.throw()
	})

	it('should not take null', function() {
		(function() {
			skalar(null)
		}).should.throw()
	})
})
