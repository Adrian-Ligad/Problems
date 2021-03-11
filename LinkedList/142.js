/*142. LinkedList II
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter. Notice that you should not modify the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const detectCycle = function(head) {
    if (head === null) return null;
    
    let tort = head.next;
    let hare = head.next ? head.next.next : null;
    
    while (hare) {
      if (tort === hare) {
        let p = head;
        while (p !== hare) {
          p = p.next;
          hare = hare.next;
        }
        return p;
      }
      tort = tort.next;
      hare = hare.next ? hare.next.next : null;
    }
    
    return null;
  }