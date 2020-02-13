# 848. [中等] 字母移位

**题目链接：**[https://leetcode-cn.com/problems/shifting-letters](https://leetcode-cn.com/problems/shifting-letters)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>有一个由小写字母组成的字符串 <code>S</code>，和一个整数数组 <code>shifts</code>。</p> 
  <p>我们将字母表中的下一个字母称为原字母的 <em>移位</em>（由于字母表是环绕的， <code>'z'</code>&nbsp;将会变成&nbsp;<code>'a'</code>）。</p> 
  <p>例如·，<code>shift('a') = 'b'</code>，&nbsp;<code>shift('t') = 'u'</code>,， 以及&nbsp;<code>shift('z') = 'a'</code>。</p> 
  <p>对于每个&nbsp;<code>shifts[i] = x</code>&nbsp;， 我们会将 <code>S</code>&nbsp;中的前&nbsp;<code>i+1</code>&nbsp;个字母移位&nbsp;<code>x</code>&nbsp;次。</p> 
  <p>返回将所有这些移位都应用到 <code>S</code> 后最终得到的字符串。</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "abc", shifts = [3,5,9]
<strong>输出：</strong>"rpl"
<strong>解释： </strong>
我们以 "abc" 开始。
将 S 中的第 1 个字母移位 3 次后，我们得到 "dbc"。
再将 S 中的前 2 个字母移位 5 次后，我们得到 "igc"。
最后将 S 中的这 3 个字母移位 9 次后，我们得到答案 "rpl"。
</pre> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= S.length = shifts.length &lt;= 20000</code></li> 
   <li><code>0 &lt;= shifts[i] &lt;= 10 ^ 9</code></li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String shiftingLetters(String S, int[] shifts) {
        
    }
}
```