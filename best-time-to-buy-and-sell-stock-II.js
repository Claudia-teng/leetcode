// version 1
// compare today's price with current stock price

var maxProfit = function(prices) {
  let profit = 0;
  let current = prices[0];
  for (let i=1; i<prices.length; i++) {
      if (prices[i] > current) {
          profit += prices[i] - current;
          current = prices[i];
      } else if (prices[i] === current) {
          continue;
      } else {
          current = prices[i];
      }
  }
  return profit;
};

// version 2
// replace current stock price "let current" to "let prev = prices[i-1]"

var maxProfit = function(prices) {
  let profit = 0;
  for (let i=1; i<prices.length; i++) {
      let prev = prices[i-1];
      let current = prices[i];
      if (prev < current) {
          profit += current - prev
      }
  }
  return profit;
};