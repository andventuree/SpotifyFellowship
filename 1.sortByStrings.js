// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

// Complexity: time: O(n^2) | space: O(n)
// renamed variables for reability: str = s | order = t
const sortByStrings = (str, order) => {
  let newStrArr = [];
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === order[i]) {
        newStrArr.push(str[j]);
      }
    }
  }
  return newStrArr.join("");
};

console.log("sortByStrings: ");
console.log(sortByStrings("good", "odg")); //oodg
console.log(sortByStrings("weather", "therapyw")); //theeraw
