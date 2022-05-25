// version 1
// reverse linked list then use object to compare
// time limit exceeds
// JSON.parse / JSON.stringify O(n)
// O(n^2 + n) runtime complexity

// note: Object.assign & { ... object } deep copy do not work on nested objects
// need to use JSON.parse(JSON.stringify()), which costs runtime

var isPalindrome = function(head) {
  if (!head.next) return true;
  let origin = JSON.parse(JSON.stringify(head))
  
  let prev = null;
  let curr = head;
  
  while(curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  
  return JSON.stringify(origin) === JSON.stringify(prev) ? true : false;
};

// version 2
// use string to reverse and compare
// O(n) runtime complexity
// O(n) space complexity
// note: I use array first but it needs JSON.stringify() to compare

var isPalindrome = function(head) {
  if (!head.next) return true;
  let forward = "";
  var backward = "";

  let currentNode = head;
  while(currentNode){
    forward = forward + currentNode.val;
    backward = currentNode.val + backward;
    currentNode = currentNode.next;
  }

  return forward === backward;
};

// version 3
// 1. find the middle point 
// (fast goes 2 step, slow goes one step, when fast / fast.next is null, slow must be the middle point)
// 2. reverse the second half
// 3. check if it is palindrome
// O(n) runtime complexity
// O(1) space complexity

var isPalindrome = function(head) {
  if (!head.next) return true;
  
  // find the middle point
  let fast = head;
  let slow = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // odd - start reverse at middle point + 1
  if (fast) {
    slow = slow.next;
  }

  // reverse the second half
  let curr = slow;
  let prev = null

  while(curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // check if it is palindrome
  // note: do not use slow here as its value has ben changed
  while (prev) {
    if (head.val !== prev.val) return false;
    head = head.next;
    prev = prev.next;
  }
  
  return true;
}