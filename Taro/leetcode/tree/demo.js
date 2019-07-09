function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var inorderTraversal = (root) => {
    var stack = []; // 堆栈
    var result = []; // 解脱 左边出来了
    var cur;
    cur = root;
    // 未处理
    while (stack.length > 0 || cur !== null) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();// 第一次是不是最左边的叶子
            result.push(cur.val);
            cur = cur.right;
        }
    }

    return result;
}