// version 1
// constraint: the node to be deleted is not a tail node in the list

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
