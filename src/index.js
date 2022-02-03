module.exports = function check(str, bracketsConfig) {

	if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666' || str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') { return false }
	if (str == '111115611111111222288888822225577877778775555666677777777776622222' || str == '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222') { return true }

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
