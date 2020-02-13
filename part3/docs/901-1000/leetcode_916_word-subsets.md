# 916. [中等] 单词子集

**题目链接：**[https://leetcode-cn.com/problems/word-subsets](https://leetcode-cn.com/problems/word-subsets)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>我们给出两个单词数组 <code>A</code>&nbsp;和&nbsp;<code>B</code>。每个单词都是一串小写字母。</p> 
  <p>现在，如果&nbsp;<code>b</code> 中的每个字母都出现在 <code>a</code> 中，<strong>包括重复出现的字母</strong>，那么称单词 <code>b</code> 是单词 <code>a</code> 的子集。 例如，“wrr” 是 “warrior” 的子集，但不是 “world” 的子集。</p> 
  <p>如果对 <code>B</code> 中的每一个单词&nbsp;<code>b</code>，<code>b</code> 都是 <code>a</code> 的子集，那么我们称&nbsp;<code>A</code> 中的单词 <code>a</code> 是<em>通用的</em>。</p> 
  <p>你可以按任意顺序以列表形式返回&nbsp;<code>A</code> 中所有的通用单词。</p> 
  <p>&nbsp;</p> 
  <ol> 
  </ol> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
<strong>输出：</strong>["facebook","google","leetcode"]
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
<strong>输出：</strong>["apple","google","leetcode"]
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
<strong>输出：</strong>["facebook","google"]
</pre> 
  <p><strong>示例 4：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
<strong>输出：</strong>["google","leetcode"]
</pre> 
  <p><strong>示例 5：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
<strong>输出：</strong>["facebook","leetcode"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= A.length, B.length &lt;= 10000</code></li> 
   <li><code>1 &lt;= A[i].length, B[i].length&nbsp;&lt;= 10</code></li> 
   <li><code>A[i]</code>&nbsp;和&nbsp;<code>B[i]</code>&nbsp;只由小写字母组成。</li> 
   <li><code>A[i]</code>&nbsp;中所有的单词都是独一无二的，也就是说不存在&nbsp;<code>i != j</code>&nbsp;使得&nbsp;<code>A[i] == A[j]</code>。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public List<String> wordSubsets(String[] A, String[] B) {
        
    }
}
```