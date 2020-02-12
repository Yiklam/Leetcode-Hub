# 1003. 检查替换后的词是否有效

**题目链接：**[https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions](https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定有效字符串&nbsp;<code>"abc"</code>。</p> 
  <p>对于任何有效的字符串 <code>V</code>，我们可以将 <code>V</code> 分成两个部分 <code>X</code> 和 <code>Y</code>，使得 <code>X + Y</code>（<code>X</code> 与 <code>Y</code> 连接）等于 <code>V</code>。（<code>X</code>&nbsp;或 <code>Y</code> 可以为空。）那么，<code>X + "abc" + Y</code> 也同样是有效的。</p> 
  <p>例如，如果 <code>S = "abc"</code>，则有效字符串的示例是：<code>"abc"</code>，<code>"aabcbc"</code>，<code>"abcabc"</code>，<code>"abcabcababcc"</code>。<strong>无效</strong>字符串的示例是：<code>"abccba"</code>，<code>"ab"</code>，<code>"cababc"</code>，<code>"bac"</code>。</p> 
  <p>如果给定字符串 <code>S</code> 有效，则返回 <code>true</code>；否则，返回 <code>false</code>。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"aabcbc"
<strong>输出：</strong>true
<strong>解释：</strong>
从有效字符串 "abc" 开始。
然后我们可以在 "a" 和 "bc" 之间插入另一个 "abc"，产生 "a" + "abc" + "bc"，即 "aabcbc"。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"abcabcababcc"
<strong>输出：</strong>true
<strong>解释：</strong>
"abcabcabc" 是有效的，它可以视作在原串后连续插入 "abc"。
然后我们可以在最后一个字母之前插入 "abc"，产生 "abcabcab" + "abc" + "c"，即 "abcabcababcc"。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"abccba"
<strong>输出：</strong>false
</pre> 
  <p><strong>示例 4：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"cababc"
<strong>输出：</strong>false</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= S.length &lt;= 20000</code></li> 
   <li><code>S[i]</code> 为&nbsp;<code>'a'</code>、<code>'b'</code>、或&nbsp;<code>'c'</code></li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public boolean isValid(String S) {
        
    }
}
```