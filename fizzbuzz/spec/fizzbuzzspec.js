// test specifiaction for fizzbuzz
var fb = require('../fizzbuzz.js');

describe("A program that implements fizzbuzz", function(){
	
	it("can count from 1 to 5 and make fizzbuzz replacements",function(){
	expect(fb.count(1,5)).toBe("1 2 fizz 4 buzz");
	});
	
	
	it("can take a number and return fizz if its a multiple of 3, and the number otherwise",function(){
	expect(fb.fizzer(3)).toBe('fizz');
	expect(fb.fizzer(5)).toBe(5);
	expect(fb.fizzer(17)).toBe(17);
	});

	it("can take a number and return buzz if its a multiple of 5, and the number otherwise",function(){
	expect(fb.buzzer(5)).toBe('buzz');
	expect(fb.buzzer(6)).toBe(6);
	expect(fb.buzzer(17)).toBe(17);
	});
	it("can take a number and return fizzbuzz if its a multiple of 3 and 5, and the number otherwise",function(){
	expect(fb.fizzbuzzer(15)).toBe('fizzbuzz');
	expect(fb.fizzbuzzer(3)).toBe(3);
	expect(fb.fizzbuzzer(5)).toBe(5);
	expect(fb.fizzbuzzer(7)).toBe(7);

	});

});