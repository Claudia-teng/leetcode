// version 1
// use a flag to note the node that has been visited

var hasCycle = function(head) {
  if (!head || !head.next) return false;
  
  let curr = head;
  
  while (curr) {
    if (curr.flag) {
      return true;
    } else {
      curr.flag = true;
    }
    curr = curr.next;
  }
  return false;
};

// version 2
// two pointers
// slow goes 1 step, fast goes 2 steps
// if slow and fast meet, it is circular
// floyd's tortoise and hare algorithm

var hasCycle = function(head) {
  if (!head || !head.next) return false;
  
  let slow = head.next;
  let fast = head.next.next;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    // compare the same object (reference)
    if (slow === fast) return true;
  }
  
  return false;
};