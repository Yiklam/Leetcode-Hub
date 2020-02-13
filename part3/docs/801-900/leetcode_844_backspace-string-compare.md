# 844. [简单] 比较含退格的字符串

**题目链接：**[https://leetcode-cn.com/problems/backspace-string-compare](https://leetcode-cn.com/problems/backspace-string-compare)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定 <code>S</code> 和 <code>T</code> 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 <code>#</code> 代表退格字符。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "ab#c", T = "ad#c"
<strong>输出：</strong>true
<strong>解释：</strong>S 和 T 都会变成 “ac”。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "ab##", T = "c#d#"
<strong>输出：</strong>true
<strong>解释：</strong>S 和 T 都会变成 “”。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "a##c", T = "#a#c"
<strong>输出：</strong>true
<strong>解释：</strong>S 和 T 都会变成 “c”。
</pre> 
  <p><strong>示例 4：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "a#c", T = "b"
<strong>输出：</strong>false
<strong>解释：</strong>S 会变成 “c”，但 T 仍然是 “b”。</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= S.length &lt;= 200</code></li> 
   <li><code>1 &lt;= T.length &lt;= 200</code></li> 
   <li><code>S</code> 和 <code>T</code> 只含有小写字母以及字符 <code>'#'</code>。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public boolean backspaceCompare(String S, String T) {
        
    }
}
```