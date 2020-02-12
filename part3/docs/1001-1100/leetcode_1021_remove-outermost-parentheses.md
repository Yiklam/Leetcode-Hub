# 1021. 删除最外层的括号

**题目链接：**[https://leetcode-cn.com/problems/remove-outermost-parentheses](https://leetcode-cn.com/problems/remove-outermost-parentheses)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>有效括号字符串为空&nbsp;<code>("")</code>、<code>"(" + A + ")"</code>&nbsp;或&nbsp;<code>A + B</code>，其中&nbsp;<code>A</code> 和&nbsp;<code>B</code>&nbsp;都是有效的括号字符串，<code>+</code>&nbsp;代表字符串的连接。例如，<code>""</code>，<code>"()"</code>，<code>"(())()"</code>&nbsp;和&nbsp;<code>"(()(()))"</code>&nbsp;都是有效的括号字符串。</p> 
  <p>如果有效字符串&nbsp;<code>S</code>&nbsp;非空，且不存在将其拆分为&nbsp;<code>S = A+B</code>&nbsp;的方法，我们称其为<strong>原语（primitive）</strong>，其中&nbsp;<code>A</code> 和&nbsp;<code>B</code>&nbsp;都是非空有效括号字符串。</p> 
  <p>给出一个非空有效字符串&nbsp;<code>S</code>，考虑将其进行原语化分解，使得：<code>S = P_1 + P_2 + ... + P_k</code>，其中&nbsp;<code>P_i</code>&nbsp;是有效括号字符串原语。</p> 
  <p>对&nbsp;<code>S</code>&nbsp;进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 <code>S</code>&nbsp;。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"(()())(())"
<strong>输出：</strong>"()()()"
<strong>解释：
</strong>输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"(()())(())(()(()))"
<strong>输出：</strong>"()()()()(())"
<strong>解释：</strong>
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"()()"
<strong>输出：</strong>""
<strong>解释：</strong>
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>S.length &lt;= 10000</code></li> 
   <li><code>S[i]</code> 为&nbsp;<code>"("</code> 或&nbsp;<code>")"</code></li> 
   <li><code>S</code> 是一个有效括号字符串</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String removeOuterParentheses(String S) {
        
    }
}
```