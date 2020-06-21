# 198. [简单] 打家劫舍

**题目链接：**[https://leetcode-cn.com/problems/house-robber](https://leetcode-cn.com/problems/house-robber)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p> 
  <p>给定一个代表每个房屋存放金额的非负整数数组，计算你<strong>在不触动警报装置的情况下，</strong>能够偷窃到的最高金额。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> [1,2,3,1]
<strong>输出:</strong> 4
<strong>解释:</strong> 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
&nbsp;    偷窃到的最高金额 = 1 + 3 = 4 。</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> [2,7,9,3,1]
<strong>输出:</strong> 12
<strong>解释:</strong> 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
&nbsp;    偷窃到的最高金额 = 2 + 9 + 1 = 12 。
</pre> 
 </div>
</div>

---

```java
class Solution {
    public int rob(int[] nums) {

    }
}
```

```java
class Solution {
    /**
     * n == 1, dp[0] = nums[0]
     * n == 2, dp[1] = max(nums[0], nums[1])
     * n > 2, dp[n] = max(dp[n-1], dp[n-2] + nums[i])
     *
     * @param nums nums
     * @return int
     */
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int len = nums.length;
        if (len == 1) {
            return nums[0];
        }
        // dp
        int[] dp = new int[len];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for (int i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return dp[len - 1];
    }

//    public static void main(String[] args) {
//        int[] nums1 = new int[]{1, 2, 3, 1};
//        int[] nums2 = new int[]{2, 7, 9, 3, 1};
//
//        Solution198 solution = new Solution198();
//
//        System.out.println(solution.rob(nums1));
//        System.out.println(solution.rob(nums2));
//    }
}
```
