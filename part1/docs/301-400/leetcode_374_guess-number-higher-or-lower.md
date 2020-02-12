# 374. 猜数字大小

**题目链接：**[https://leetcode-cn.com/problems/guess-number-higher-or-lower](https://leetcode-cn.com/problems/guess-number-higher-or-lower)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>我们正在玩一个猜数字游戏。 游戏规则如下：<br> 我从&nbsp;<strong>1</strong>&nbsp;到&nbsp;<em><strong>n</strong></em>&nbsp;选择一个数字。 你需要猜我选择了哪个数字。<br> 每次你猜错了，我会告诉你这个数字是大了还是小了。<br> 你调用一个预先定义好的接口&nbsp;<code>guess(int num)</code>，它会返回 3 个可能的结果（<code>-1</code>，<code>1</code>&nbsp;或 <code>0</code>）：</p> 
  <pre class="language-text">-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
</pre> 
  <p><strong>示例 :</strong></p> 
  <pre class="language-text"><strong>输入: </strong>n = 10, pick = 6
<strong>输出: </strong>6</pre> 
 </div>
</div>

---

```java
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        
    }
}
```