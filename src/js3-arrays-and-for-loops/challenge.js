/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => { // !!! USE JOIN METHOD !!! 
  let ingredient = "";
  let finalRecipe = "";

  for (let i = 0; i < ingredientsArr.length; i++) {
    ingredient = ingredientsArr[i];

    if (finalRecipe.length == 0) {
      finalRecipe = ingredient;
    } else {
      finalRecipe = finalRecipe + "+" + ingredient;
    }
  }

  return finalRecipe;
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  let newArray = [];

  let firstItem = itemsArr.shift();
  itemsArr.unshift(firstItem);

  let lastItem = itemsArr.pop();
  itemsArr.push(lastItem);

  newArray.push(firstItem, lastItem);

  return newArray;
};

/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr) => {
  let totalScore = 0;

  // needed reducer below for reduce method
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  totalScore = scoreArr.reduce(reducer);

  return totalScore;
};

/**
 * Intermediate Challenges
 */

/**
 * A function that takes a number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  let rangeArr = [];
  let totalRange = 0;

  for (let i = 0; i <= rangeMax; i++) {
    rangeArr.push(i);
  }
  // needed reducer below for reduce method
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  totalRange = rangeArr.reduce(reducer);

  return totalRange;
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  let myArray = [...itemsArr];

  const myLastItem = myArray.pop();
  myArray.unshift(myLastItem);

  return myArray;
};

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  let myOddNumbersArr = [];
  for (let index = 0; index < numberArr.length; index++) {
    if ( numberArr[index] % 2 !== 0) {
      myOddNumbersArr.push(numberArr[index]); 
    }   
  }

  return myOddNumbersArr;
};

/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr) => {
  let average = 0;

  if (numberArr.length == 0) {
    return average;
  } else {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = numberArr.reduce(reducer);
    average = Math.ceil(sum / numberArr.length);

    return average;
  }
};

/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr) => {
  let reversedArr = [...toReverseArr];

  reversedArr.reverse();

  return reversedArr;
};

/**
 * Expert Challenges
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr, scoresArr) => {
  return;
};

/**
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

// export const encryptString = (toEncrypt) => {
//   return;
// };

export const encryptString = (toEncrypt) => {
  return;
};
