# $1153. [困难] 字符串转化

**题目链接：**[https://leetcode-cn.com/problems/string-transforms-into-another-string](https://leetcode-cn.com/problems/string-transforms-into-another-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给出两个长度相同的字符串，分别是&nbsp;<code>str1</code>&nbsp;和 <code>str2</code>。请你帮忙判断字符串 <code>str1</code> 能不能在 <strong>零次</strong>&nbsp;或 <strong>多次</strong>&nbsp;转化后变成字符串 <code>str2</code>。</p> 
  <p>每一次转化时，将会一次性将 <code>str1</code> 中出现的&nbsp;<strong>所有</strong>&nbsp;相同字母变成其他&nbsp;<strong>任何</strong>&nbsp;小写英文字母（见示例）。</p> 
  <p>只有在字符串 <code>str1</code>&nbsp;能够通过上述方式顺利转化为字符串 <code>str2</code>&nbsp;时才能返回&nbsp;<code>True</code>，否则返回 <code>False</code>。​​</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>str1 = "aabcc", str2 = "ccdee"
<strong>输出：</strong>true
<strong>解释：</strong>将 'c' 变成 'e'，然后把 'b' 变成 'd'，接着再把 'a' 变成 'c'。注意，转化的顺序也很重要。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>str1 = "leetcode", str2 = "codeleet"
<strong>输出：</strong>false
<strong>解释：</strong>我们没有办法能够把 str1 转化为 str2。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= str1.length == str2.length &lt;= 10^4</code></li> 
   <li><code>str1</code>&nbsp;和 <code>str2</code> 中都只会出现&nbsp;<strong>小写英文字母</strong></li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public boolean canConvert(String str1, String str2) {
        
    }
}
```