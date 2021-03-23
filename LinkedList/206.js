// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let newList = null
    while(head !== null) {
        let tempNext = head.next
        head.next = newList
        newList = head
        head = tempNext
    }
    return newList
};