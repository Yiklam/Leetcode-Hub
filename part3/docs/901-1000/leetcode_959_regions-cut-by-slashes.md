# 959. [中等] 由斜杠划分区域

**题目链接：**[https://leetcode-cn.com/problems/regions-cut-by-slashes](https://leetcode-cn.com/problems/regions-cut-by-slashes)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>在由 1 x 1 方格组成的 N x N 网格&nbsp;<code>grid</code> 中，每个 1 x 1&nbsp;方块由 <code>/</code>、<code>\</code> 或空格构成。这些字符会将方块划分为一些共边的区域。</p> 
  <p>（请注意，反斜杠字符是转义的，因此 <code>\</code> 用 <code>"\\"</code>&nbsp;表示。）。</p> 
  <p>返回区域的数目。</p> 
  <p>&nbsp;</p> 
  <ol> 
  </ol> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：
</strong>[
&nbsp; " /",
&nbsp; "/ "
]
<strong>输出：</strong>2
<strong>解释：</strong>2x2 网格如下：
<img src="/aliyun-lc-upload/uploads/2018/12/15/1.png" alt=""></pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：
</strong>[
&nbsp; " /",
&nbsp; "  "
]
<strong>输出：</strong>1
<strong>解释：</strong>2x2 网格如下：
<img src="/aliyun-lc-upload/uploads/2018/12/15/2.png" alt=""></pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：
</strong>[
&nbsp; "\\/",
&nbsp; "/\\"
]
<strong>输出：</strong>4
<strong>解释：</strong>（回想一下，因为 \ 字符是转义的，所以 "\\/" 表示 \/，而 "/\\" 表示 /\。）
2x2 网格如下：
<img src="/aliyun-lc-upload/uploads/2018/12/15/3.png" alt=""></pre> 
  <p><strong>示例 4：</strong></p> 
  <pre class="language-text"><strong>输入：
</strong>[
&nbsp; "/\\",
&nbsp; "\\/"
]
<strong>输出：</strong>5
<strong>解释：</strong>（回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。）
2x2 网格如下：
<img src="/aliyun-lc-upload/uploads/2018/12/15/4.png" alt=""></pre> 
  <p><strong>示例 5：</strong></p> 
  <pre class="language-text"><strong>输入：
</strong>[
&nbsp; "//",
&nbsp; "/ "
]
<strong>输出：</strong>3
<strong>解释：</strong>2x2 网格如下：
<img src="/aliyun-lc-upload/uploads/2018/12/15/5.png" alt="">
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= grid.length == grid[0].length &lt;= 30</code></li> 
   <li><code>grid[i][j]</code> 是&nbsp;<code>'/'</code>、<code>'\'</code>、或&nbsp;<code>' '</code>。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public int regionsBySlashes(String[] grid) {
        
    }
}
```