function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// 102 层次遍历
// 从根开始， 一层层来分层遍历， 7结束，
// [[3], [9, 20], [15, 7]] 
//     3
//    / \
//   9   20
//       / \
//      15  7
// 按层 每个结点把子结点告诉 算法就OK
// items [] 子结点也可能有子结点
// 队列 Queue

function levelOrderTravesal (root) {
    if (!root) {
        return [];
    }
    const items = [];
    // tree node left right
    let  queue = [root, null]; // 队列， 等待被了解情况的结点 出队 shift
    let  levelNodes = []; // 每一层的结点
    while(queue.length > 0) {
        const t = queue.shift();
        // root
        if (t) {
            levelNodes.push(t.val);
            if (t.left) {
                queue.push(t.left);
            }
            if (t.right) {
                queue.push(t.right);
            }
        } else {
            // null 层次分隔符
            items.push(levelNodes);
            levelNodes = [];
            // null 上一层 在队列里的结点是？
            // 下一层的所有结点， 绝对没有下下层的结点
            if (queue.length > 0) {
                queue.push(null);
            }
        }
    }
    return items;
}

console.log(levelOrderTravesal(a1));

// queue [root, null] [null]
// levelNodes []
// items []