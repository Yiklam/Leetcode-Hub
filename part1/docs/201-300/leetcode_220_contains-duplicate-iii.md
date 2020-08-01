# 220. [中等] 存在重复元素 III

**题目链接：**[https://leetcode-cn.com/problems/contains-duplicate-iii](https://leetcode-cn.com/problems/contains-duplicate-iii)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个整数数组，判断数组中是否有两个不同的索引 <em>i</em> 和 <em>j</em>，使得&nbsp;<strong>nums [i]</strong> 和&nbsp;<strong>nums [j]</strong>&nbsp;的差的绝对值最大为 <em>t</em>，并且 <em>i</em> 和 <em>j</em> 之间的差的绝对值最大为 <em>ķ</em>。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> nums = [1,2,3,1], k<em> </em>= 3, t = 0
<strong>输出:</strong> true</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>nums = [1,0,1,1], k<em> </em>=<em> </em>1, t = 2
<strong>输出:</strong> true</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>nums = [1,5,9,1,5,9], k = 2, t = 3
<strong>输出:</strong> false</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {

    }
}
```

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            if (!map.containsKey(nums[i])) {
                map.put(nums[i], i);
            } else if (i - map.get(nums[i]) <= k) {
                return true;
            } else {
                map.put(nums[i], i);
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[] nums1 = new int[]{1, 2, 3, 1};
        int[] nums2 = new int[]{1, 0, 1, 1};
        int[] nums3 = new int[]{1, 5, 9, 1, 5, 9};
        Solution220 solution = new Solution220();
        System.out.println(solution.containsNearbyAlmostDuplicate(nums1, 3, 0)); // true
        System.out.println(solution.containsNearbyAlmostDuplicate(nums2, 1, 2)); // true
        System.out.println(solution.containsNearbyAlmostDuplicate(nums3, 2, 3)); // false
    }
}
```
