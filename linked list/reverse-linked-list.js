// version 1
// iterative - two pointers

var reverseList = function(head) {
  if (!head || !head.next) return head;
  
  let cur = head;
  let prev = null;
  
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  
  return prev;
};

// version 2
// destructuring assignment to replace temp variable

var reverseList = function(head) {
  if (!head || !head.next) return head;
  
  let cur = head;
  let prev = null;
  
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  
  return prev;
};

// version 3
// recursive
// (this one changes params)

var reverseList = function(head, prev=null) {
  if (!head) return prev;

  const temp = head.next;
  head.next = prev;
  return reverseList(temp, head);
};

// version 4
// recursive
// eg. 1 -> 2 -> 3

var reverseList = function(head) {
  let curr = head;
  if (!curr || !curr.next) return curr; // will return 3
  
  let newHead = reverseList(curr.next); // newHead is 3

  curr.next.next = curr; // make 3 -> 2
  curr.next = null; // make 2 -> null

  return newHead;
}; 