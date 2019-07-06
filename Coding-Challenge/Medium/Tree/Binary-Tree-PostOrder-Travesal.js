/* Binary Tree Postorder Traversal*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let data = [];
    let current = root;
    if (root === null || root.next === null) {
        return data;
    }
    function traverse(node) {

        if (node.left) {
            traverse(node.left);
        }

        if (node.right) {
            traverse(node.right);
        }

        data.push(node.val);
    }

    traverse(current);
    return data;
};