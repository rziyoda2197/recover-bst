class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

function recoverTree(root) {
    let prev = null;
    let first = null;
    let second = null;

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);

        if (prev !== null && node.val < prev.val) {
            if (first === null) {
                first = prev;
                second = node;
            } else {
                second = node;
            }
        }

        prev = node;
        inorder(node.right);
    }

    inorder(root);

    [first.val, second.val] = [second.val, first.val];
}

// Test
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

recoverTree(root);

console.log(root.val); // 1
console.log(root.left.val); // 3
console.log(root.right.val); // 2
console.log(root.left.left.val); // 4
console.log(root.left.right.val); // 5
console.log(root.right.left.val); // 6
console.log(root.right.right.val); // 7
