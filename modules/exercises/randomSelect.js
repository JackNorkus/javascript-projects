function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomElem = Math.floor(Math.random() * arr.length);
  return arr[randomElem];
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;
