# $1087. 字母切换

**题目链接：**[https://leetcode-cn.com/problems/brace-expansion](https://leetcode-cn.com/problems/brace-expansion)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>我们用一个特殊的字符串&nbsp;<code>S</code>&nbsp;来表示一份单词列表，之所以能展开成为一个列表，是因为这个字符串&nbsp;<code>S</code>&nbsp;中存在一个叫做「选项」的概念：</p> 
  <p>单词中的每个字母可能只有一个选项或存在多个备选项。如果只有一个选项，那么该字母按原样表示。</p> 
  <p>如果存在多个选项，就会以花括号包裹来表示这些选项（使它们与其他字母分隔开），例如 <code>"{a,b,c}"</code> 表示&nbsp;<code>["a", "b", "c"]</code>。</p> 
  <p><strong>例子：</strong><code>"{a,b,c}d{e,f}"</code>&nbsp;可以表示单词列表&nbsp;<code>["ade", "adf", "bde", "bdf", "cde", "cdf"]</code>。</p> 
  <p>请你按字典顺序，返回所有以这种方式形成的单词。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"{a,b}c{d,e}f"
<strong>输出：</strong>["acdf","acef","bcdf","bcef"]
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"abcd"
<strong>输出：</strong>["abcd"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= S.length &lt;= 50</code></li> 
   <li>你可以假设题目中不存在嵌套的花括号</li> 
   <li>在一对连续的花括号（开花括号与闭花括号）之间的所有字母都不会相同</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String[] expand(String S) {
        
    }
}
```