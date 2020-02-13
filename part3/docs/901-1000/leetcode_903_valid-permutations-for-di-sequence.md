# 903. [困难] DI 序列的有效排列

**题目链接：**[https://leetcode-cn.com/problems/valid-permutations-for-di-sequence](https://leetcode-cn.com/problems/valid-permutations-for-di-sequence)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>我们给出 <code>S</code>，一个源于&nbsp;<code>{'D', 'I'}</code>&nbsp;的长度为 <code>n</code>&nbsp;的字符串 。（这些字母代表 “减少” 和 “增加”。）<br> <em>有效排列</em>&nbsp;是对整数 <code>{0, 1, ..., n}</code>&nbsp;的一个排列&nbsp;<code>P[0], P[1], ..., P[n]</code>，使得对所有的&nbsp;<code>i</code>：</p> 
  <ul> 
   <li>如果 <code>S[i] == 'D'</code>，那么&nbsp;<code>P[i] &gt; P[i+1]</code>，以及；</li> 
   <li>如果 <code>S[i] == 'I'</code>，那么 <code>P[i] &lt; P[i+1]</code>。</li> 
  </ul> 
  <p>有多少个有效排列？因为答案可能很大，所以请<strong>返回你的答案模</strong><strong> <code>10^9 + 7</code></strong>.</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"DID"
<strong>输出：</strong>5
<strong>解释：</strong>
(0, 1, 2, 3) 的五个有效排列是：
(1, 0, 3, 2)
(2, 0, 3, 1)
(2, 1, 3, 0)
(3, 0, 2, 1)
(3, 1, 2, 0)
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= S.length &lt;= 200</code></li> 
   <li><code>S</code> 仅由集合 <code>{'D', 'I'}</code>&nbsp;中的字符组成。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public int numPermsDISequence(String S) {
        
    }
}
```