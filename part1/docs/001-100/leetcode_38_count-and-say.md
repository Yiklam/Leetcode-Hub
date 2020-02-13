# 38. [简单] 外观数列

**题目链接：**[https://leetcode-cn.com/problems/count-and-say](https://leetcode-cn.com/problems/count-and-say)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：</p> 
  <pre class="language-text">1.     1
2.     11
3.     21
4.     1211
5.     111221
</pre> 
  <p><code>1</code>&nbsp;被读作&nbsp;&nbsp;<code>"one 1"</code>&nbsp;&nbsp;(<code>"一个一"</code>) , 即&nbsp;<code>11</code>。<br> <code>11</code> 被读作&nbsp;<code>"two 1s"</code>&nbsp;(<code>"两个一"</code>）, 即&nbsp;<code>21</code>。<br> <code>21</code> 被读作&nbsp;<code>"one 2"</code>, &nbsp;"<code>one 1"</code>&nbsp;（<code>"一个二"</code>&nbsp;,&nbsp;&nbsp;<code>"一个一"</code>)&nbsp;, 即&nbsp;<code>1211</code>。</p> 
  <p>给定一个正整数 <em>n</em>（1 ≤&nbsp;<em>n</em>&nbsp;≤ 30），输出外观数列的第 <em>n</em> 项。</p> 
  <p>注意：整数序列中的每一项将表示为一个字符串。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> 1
<strong>输出:</strong> "1"
<strong>解释：</strong>这是一个基本样例。</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> 4
<strong>输出:</strong> "1211"
<strong>解释：</strong>当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 = 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。</pre> 
 </div>
</div>

---

```java
class Solution {
    public void solveSudoku(char[][] board) {
        
    }
}
```