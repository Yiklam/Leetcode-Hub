# 21. [简单] 合并两个有序链表

**题目链接：**[https://leetcode-cn.com/problems/merge-two-sorted-lists](https://leetcode-cn.com/problems/merge-two-sorted-lists)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>1-&gt;2-&gt;4, 1-&gt;3-&gt;4
<strong>输出：</strong>1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4
</pre> 
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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {

    }
}
```

```java
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode merge = new ListNode();
        ListNode res = merge;
        while (true) {
            if (l1 == null && l2 == null) {
                return null;
            } else if (l1 == null) {
                merge.val = l2.val;
                merge.next = l2.next;
                break;
            } else if (l2 == null) {
                merge.val = l1.val;
                merge.next = l1.next;
                break;
            }
            if (l1.val < l2.val) {
                merge.val = l1.val;
                l1 = l1.next;
            } else {
                merge.val = l2.val;
                l2 = l2.next;
            }
            merge.next = new ListNode();
            merge = merge.next;

        }
        return res;
    }

//    public static void main(String[] args) {
////        ListNode listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
////        ListNode listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));
////        ListNode listNode2 = new ListNode(5, new ListNode(6, new ListNode(7)));
//        ListNode listNode1 = null;
//        ListNode listNode2 = null;
//
//        Solution21 solution = new Solution21();
//        ListNode res1 = solution.mergeTwoLists(listNode1, listNode2);
//
////        printListNode(listNode1);
////        printListNode(listNode2);
//        printListNode(res1);
//    }
//
//    private static void printListNode(ListNode listNode) {
//        while (listNode != null) {
//            System.out.print(listNode.val);
//            listNode = listNode.next;
//        }
//        System.out.println();
//    }

```
