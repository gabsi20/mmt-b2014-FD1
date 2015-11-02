import {
  es5,
  es6
} from '../../src/features/symbols'

export default function() {
  it('should show that symbols do not exist in ES5', () => {
  		
  		es5().key.should.eql('1')
  })

  it('should show symbols syntax and behavior in ES6', () => {
  		es6().should.be.false
  })
}
