# 833. 字符串中的查找与替换

**题目链接：**[https://leetcode-cn.com/problems/find-and-replace-in-string](https://leetcode-cn.com/problems/find-and-replace-in-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>对于某些字符串 <code>S</code>，我们将执行一些替换操作，用新的字母组替换原有的字母组（不一定大小相同）。</p> 
  <p>每个替换操作具有 3 个参数：起始索引 <code>i</code>，源字 <code>x</code> 和目标字 <code>y</code>。规则是如果 <code>x</code> 从<strong>原始字符串 <code>S</code></strong> 中的位置 <code>i</code> 开始，那么我们将用 <code>y</code> 替换出现的 <code>x</code>。如果没有，我们什么都不做。</p> 
  <p>举个例子，如果我们有 <code>S&nbsp;= “abcd”</code> 并且我们有一些替换操作 <code>i = 2，x = “cd”，y = “ffff”</code>，那么因为 <code>“cd”</code> 从原始字符串 <code>S</code> 中的位置 <code>2</code> 开始，我们将用&nbsp;<code>“ffff”</code> 替换它。</p> 
  <p>再来看 <code>S = “abcd”</code> 上的另一个例子，如果我们有替换操作<code> i = 0，x = “ab”，y = “eee”</code>，以及另一个替换操作 <code>i = 2，x = “ec”，y = “ffff”</code>，那么第二个操作将不执行任何操作，因为原始字符串中&nbsp;<code>S[2] = 'c'</code>，与 <code>x[0] = 'e'</code> 不匹配。</p> 
  <p>所有这些操作同时发生。保证在替换时不会有任何重叠：&nbsp;<code>S = "abc", indexes = [0, 1],&nbsp;sources = ["ab","bc"]</code> 不是有效的测试用例。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]
<strong>输出：</strong>"eeebffff"
<strong>解释：
</strong>"a" 从 S 中的索引 0 开始，所以它被替换为 "eee"。
"cd" 从 S 中的索引 2 开始，所以它被替换为 "ffff"。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>S = "abcd", indexes = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]
<strong>输出：</strong>"eeecd"
<strong>解释：
</strong>"ab" 从 S 中的索引 0 开始，所以它被替换为 "eee"。
"ec" 没有从<strong>原始的</strong> S 中的索引 2 开始，所以它没有被替换。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>0 &lt;=&nbsp;indexes.length =&nbsp;sources.length =&nbsp;targets.length &lt;= 100</code></li> 
   <li><code>0&nbsp;&lt;&nbsp;indexes[i]&nbsp;&lt; S.length &lt;= 1000</code></li> 
   <li>给定输入中的所有字符都是小写字母。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

**AC 代码：**

```java

```