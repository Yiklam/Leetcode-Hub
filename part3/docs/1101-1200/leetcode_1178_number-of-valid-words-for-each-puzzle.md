# 1178. [困难] 猜字谜

**题目链接：**[https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle](https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。</p> 
  <p>字谜的迷面&nbsp;<code>puzzle</code> 按字符串形式给出，如果一个单词&nbsp;<code>word</code>&nbsp;符合下面两个条件，那么它就可以算作谜底：</p> 
  <ul> 
   <li>单词&nbsp;<code>word</code>&nbsp;中包含谜面&nbsp;<code>puzzle</code>&nbsp;的第一个字母。</li> 
   <li>单词&nbsp;<code>word</code>&nbsp;中的每一个字母都可以在谜面&nbsp;<code>puzzle</code>&nbsp;中找到。<br> 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而 "beefed"（不含字母 "a"）以及&nbsp;"based"（其中的 "s" 没有出现在谜面中）。</li> 
  </ul> 
  <p>返回一个答案数组&nbsp;<code>answer</code>，数组中的每个元素&nbsp;<code>answer[i]</code>&nbsp;是在给出的单词列表 <code>words</code> 中可以作为字谜迷面&nbsp;<code>puzzles[i]</code>&nbsp;所对应的谜底的单词数目。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>
words = ["aaaa","asas","able","ability","actt","actor","access"], 
puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
<strong>输出：</strong>[1,1,3,2,4,0]
<strong>解释：</strong>
1 个单词可以作为 "aboveyz" 的谜底 : "aaaa" 
1 个单词可以作为 "abrodyz" 的谜底 : "aaaa"
3 个单词可以作为 "abslute" 的谜底 : "aaaa", "asas", "able"
2 个单词可以作为&nbsp;"absoryz" 的谜底 : "aaaa", "asas"
4 个单词可以作为&nbsp;"actresz" 的谜底 : "aaaa", "asas", "actt", "access"
没有单词可以作为&nbsp;"gaswxyz" 的谜底，因为列表中的单词都不含字母 'g'。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= words.length &lt;= 10^5</code></li> 
   <li><code>4 &lt;= words[i].length &lt;= 50</code></li> 
   <li><code>1 &lt;= puzzles.length &lt;= 10^4</code></li> 
   <li><code>puzzles[i].length == 7</code></li> 
   <li><code>words[i][j]</code>, <code>puzzles[i][j]</code>&nbsp;都是小写英文字母。</li> 
   <li>每个&nbsp;<code>puzzles[i]</code>&nbsp;所包含的字符都不重复。</li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
        
    }
}
```