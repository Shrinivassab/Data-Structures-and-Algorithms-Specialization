/*Given a binary tree, return the preorder traversal of its nodes' values.*/

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
var preorderTraversal = function(root) {
    let data = [];
    let current = root;
    if (root === null || root.next === null) {
        return data;
    }

    function traverse(node) {
        data.push(node.val);

        if (node.left) {
            traverse(node.left);
        }

        if (node.right) {
            traverse(node.right);
        }
    }

    traverse(current);
    console.log(data);
    return data;
};