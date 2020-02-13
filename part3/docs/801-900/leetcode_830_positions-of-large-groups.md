# 830. [简单] 较大分组的位置

**题目链接：**[https://leetcode-cn.com/problems/positions-of-large-groups](https://leetcode-cn.com/problems/positions-of-large-groups)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>在一个由小写字母构成的字符串&nbsp;<code>S</code>&nbsp;中，包含由一些连续的相同字符所构成的分组。</p> 
  <p>例如，在字符串 <code>S = "abbxxxxzyy"</code>&nbsp;中，就含有 <code>"a"</code>, <code>"bb"</code>, <code>"xxxx"</code>, <code>"z"</code> 和 <code>"yy"</code> 这样的一些分组。</p> 
  <p>我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。</p> 
  <p>最终结果按照字典顺序输出。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>"abbxxxxzzy"
<strong>输出: </strong>[[3,6]]
<strong>解释</strong>: <code>"xxxx" 是一个起始于 3 且终止于 6 的较大分组</code>。
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>"abc"
<strong>输出: </strong>[]
<strong>解释</strong>: "a","b" 和 "c" 均不是符合要求的较大分组。
</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>"abcdddeeeeaabbbcd"
<strong>输出: </strong>[[3,5],[6,9],[12,14]]</pre> 
  <p><strong>说明:&nbsp;</strong>&nbsp;<code>1 &lt;= S.length &lt;= 1000</code></p> 
 </div>
</div>

---

```java
class Solution {
    public List<List<Integer>> largeGroupPositions(String S) {
        
    }
}
```