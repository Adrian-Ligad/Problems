// 108. Convert Sorted Array to Binary Search Tree
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function (nums) {
    return rootIt(0, nums.length - 1, nums);
  };
  
  function rootIt(minorIndex, majorIndex, nums) {
    const middleIndex = Math.floor((minorIndex + majorIndex) / 2);
    const node = new TreeNode(nums[middleIndex]);
  
    if (minorIndex < middleIndex) {
      node.left = rootIt(minorIndex, middleIndex - 1, nums);
    }
  
    if (majorIndex > middleIndex) {
      node.right = rootIt(middleIndex + 1, majorIndex, nums);
    }
  
    return node;
  }