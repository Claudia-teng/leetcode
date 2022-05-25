// version 1
// 1. compare the first node
// 2. compare the curr.next & parallel node
// 3. connect to the rest of nodes

var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  
  let curr;
  let nextNode;
  let parallelNode;

  if (list1.val < list2.val) {
    curr = list1;
    nextNode = curr.next;
    parallelNode = list2;
  } else {
    curr = list2;
    nextNode = curr.next;
    parallelNode = list1;
  }
  
  while (nextNode) {
    if (nextNode.val < parallelNode.val) {
      curr = nextNode;
      nextNode = curr.next;
    } else {
      const temp = curr.next;
      curr.next = parallelNode;
      curr = curr.next;
      parallelNode = temp;
      nextNode = curr.next;
    }
  }
  
  if (parallelNode) curr.next = parallelNode;
  
  return list1.val < list2.val ? list1 : list2;
};

// version 2
// add a dummy node at the front (cleaner way)

var mergeTwoLists = function(list1, list2) {
  let result = new ListNode(0);
  let curr = result;

  while(list1 && list2) {
    if(list1.val > list2.val){
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next
    }
    curr = curr.next;
  }

  if(list1){
    curr.next = list1;
  }

  if(list2){
    curr.next = list2;
  }
  
  return result.next;
};

// version 3
// recursion

var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
