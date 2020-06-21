# 215. [中等] 数组中的第K个最大元素

**题目链接：**[https://leetcode-cn.com/problems/kth-largest-element-in-an-array](https://leetcode-cn.com/problems/kth-largest-element-in-an-array)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>在未排序的数组中找到第 <strong>k</strong> 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <code>[3,2,1,5,6,4] 和</code> k = 2
<strong>输出:</strong> 5
</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <code>[3,2,3,1,2,4,5,5,6] 和</code> k = 4
<strong>输出:</strong> 4</pre> 
  <p><strong>说明: </strong></p> 
  <p>你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。</p> 
 </div>
</div>

---

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        
    }
}
```

```java
import java.util.PriorityQueue;

class solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        for (int num : nums) {
            priorityQueue.add(-num);
        }
        for (int i = 0; i < k - 1; i++) {
            priorityQueue.remove();
        }
        return -priorityQueue.remove();
    }

//    public static void main(String[] args) {
//        int[] nums1 = new int[]{3, 2, 1, 5, 6, 4};
//        int[] nums2 = new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6};
//
//        Solution215 solution = new Solution215();
//
//        System.out.println(solution.findKthLargest(nums1, 2)); // 5
//        System.out.println(solution.findKthLargest(nums2, 4)); // 4
//    }
}
```