// 1290. Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. 
// The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let result = 0
    while(head !== null) {
        result = result * 2 + head.val 
        head = head.next
    }
    return result
    
};