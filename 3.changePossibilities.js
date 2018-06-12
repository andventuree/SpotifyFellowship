// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// Complexity: time O(amount * denominations) | space: O(amount)
const changePossibilities = (amount, denominations) => {
  let combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    let denom = denominations[i];
    for (let j = 1; j < amount + 1; j++) {
      if (denom <= j) {
        combinations[j] += combinations[j - denom];
      }
    }
  }
  return combinations[amount];
};

console.log("changePossibilities: ");
console.log(changePossibilities(4, [1, 2, 3])); //4 combinations to 4
