# 643. [简单] 子数组最大平均数 I

**题目链接：**[https://leetcode-cn.com/problems/maximum-average-subarray-i](https://leetcode-cn.com/problems/maximum-average-subarray-i)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定 <code>n</code> 个整数，找出平均数最大且长度为 <code>k</code> 的连续子数组，并输出该最大平均数。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> [1,12,-5,-6,50,3], k = 4
<strong>输出:</strong> 12.75
<strong>解释:</strong> 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>1 &lt;= <code>k</code> &lt;= <code>n</code> &lt;= 30,000。</li> 
   <li>所给数据范围 [-10,000，10,000]。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public double findMaxAverage(int[] nums, int k) {

    }
}
```

```java
import java.util.Arrays;

public class Solution {
    public double findMaxAverage(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k == 0) {
            return 0;
        }
        int pastCnt = doGetSum(Arrays.copyOfRange(nums, 0, k)); // [0, k)
        int maxCnt = pastCnt;
        for (int i = 1; i <= nums.length - k; i++) {
            int newCnt = pastCnt - nums[i - 1] + nums[i - 1 + k];
            maxCnt = Math.max(maxCnt, newCnt);
            pastCnt = newCnt;
        }
        return (double) maxCnt / k;
    }

    private int doGetSum(int[] subNums) {
        return Arrays.stream(subNums).sum();
    }

//    public static void main(String[] args) {
//        int[] nums1 = {1, 12, -5, -6, 50, 3}; // 2 51 42
//        int k1 = 4;
//        int[] nums2 = {-1};
//        int k2 = 1;
//        int[] nums3 = {0, 4, 0, 3, 2};
//        int k3 = 1;
//        Solution643 solution = new Solution643();
//        System.out.println(solution.findMaxAverage(nums1, k1)); // 12.75
//        System.out.println(solution.findMaxAverage(nums2, k2)); // -1.0
//        System.out.println(solution.findMaxAverage(nums3, k3)); // 4.0
//    }
}
```
