# $616. 给字符串添加加粗标签

**题目链接：**[https://leetcode-cn.com/problems/add-bold-tag-in-string](https://leetcode-cn.com/problems/add-bold-tag-in-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给一个字符串&nbsp;<strong>s</strong>&nbsp;和一个字符串列表&nbsp;<strong>dict</strong>&nbsp;，你需要将在字符串列表中出现过的 s 的子串添加加粗闭合标签&nbsp;<code>&lt;b&gt;</code>&nbsp;和&nbsp;<code>&lt;/b&gt;</code>&nbsp;。如果两个子串有重叠部分，你需要把它们一起用一个闭合标签包围起来。同理，如果两个子字符串连续被加粗，那么你也需要把它们合起来用一个加粗标签包围。</p> 
  <p><strong>样例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>
s = "abcxyz123"
dict = ["abc","123"]
<strong>输出：</strong>
"&lt;b&gt;abc&lt;/b&gt;xyz&lt;b&gt;123&lt;/b&gt;"
</pre> 
  <p>&nbsp;</p> 
  <p><strong>样例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>
s = "aaabbcc"
dict = ["aaa","aab","bc"]
<strong>输出：</strong>
"&lt;b&gt;aaabbc&lt;/b&gt;c"
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意：</strong></p> 
  <ol> 
   <li>给定的 dict 中不会有重复的字符串，且字符串数目不会超过 100 。</li> 
   <li>输入中的所有字符串长度都在范围 [1, 1000] 内。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public String addBoldTag(String s, String[] dict) {
        
    }
}
```