# $1061. [中等] 按字典序排列最小的等效字符串

**题目链接：**[https://leetcode-cn.com/problems/lexicographically-smallest-equivalent-string](https://leetcode-cn.com/problems/lexicographically-smallest-equivalent-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给出长度相同的两个字符串：<code>A</code> 和&nbsp;<code>B</code>，其中 A[i] 和 B[i] 是一组等价字符。举个例子，如果&nbsp;<code>A = "abc"</code> 且&nbsp;<code>B = "cde"</code>，那么就有&nbsp;<code>'a' == 'c', 'b' == 'd', 'c' == 'e'</code>。</p> 
  <p>等价字符遵循任何等价关系的一般规则：</p> 
  <ul> 
   <li>自反性：'a' == 'a'</li> 
   <li>对称性：'a' == 'b' 则必定有 'b' == 'a'</li> 
   <li>传递性：'a' == 'b' 且 'b' == 'c' 就表明 'a' == 'c'</li> 
  </ul> 
  <p>例如，<code>A</code> 和&nbsp;<code>B</code>&nbsp;的等价信息和之前的例子一样，那么&nbsp;<code>S = "eed"</code>, <code>"acd"</code>&nbsp;或&nbsp;<code>"aab"</code>，这三个字符串都是等价的，而&nbsp;<code>"aab"</code>&nbsp;是 <code>S</code>&nbsp;的按字典序最小的等价字符串</p> 
  <p>利用&nbsp;<code>A</code> 和&nbsp;<code>B</code>&nbsp;的等价信息，找出并返回 <code>S</code>&nbsp;的按字典序排列最小的等价字符串。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = "parker", B = "morris", S = "parser"
<strong>输出：</strong>"makkek"
<strong>解释：</strong>根据 <code>A</code> 和 <code>B 中的等价信息，</code>我们可以将这些字符分为 <code>[m,p]</code>, <code>[a,o]</code>, <code>[k,r,s]</code>, <code>[e,i] 共 4 组</code>。每组中的字符都是等价的，并按字典序排列。所以答案是 <code>"makkek"</code>。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = "hello", B = "world", S = "hold"
<strong>输出：</strong>"hdld"
<strong>解释：</strong>根据 <code>A</code> 和 <code>B 中的等价信息，</code>我们可以将这些字符分为 <code>[h,w]</code>, <code>[d,e,o]</code>, <code>[l,r] 共 3 组</code>。所以只有 S 中的第二个字符 <code>'o'</code> 变成 <code>'d'，最后答案为<span style=""> </span></code><code>"hdld"</code>。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = "leetcode", B = "programs", S = "sourcecode"
<strong>输出：</strong>"aauaaaaada"
<strong>解释：</strong>我们可以把 A 和 B 中的等价字符分为 <code>[a,o,e,r,s,c]</code>, <code>[l,p]</code>, <code>[g,t]</code> 和 <code>[d,m] 共 4 组</code>，因此 <code>S</code> 中除了 <code>'u'</code> 和 <code>'d'</code> 之外的所有字母都转化成了 <code>'a'</code>，最后答案为 <code>"aauaaaaada"</code>。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li>字符串&nbsp;<code>A</code>，<code>B</code>&nbsp;和&nbsp;<code>S</code>&nbsp;仅有从&nbsp;<code>'a'</code> 到&nbsp;<code>'z'</code>&nbsp;的小写英文字母组成。</li> 
   <li>字符串&nbsp;<code>A</code>，<code>B</code>&nbsp;和&nbsp;<code>S</code>&nbsp;的长度在&nbsp;<code>1</code> 到&nbsp;<code>1000</code>&nbsp;之间。</li> 
   <li>字符串&nbsp;<code>A</code>&nbsp;和&nbsp;<code>B</code>&nbsp;长度相同。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String smallestEquivalentString(String A, String B, String S) {
        
    }
}
```