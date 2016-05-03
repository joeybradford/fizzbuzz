exports.count = function(start, end) 
{
		var output =start;

		for (var i = start; i < end; i++)
		{
			output = output +  " " + exports.fizzbuzzer(exports.buzzer(exports.fizzer(i + 1)));
		}
		return output;
};
exports.fizzer = function(num)
{
	
	if (0 === num % 3)
	{
		return "fizz";
	}
	return num;
	
	return (0 === num % 3) ? "fizz" : num; 
	
};
exports.buzzer = function(num)
{

	return (0 === num % 5) ? "buzz" : num; 
	
};
exports.fizzbuzzer = function(num)
{
	return (0 === num % 3) &&(0 === num % 5) ? "fizzbuzz" : num;
	return (0 === num % 15) ? "fizzbuzz" : num;

};
