/*Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the
linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

The space complexity can be reduced to O(1)O(1) by considering two pointers at different speed - a slow pointer and
a fast pointer. The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head.next;
    let fast = head.next.next;

    while(slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};