# 87. [困难] 扰乱字符串

**题目链接：**[https://leetcode-cn.com/problems/scramble-string](https://leetcode-cn.com/problems/scramble-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个字符串&nbsp;<em>s1</em>，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。</p> 
  <p>下图是字符串&nbsp;<em>s1</em>&nbsp;=&nbsp;<code>"great"</code>&nbsp;的一种可能的表示形式。</p> 
  <pre class="language-text">    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
</pre> 
  <p>在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。</p> 
  <p>例如，如果我们挑选非叶节点&nbsp;<code>"gr"</code>&nbsp;，交换它的两个子节点，将会产生扰乱字符串&nbsp;<code>"rgeat"</code>&nbsp;。</p> 
  <pre class="language-text">    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
</pre> 
  <p>我们将&nbsp;<code>"rgeat”</code>&nbsp;称作&nbsp;<code>"great"</code>&nbsp;的一个扰乱字符串。</p> 
  <p>同样地，如果我们继续交换节点&nbsp;<code>"eat"</code>&nbsp;和&nbsp;<code>"at"</code>&nbsp;的子节点，将会产生另一个新的扰乱字符串&nbsp;<code>"rgtae"</code>&nbsp;。</p> 
  <pre class="language-text">    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
</pre> 
  <p>我们将&nbsp;<code>"rgtae”</code>&nbsp;称作&nbsp;<code>"great"</code>&nbsp;的一个扰乱字符串。</p> 
  <p>给出两个长度相等的字符串 <em>s1 </em>和&nbsp;<em>s2</em>，判断&nbsp;<em>s2&nbsp;</em>是否是&nbsp;<em>s1&nbsp;</em>的扰乱字符串。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> s1 = "great", s2 = "rgeat"
<strong>输出:</strong> true
</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> s1 = "abcde", s2 = "caebd"
<strong>输出:</strong> false</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean isScramble(String s1, String s2) {
        
    }
}
```