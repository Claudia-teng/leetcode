// version 1
// get the length of linked list
// get the index that should be removed

var removeNthFromEnd = function (head, n) {
  if (!head) return head;

  // get the length of linked list
  let counter = 0;
  let currentNode = head;
  while (currentNode) {
    currentNode = currentNode.next;
    counter++;
  }

  // get the index
  let index = counter - n;
  let leader = head;

  // handle index - or else leader.next will be null and error occurs ([1], 1)
  // if the removed index is 0, do not need leader
  if (index === 0) return head.next;

  for (let i = 0; i < index - 1; i++) {
    leader = leader.next;
  }

  leader.next = leader.next.next;

  return head;
};

// version 2
// two pointers
// 1. add a fake node at the start
// 2. first pointer: starts from head, go n steps
// 3. two pointers go together, second pointer starts from fake node
// 4. when the first pointer reaches the end (null), the second pointer is pointing the leader index (remove index - 1)

var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  let fakeNode = new ListNode(0);
  fakeNode.next = head;

  let first = head;
  let second = fakeNode;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return fakeNode.next; // do not return head as head might be removed
};
