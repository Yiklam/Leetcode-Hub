# $1181. 前后拼接

**题目链接：**[https://leetcode-cn.com/problems/before-and-after-puzzle](https://leetcode-cn.com/problems/before-and-after-puzzle)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给你一个「短语」列表&nbsp;<code>phrases</code>，请你帮忙按规则生成拼接后的「新短语」列表。</p> 
  <p>「短语」（phrase）是仅由小写英文字母和空格组成的字符串。「短语」的开头和结尾都不会出现空格，「短语」中的空格不会连续出现。</p> 
  <p>「前后拼接」（Before and After&nbsp;puzzles）是合并两个「短语」形成「新短语」的方法。我们规定拼接时，<strong>第一个短语的最后一个单词</strong> 和 <strong>第二个短语的第一个单词</strong> 必须相同。</p> 
  <p>返回每两个「短语」&nbsp;<code>phrases[i]</code>&nbsp;和&nbsp;<code>phrases[j]</code>（<code>i != j</code>）进行「前后拼接」得到的「新短语」。</p> 
  <p>注意，两个「短语」拼接时的顺序也很重要，我们需要同时考虑这两个「短语」。另外，同一个「短语」可以多次参与拼接，但「新短语」不能再参与拼接。</p> 
  <p>请你按字典序排列并返回「新短语」列表，列表中的字符串应该是 <strong>不重复的</strong> 。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>phrases = ["writing code","code rocks"]
<strong>输出：</strong>["writing code rocks"]
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>phrases = ["mission statement",
                "a quick bite to eat",
&nbsp;               "a chip off the old block",
&nbsp;               "chocolate bar",
&nbsp;               "mission impossible",
&nbsp;               "a man on a mission",
&nbsp;               "block party",
&nbsp;               "eat my words",
&nbsp;               "bar of soap"]
<strong>输出：</strong>["a chip off the old block party",
&nbsp;     "a man on a mission impossible",
&nbsp;     "a man on a mission statement",
&nbsp;     "a quick bite to eat my words",
      "chocolate bar of soap"]
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>phrases = ["a","b","a"]
<strong>输出：</strong>["a"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= phrases.length &lt;= 100</code></li> 
   <li><code>1 &lt;= phrases[i].length &lt;= 100</code></li> 
  </ul> 
 </div>
</div>

---

**AC 代码：**

```java

```