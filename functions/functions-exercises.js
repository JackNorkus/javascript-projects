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
    let numRows = 0;
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