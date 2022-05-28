// version 1

var levelOrder = function(root) {
  if (!root) return [];
  let list = [];
  let queue = [];
  queue.push(root);
  
  while (queue.length > 0) {
    let qLen = queue.length; // use this to control level counts
    let level = [];
    for (let i=0; i<qLen; i++) {
      let currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }      
    }
    list.push(level);
  }
  
  return list;
};