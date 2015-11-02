export function es5() {
  var Symbol = function(val) {
    this.key = val
  }

  var s = new Symbol('1')
return s
}

export function es6() {
	const s1 = Symbol('senf')
	const s2 = Symbol('senf')
	return s1 === s2
}
