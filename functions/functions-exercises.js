/* Hey Doss, here is the code for the function exercises. I would not worry 
about the char parameter until you get to the end of the exercise. Also,
if your code is off by like 1 number or you have a newline somewhere where
it shouldn't be, it's OKAY as long as it runs and does what you expect it to.
Remember, if I have a variable, such as var, there are multiple ways of writing
two different things. var++ is the same thing as var = var + 1, which is
the same thing as var += 1. Programmers use these shorthands because they
will come up often. I would recommend getting into the habit of trying to use
these shorthands, simply because I think it will help you to make more sense
of your code if you take a break from it. Lastly, when you are writing functions,
it always helps to work backwards from the return statement. Think about what
you want your function to return, code out the return statement, then write
your actual function code. If you have any more questions I should be available
most of tomorrow. Thanks and have a great day! - Jack
*/

function makeLine(size, char) { 
    char = char || '#'
    let numHashes = 0
    let line = "";
    while(numHashes < size) {
        line += char;
        numHashes++;
    }
    return line;
}

function makeSquare(size, char) {
    char = char || '#';
    square = makeRectangle(size, size, char);
    return square;
}

function makeRectangle(width, height, char) {
    char = char || '#';
    let numRows = 0;
    let rectangle = "";
    while (numRows < height - 1) {
        rectangle += makeLine(width, char) + '\n';
        numRows ++;
    }
    rectangle += makeLine(width, char);
    return rectangle;
}

function makeDownwardStairs(height, char) {
    char = char || '#';
    let downwardStairs = "";
    for (let i = 1; i < height; i++) {
        downwardStairs += makeLine(i, char) + '\n';
    }
    downwardStairs += makeLine(height, char);
    return downwardStairs;
}

function makeSpaceLine(numSpaces, numChars, char) {
    char = char || '#';
    let numSpacesPrinted = 0;
    let spaceLine = "";
    while(numSpacesPrinted < numSpaces) {
        spaceLine += ' ';
        numSpacesPrinted++;
    }
    spaceLine += makeLine(numChars, char);
    numSpacesPrinted = 0;
    while(numSpacesPrinted < numSpaces) {
        spaceLine += ' ';
        numSpacesPrinted++;
    }
    return spaceLine;
}

function makeIsoscelesTriangle(height, char) {
    char = char || '#';
    let isoscelesTriangle = "";
    for (let i = 0; i < height - 1; i++) {
        isoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n';
    }
    isoscelesTriangle += makeSpaceLine(0, 2 * (height - 1) + 1, char);
    return isoscelesTriangle;
}

function makeReverseIsoscelesTriangle(height, char) {
    char = char || '#';
    let reverseIsoscelesTriangle = "";
    for (let i = height - 1; i > 0; i--) {
        reverseIsoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1, char) + '\n';
    }
    reverseIsoscelesTriangle += makeSpaceLine(height - 1, 1, char);
    return reverseIsoscelesTriangle;
}

function makeDiamond(height, char) {
    char = char || '#';
    let diamond = "";
    diamond += makeIsoscelesTriangle(height, char) + '\n';
    diamond += makeReverseIsoscelesTriangle(height, char);
    return diamond;
}

console.log(makeLine(5, '%'));
console.log(makeSquare(5));
console.log(makeRectangle(7, 3, '@'));
console.log(makeDownwardStairs(5));
console.log(makeSpaceLine(2, 5, '*'));
console.log(makeIsoscelesTriangle(3));
console.log(makeDiamond(5, '!'));