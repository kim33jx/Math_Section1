// tell the test where to find the code
var math = require('../math');

describe("A sumple program that does arithemtic", function() {
	it("can add two numbers", function() {
		expect(add(3,5)).toBe(8)

	it("can subtract two numbers", function() {
		expect(subtract(3,5)).toBe(-2)

	});
});