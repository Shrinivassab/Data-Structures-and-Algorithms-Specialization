/*Iterative Solution
We iterate through the list once, changing the next pointer of each node to the previous node.
The order of operations is important: we copy node.next into tmp before setting node.next to previous.
Otherwise when we “step forward” at the end of the list we’d actually step back to the previous node.

When we exit the list tmp is null, which means the last node visited previous was the tail of the original list.
Therefore it is the head of our new reversed list.*/

// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous = null,
        tmp;

    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;

        // reverse pointer
        node.next = previous;

        // step forward in the list
        previous = node;
        node = tmp;
    }

    return previous;
}
