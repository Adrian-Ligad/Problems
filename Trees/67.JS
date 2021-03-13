// 617. Merge Two Binary Trees
// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. 
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, 
// then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 const mergeTrees = (t1, t2) => {
    if (!t1 && !t2) return null;
    
    const left = mergeTrees(t1 && t1.left, t2 && t2.left);
    const right = mergeTrees(t1 && t1.right, t2 && t2.right);
        
    return new TreeNode(
        (t1 && t1.val) + (t2 && t2.val),
        left,
        right,
    );
};