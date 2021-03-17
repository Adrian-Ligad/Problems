// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(), a = head
    let remainder = 0
    while(l1 !== null || l2 !== null || remainder === 1) {
        let numOne = l1 ? l1.val : 0
        let numTwo = l2 ? l2.val : 0 
        let numAdd = numOne + numTwo + remainder
        remainder = Math.floor(numAdd/10)
        numAdd = numAdd % 10
        a.next = new ListNode(numAdd)
        a = a.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return head.next
};