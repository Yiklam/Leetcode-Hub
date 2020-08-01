# 64. [中等] 最小路径和

**题目链接：**[https://leetcode-cn.com/problems/minimum-path-sum](https://leetcode-cn.com/problems/minimum-path-sum)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个包含非负整数的 <em>m</em>&nbsp;x&nbsp;<em>n</em>&nbsp;网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p> 
  <p><strong>说明：</strong>每次只能向下或者向右移动一步。</p> 
  <p><strong>示例:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
[
&nbsp; [1,3,1],
  [1,5,1],
  [4,2,1]
]
<strong>输出:</strong> 7
<strong>解释:</strong> 因为路径 1→3→1→1→1 的总和最小。
</pre> 
 </div>
</div>

---

```java
class Solution {
    public int minPathSum(int[][] grid) {

    }
}
```

```java
public class Solution {
    // dp
    public int minPathSum(int[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int mm = grid.length;
        int nn = grid[0].length;
        int[][] dp = new int[mm][nn];
        dp[0][0] = grid[0][0];
        // 注意先后顺序
        for (int i = 1; i < mm; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for (int i = 1; i < nn; i++) {
            dp[0][i] = dp[0][i - 1] + grid[0][i];
        }
        for (int i = 1; i < mm; i++) {
            for (int j = 1; j < nn; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
        return dp[mm - 1][nn - 1];
    }

//    public static void main(String[] args) {
//        int[][] grid1 = {{1, 3, 1}, {1, 5, 1}, {4, 2, 1}};
//        int[][] grid2 = {{1, 2}, {3, 4}};
//        int[][] grid3 = {{1}, {2}};
//        int[][] grid4 = {{1, 2}};
//        Solution64 solution = new Solution64();
//        System.out.println(solution.minPathSum(grid1));
//        System.out.println(solution.minPathSum(grid2));
//        System.out.println(solution.minPathSum(grid3));
//        System.out.println(solution.minPathSum(grid4));
//    }
}
```
