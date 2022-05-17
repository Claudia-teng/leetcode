// Only use the methods that stacks have
// pop / push / peek(last item)

var MyQueue = function() {
  this.s1 = [];
  this.s2 = [];
  this.front = null; // use this to keep track of the first item
};

// queue push -> add to the end
// Only add new item to s1
// Do not need to worry about updating "front" when s1 is empty
// because peak() will check if s2 is empty or not

MyQueue.prototype.push = function(x) {
  if (this.s1.length === 0) {
      this.front = x;
  }
  this.s1.push(x);
};

// queue pop -> remove first item
// reverse the order in s2 to get the bottom (first) item
// note: do not need to put back items to s1
// because next time we can access the first item just using s2

MyQueue.prototype.pop = function() {
  if (this.s2.length === 0) {
      while(this.s1.length !== 0) {
          this.s2.push(this.s1.pop())
      }
  }
  return this.s2.pop();
}

// queue peek -> get the first item
// if s2 has items (which means "pop" has been called before, and we can easily access the first item)
// get the top one
// or else the first one "front" in s1 (at the bottom)

MyQueue.prototype.peek = function() {
  if (this.s2.length !== 0) {
      return this.s2[this.s2.length-1];
  }
  return this.front;
};

// queue empty -> check if two stacks are all empty

MyQueue.prototype.empty = function() {
  return this.s1.length === 0 && this.s2.length === 0;
};