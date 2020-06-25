# 23. [困难] 合并 K 个排序链表

**题目链接：**[https://leetcode-cn.com/problems/merge-k-sorted-lists](https://leetcode-cn.com/problems/merge-k-sorted-lists)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>合并&nbsp;<em>k&nbsp;</em>个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。</p> 
  <p><strong>示例:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
[
&nbsp; 1-&gt;4-&gt;5,
&nbsp; 1-&gt;3-&gt;4,
&nbsp; 2-&gt;6
]
<strong>输出:</strong> 1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6</pre> 
 </div>
</div>

---

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

    }
}
```

```java
import java.util.PriorityQueue;

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for (ListNode listNode : lists) {
            while (listNode != null) {
                priorityQueue.add(listNode.val);
                listNode = listNode.next;
            }
        }
        ListNode dummy = new ListNode(0);
        ListNode p0 = dummy;
        while (!priorityQueue.isEmpty()) {
            p0.next = new ListNode(priorityQueue.poll());
            p0 = p0.next;
        }
        return dummy.next;
    }

//    public static void main(String[] args) {
//        ListNode listNode1 = new ListNode(1, new ListNode(4, new ListNode(5)));
//        ListNode listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));
//        ListNode listNode3 = new ListNode(2, new ListNode(6));
//        ListNode[] lists = new ListNode[]{listNode1, listNode2, listNode3};
//
//        Solution23 solution = new Solution23();
//        ListNode res = solution.mergeKLists(lists);
//
//        ListNode.printListNode(res);
//    }
}
```
