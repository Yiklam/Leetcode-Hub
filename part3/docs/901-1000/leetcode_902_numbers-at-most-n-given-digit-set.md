# 902. [困难] 最大为 N 的数字组合

**题目链接：**[https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set](https://leetcode-cn.com/problems/numbers-at-most-n-given-digit-set)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>我们有一组<strong>排序的</strong>数字 <code>D</code>，它是&nbsp; <code>{'1','2','3','4','5','6','7','8','9'}</code>&nbsp;的非空子集。（请注意，<code>'0'</code> 不包括在内。）</p> 
  <p>现在，我们用这些数字进行组合写数字，想用多少次就用多少次。例如&nbsp;<code>D = {'1','3','5'}</code>，我们可以写出像&nbsp;<code>'13', '551', '1351315'</code>&nbsp;这样的数字。</p> 
  <p>返回可以用 <code>D</code> 中的数字写出的小于或等于 <code>N</code> 的正整数的数目。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>D = ["1","3","5","7"], N = 100
<strong>输出：</strong>20
<strong>解释：</strong>
可写出的 20 个数字是：
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>D = ["1","4","9"], N = 1000000000
<strong>输出：</strong>29523
<strong>解释：</strong>
我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，
81 个四位数字，243 个五位数字，729 个六位数字，
2187 个七位数字，6561 个八位数字和 19683 个九位数字。
总共，可以使用D中的数字写出 29523 个整数。</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>D</code> 是按排序顺序的数字 <code>'1'-'9'</code> 的子集。</li> 
   <li><code>1 &lt;= N &lt;= 10^9</code></li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public int atMostNGivenDigitSet(String[] D, int N) {
        
    }
}
```