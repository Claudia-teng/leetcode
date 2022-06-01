// version 1
// use a node containing val & min 
// min is to remember the min value except itself

var MinStack = function() {
  this.stack = [];
  this.min;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  const node = {
    val: val,
    min: this.min
  }
  this.stack.push(node);
  
  if (this.min == null) {
    this.min = val;
  } else {
    this.min = Math.min(this.min, val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.min = this.stack.pop().min;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1].val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

// version 2
// still store integer in stack
// but add a min value before push a value when value <= min
// note: the condition is value <= min (don't forget the equal)

var MinStack = function() {
  this.stack = [];
  this.min = Number.MAX_SAFE_INTEGER;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  if (val <= this.min) {
    this.stack.push(this.min);
    this.min = val;
  }

  this.stack.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.min) {
    this.min = this.stack.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min;
};

