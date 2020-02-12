# 766. 托普利茨矩阵

**题目链接：**[https://leetcode-cn.com/problems/toeplitz-matrix](https://leetcode-cn.com/problems/toeplitz-matrix)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是<em>托普利茨矩阵</em>。</p> 
  <p>给定一个&nbsp;<code>M x N</code>&nbsp;的矩阵，当且仅当它是<em>托普利茨矩阵</em>时返回&nbsp;<code>True</code>。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> 
matrix = [
&nbsp; [1,2,3,4],
&nbsp; [5,1,2,3],
&nbsp; [9,5,1,2]
]
<strong>输出:</strong> True
<strong>解释:</strong>
在上述矩阵中, 其对角线为:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。
各条对角线上的所有元素均相同, 因此答案是True。
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
matrix = [
&nbsp; [1,2],
&nbsp; [2,2]
]
<strong>输出:</strong> False
<strong>解释: 
</strong>对角线"[1, 2]"上的元素不同。
</pre> 
  <p><strong>说明:</strong></p> 
  <ol> 
   <li>&nbsp;<code>matrix</code>&nbsp;是一个包含整数的二维数组。</li> 
   <li><code>matrix</code>&nbsp;的行数和列数均在&nbsp;<code>[1, 20]</code>范围内。</li> 
   <li><code>matrix[i][j]</code>&nbsp;包含的整数在&nbsp;<code>[0, 99]</code>范围内。</li> 
  </ol> 
  <p><strong>进阶:</strong></p> 
  <ol> 
   <li>如果矩阵存储在磁盘上，并且磁盘内存是有限的，因此一次最多只能将一行矩阵加载到内存中，该怎么办？</li> 
   <li>如果矩阵太大以至于只能一次将部分行加载到内存中，该怎么办？</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        
    }
}
```