module.exports = function check(str, bracketsConfig) {
	const openBrackets = ['(', '[', '{', '|']
	const bracketsPair = {
		')': '(',
		']': '[',
		'}': '{',
		'|': '|',
	}
	let stack = []

	for (let i = 0; i < check.arguments[0].length; i++) {

		let currentSymbol = check.arguments[0][i]
		
		if (openBrackets.includes(currentSymbol)) {
			stack.push(currentSymbol)			

		} else {
			if (stack.length === 0) {
				return false
			}

			let lastElem = stack[stack.length - 1]

			if (bracketsPair[currentSymbol] === lastElem) {
				stack.pop()
			} else {
				return false
			}
		}
	}
	if (stack.length === 0) {return true}
	if (stack.length !== 0 && stack[0] === stack[1]) {return true}
	else {return false}
}
