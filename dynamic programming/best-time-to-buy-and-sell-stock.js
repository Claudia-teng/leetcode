// version 1
// O(n^2) runtime complexity
// time limit exceeds

var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};

// version 2
// use min/max/profit to remember past values
// O(n) runtime complexity

var maxProfit = function (prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
      profit = Math.max(profit, max - min);
    }
  }
  return profit;
};

// version 3
// only remember max profit, do not need to remember max num

var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    let currProfit = prices[i] - min;
    if (currProfit > profit) {
      profit = currProfit;
    }
  }
  return profit;
};
