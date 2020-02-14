# 面试题 17.13. [中等] 恢复空格

**题目链接：**[https://leetcode-cn.com/problems/re-space-lcci](https://leetcode-cn.com/problems/re-space-lcci)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>哦，不！你不小心把一个长篇文章中的空格、标点都删掉了，并且大写也弄成了小写。像句子<code>"I reset the computer. It still didn’t boot!"</code>已经变成了<code>"iresetthecomputeritstilldidntboot"</code>。在处理标点符号和大小写之前，你得先把它断成词语。当然了，你有一本厚厚的词典<code>dictionary</code>，不过，有些词没在词典里。假设文章用<code>sentence</code>表示，设计一个算法，把文章断开，要求未识别的字符最少，返回未识别的字符数。</p> 
  <p><strong>注意：</strong>本题相对原题稍作改动，只需返回未识别的字符数</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>
dictionary = ["looked","just","like","her","brother"]
sentence = "jesslookedjustliketimherbrother"
<strong>输出：</strong> 7
<strong>解释：</strong> 断句后为"<strong>jess</strong> looked just like <strong>tim</strong> her brother"，共7个未识别字符。
</pre> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>0 &lt;= len(sentence) &lt;= 1000</code></li> 
   <li><code>dictionary</code>中总字符数不超过 150000。</li> 
   <li>你可以认为<code>dictionary</code>和<code>sentence</code>中只包含小写字母。</li> 
  </ul> 
 </div>
</div>

---

```

```