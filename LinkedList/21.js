// 21. Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

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
 var mergeTwoLists = function(l1, l2) {
    if (l1 === null || l2 === null) return l1 === null ? l2 : l1
    let temp1 = l1, temp2 = l2
    let lNodes = head = new ListNode()
    while (temp1 && temp2) {
        let cur = temp1.val <= temp2.val ? temp1 : temp2
        lNodes.next = cur
        lNodes = lNodes.next
        cur === temp1 ? temp1 = temp1.next : temp2 = temp2.next
    }
    lNodes.next = temp1 === null ? temp2 : temp1
    return head.next
}