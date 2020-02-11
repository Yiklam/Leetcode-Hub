# 165. 比较版本号

**题目链接：**[https://leetcode-cn.com/problems/compare-version-numbers](https://leetcode-cn.com/problems/compare-version-numbers)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>比较两个版本号 <em>version1&nbsp;</em>和 <em>version2</em>。<br> 如果&nbsp;<code><em>version1&nbsp;</em>&gt;&nbsp;<em>version2</em></code>&nbsp;返回&nbsp;<code>1</code>，如果&nbsp;<code><em>version1&nbsp;</em>&lt;&nbsp;<em>version2</em></code> 返回 <code>-1</code>， 除此之外返回 <code>0</code>。</p> 
  <p>你可以假设版本字符串非空，并且只包含数字和&nbsp;<code>.</code> 字符。</p> 
  <p>&nbsp;<code>.</code> 字符不代表小数点，而是用于分隔数字序列。</p> 
  <p>例如，<code>2.5</code> 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。</p> 
  <p>你可以假设版本号的每一级的默认修订版号为 <code>0</code>。例如，版本号 <code>3.4</code> 的第一级（大版本）和第二级（小版本）修订号分别为 <code>3</code> 和 <code>4</code>。其第三级和第四级修订号均为 <code>0</code>。<br> &nbsp;</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <code><em>version1</em></code> = "0.1", <code><em>version2</em></code> = "1.1"
<strong>输出:</strong> -1</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong><code><em>version1</em></code> = "1.0.1", <code><em>version2</em></code> = "1"
<strong>输出:</strong> 1</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <code><em>version1</em></code> = "7.5.2.4", <code><em>version2</em></code> = "7.5.3"
<strong>输出:</strong> -1</pre> 
  <p><strong>示例&nbsp;4：</strong></p> 
  <pre class="language-text"><code><strong>输入：</strong><em>version1</em></code> = "1.01", <code><em>version2</em></code> = "1.001"
<strong>输出：</strong>0
<strong>解释：</strong>忽略前导零，“01” 和 “001” 表示相同的数字 “1”。</pre> 
  <p><strong>示例 5：</strong></p> 
  <pre class="language-text"><code><strong>输入：</strong><em>version1</em></code> = "1.0", <code><em>version2</em></code> = "1.0.0"
<strong>输出：</strong>0
<strong>解释：</strong><code><em>version1 </em></code>没有第三级修订号，这意味着它的第三级修订号默认为 “0”。</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li>版本字符串由以点&nbsp;（<code>.</code>）&nbsp;分隔的数字字符串组成。这个数字字符串<strong>可能</strong>有前导零。</li> 
   <li>版本字符串不以点开始或结束，并且其中不会有两个连续的点。</li> 
  </ol> 
 </div>
</div>

---

**AC 代码：**

```java

```