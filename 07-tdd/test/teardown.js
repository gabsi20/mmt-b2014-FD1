var should = require('should')
var setup = require('../src/setup.js')

describe('teardown', function() {
    var myString = "Herbert is Funny";

    // Setup
    afterEach(function() {
        myString = "Herbert is Funny"
    })

    it('should make LowerCase', function() {
        var result = setup(myString, "lower")
        should(result).equal("herbert is funny")
    })

    it('should make UpperCase', function() {
       var result = setup(myString, "upper")
        should(result).equal("HERBERT IS FUNNY")
    })

    it('should return empty string', function() {
        var result = setup(myString, "delete")
        should(result).equal("")
     })
})
