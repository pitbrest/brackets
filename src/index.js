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
		console.log(currentSymbol);

		if (currentSymbol === '|' && stack.includes(currentSymbol)) {
			stack.pop()
			console.log(stack);
		}

		else if (openBrackets.includes(currentSymbol)) {
			stack.push(currentSymbol)
			console.log(stack);

		} else {
			if (stack.length === 0) {
				return false
			}

			let lastElem = stack[stack.length - 1]

			if (bracketsPair[currentSymbol] === lastElem) {
				stack.pop()
				console.log(stack);
			} else {
				return false
			}
		}
	}
	console.log(stack);
	return stack.length === 0
}
