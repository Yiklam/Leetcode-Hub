# 1267. 统计参与通信的服务器

**题目链接：**[https://leetcode-cn.com/problems/count-servers-that-communicate](https://leetcode-cn.com/problems/count-servers-that-communicate)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>这里有一幅服务器分布图，服务器的位置标识在&nbsp;<code>m * n</code>&nbsp;的整数矩阵网格&nbsp;<code>grid</code>&nbsp;中，1 表示单元格上有服务器，0 表示没有。</p> 
  <p>如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。</p> 
  <p>请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <p><img style="height: 203px; width: 202px;" src="../aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-6.jpg" alt=""></p> 
  <pre class="language-text"><strong>输入：</strong>grid = [[1,0],[0,1]]
<strong>输出：</strong>0
<strong>解释：</strong>没有一台服务器能与其他服务器进行通信。</pre> 
  <p><strong>示例 2：</strong></p> 
  <p><strong><img style="height: 203px; width: 203px;" src="../aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-4-1.jpg" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>grid = [[1,0],[1,1]]
<strong>输出：</strong>3
<strong>解释：</strong>所有这些服务器都至少可以与一台别的服务器进行通信。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <p><img style="height: 443px; width: 443px;" src="../aliyun-lc-upload/uploads/2019/11/24/untitled-diagram-1-3.jpg" alt=""></p> 
  <pre class="language-text"><strong>输入：</strong>grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
<strong>输出：</strong>4
<strong>解释：</strong>第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>m == grid.length</code></li> 
   <li><code>n == grid[i].length</code></li> 
   <li><code>1 &lt;= m &lt;= 250</code></li> 
   <li><code>1 &lt;= n &lt;= 250</code></li> 
   <li><code>grid[i][j] == 0 or 1</code></li> 
  </ul> 
 </div>
</div>

---

**AC 代码：**

```java

```