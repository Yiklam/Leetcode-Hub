# 944. [简单] 删列造序

**题目链接：**[https://leetcode-cn.com/problems/delete-columns-to-make-sorted](https://leetcode-cn.com/problems/delete-columns-to-make-sorted)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定由&nbsp;<code>N</code>&nbsp;个小写字母字符串组成的数组 <code>A</code>，其中每个字符串长度相等。</p> 
  <p><strong>删除</strong> 操作的定义是：选出一组要删掉的列，删去&nbsp;<code>A</code> 中对应列中的所有字符，形式上，第 <code>n</code>&nbsp;列为&nbsp;<code>[A[0][n], A[1][n], ..., A[A.length-1][n]]</code>）。</p> 
  <p>比如，有&nbsp;<code>A = ["abcdef", "uvwxyz"]</code>，</p> 
  <p><img style="height: 48px; width: 300px;" src="/aliyun-lc-upload/uploads/2019/07/06/944_1.png" alt=""></p> 
  <p>要删掉的列为&nbsp;<code>{0, 2, 3}</code>，删除后 <code>A</code>&nbsp;为<code>["bef", "vyz"]</code>， <code>A</code>&nbsp;的列分别为<code>["b","v"], ["e","y"], ["f","z"]</code>。</p> 
  <p><img style="height: 76px; width: 300px;" src="/aliyun-lc-upload/uploads/2019/07/06/944_2.png" alt=""></p> 
  <p>你需要选出一组要删掉的列&nbsp;<code>D</code>，对&nbsp;<code>A</code> 执行删除操作，使 <code>A</code> 中剩余的每一列都是 <strong>非降序</strong>&nbsp;排列的，然后请你返回&nbsp;<code>D.length</code>&nbsp;的最小可能值。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["cba", "daf", "ghi"]
<strong>输出：</strong>1
<strong>解释：</strong>
当选择 D = {1}，删除后 A 的列为：["c","d","g"] 和 ["a","f","i"]，均为非降序排列。
若选择 D = {}，那么 A 的列 ["b","a","h"] 就不是非降序排列了。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["a", "b"]
<strong>输出：</strong>0
<strong>解释：</strong>D = {}
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["zyx", "wvu", "tsr"]
<strong>输出：</strong>3
<strong>解释：</strong>D = {0, 1, 2}
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>1 &lt;= A.length &lt;= 100</code></li> 
   <li><code>1 &lt;= A[i].length &lt;= 1000</code></li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public int minDeletionSize(String[] A) {
        
    }
}
```