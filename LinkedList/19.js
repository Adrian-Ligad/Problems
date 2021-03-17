// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let a = new ListNode(0, head), b = head
    let count = 0
    while(b !== null) {
        count++
        b = b.next
    }
    count -= n
    b = a
    while(count-- > 0) b = b.next
    b.next = b.next.next
    return a.next
};



    // let a = new ListNode(0,head), b = head
    // let count = 0
    // while(b !== null) {
    //     count++
    //     b = b.next;
    // }
    // count -= n
    // b = a
    // while(count-- > 0) b = b.next
    // b.next = b.next.next
    // return a.next