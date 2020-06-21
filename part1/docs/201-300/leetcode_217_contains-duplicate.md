# 217. [简单] 存在重复元素

**题目链接：**[https://leetcode-cn.com/problems/contains-duplicate](https://leetcode-cn.com/problems/contains-duplicate)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个整数数组，判断是否存在重复元素。</p> 
  <p>如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> [1,2,3,1]
<strong>输出:</strong> true</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>[1,2,3,4]
<strong>输出:</strong> false</pre> 
  <p><strong>示例&nbsp;3:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>[1,1,1,3,3,4,3,2,4,2]
<strong>输出:</strong> true</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {

    }
}
```

```java
import java.util.HashSet;
import java.util.Set;

class Solution {

    public boolean containsDuplicate(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (!set.contains(num)) {
                set.add(num);
            } else {
                return true;
            }
        }
        return false;
    }

//    public static void main(String[] args) {
//        int[] nums1 = new int[]{1, 2, 3, 1};
//        int[] nums2 = new int[]{1, 2, 3, 4};
//        int[] nums3 = new int[]{1, 1, 1, 3, 3, 4, 3, 2, 4, 2};
//
//        Solution217 solution = new Solution217();
//
//        System.out.println(solution.containsDuplicate(nums1)); // true
//        System.out.println(solution.containsDuplicate(nums2)); // false
//        System.out.println(solution.containsDuplicate(nums3)); // true
//    }
}

```
