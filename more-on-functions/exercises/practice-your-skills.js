//Create an anonymous function and set it equal to a variable.

let converter = function(parameter) {
    if (typeof(parameter) == "number") {
        return parameter * 3;
    } else if (typeof(parameter) == "string") {
        return "ARRR!";
    } else {
        return parameter;
    }
};

console.log(converter(3));
console.log(converter("Hello."));
console.log(converter(Number));

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let convertedArray = arr.map(converter);

console.log(convertedArray);
