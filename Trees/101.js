/* 101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const que = [root.left, root.right]
    while(que.length > 0) {
        let queLHalf = que.length/2, queVals = [], queValsReversed = []
        for( let i = 0; i < queLHalf; i++) {
            let node = que.shift()
            if(node === null) {
                queVals.push(null);
                continue;
            }
            que.push(node.left)
            que.push(node.right)
            queVals.push(node.val)
        }
        for( let i = 0; i < queLHalf; i++) {
            let node = que.shift()
            if(node === null) {
                queValsReversed.push(null);
                continue;
            }
            que.push(node.right)
            que.push(node.left)
            queValsReversed.push(node.val)
        }
        let longest = Math.max(queVals.length, queValsReversed.length)
        for(let j = 0; j < longest; j++) {
            // console.log(queVals, queValsReversed)
            if(queVals[j] !== queValsReversed[j]) return false
        }
    }
    return true
};