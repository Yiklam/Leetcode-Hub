# 645. [简单] 错误的集合

**题目链接：**[https://leetcode-cn.com/problems/set-mismatch](https://leetcode-cn.com/problems/set-mismatch)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>集合 <code>S</code> 包含从1到&nbsp;<code>n</code>&nbsp;的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。</p> 
  <p>给定一个数组 <code>nums</code> 代表了集合 <code>S</code> 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> nums = [1,2,2,4]
<strong>输出:</strong> [2,3]
</pre> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>给定数组的长度范围是&nbsp;[2, 10000]。</li> 
   <li>给定的数组是无序的。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public int[] findErrorNums(int[] nums) {
        
    }
}
```

```java
import java.util.Arrays;
import java.util.BitSet;

public class Solution {
    public int[] findErrorNums(int[] nums) {
        int len = nums.length; // [2, 10000]
        // 默认情况下 bitSet 中所有位的初始值都是 false
        BitSet bitSet = new BitSet(len + 1);
        int trueCnt = 0;
        for (int i = 1; i <= len; i++) {
            trueCnt += i;
        }
        int falseCnt = 0;
        for (int num : nums) {
            // 1224 => true false false true
            // 1334 => true false false true
            bitSet.set(num, !bitSet.get(num));
            falseCnt += num;
        }
        int[] res = new int[2];
        for (int i = 1, j = 0; i <= len; i++) {
            if (!bitSet.get(i)) {
                res[j] = i;
                j++;
            }
        }
        if (falseCnt < trueCnt) {
            return res;
        } else {
            return new int[]{res[1], res[0]};
        }
    }

//    public static void main(String[] args) {
//        int[] nums1 = {1, 2, 2, 4};
//        int[] nums2 = {1, 3, 3, 4};
//        Solution645 solution = new Solution645();
//        Arrays.stream(solution.findErrorNums(nums1)).forEach(System.out::print);
//        Arrays.stream(solution.findErrorNums(nums2)).forEach(System.out::print);
//    }
}
```