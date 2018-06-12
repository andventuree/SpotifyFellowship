// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

// 1. Whenever we encounter any number, push it into the integer stack and in case of any alphabet (a to z) or open bracket (‘[‘), push it onto the character stack.
// 2. Whenever any close bracket (‘]’) is encounter pop the character from the character stack until open bracket (‘[‘) is not found in the character stack. Also, pop the top element from the integer stack, say n. Now make a string repeating the popped character n number of time. Now, push all character of the string in the stack.

// Complexity: time: O(n^2) | space: O(n)
const decodeString = s => {
  let repeatAmts = [];
  let decodedStr = "";
  let decodedChunk = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (parseInt(char)) {
      //store char if its a number
      repeatAmts.push(parseInt(char));
    } else if (char === "]") {
      //encounter first close brack, start fully decoding strings
      decodedStr = decodedChunk.pop() + decodedStr.repeat(repeatAmts.pop());
    } else if (char === "[") {
      //before next nested section, chunk together current string
      decodedChunk.push(decodedStr);
      decodedStr = "";
    } else {
      //building up a string
      decodedStr += char;
    }
  }
  return decodedStr;
};

console.log("decodeString: ");
console.log(decodeString("4[ab]")); //"abababab"
console.log(decodeString("2[b3[a]]")); //"baaabaaa"
console.log(decodeString("5[b2[a1[n]]a-]")); //"banana-banana-banana-banana-banana-"
