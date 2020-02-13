# $574. [中等] 当选者

**题目链接：**[https://leetcode-cn.com/problems/winning-candidate](https://leetcode-cn.com/problems/winning-candidate)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>表: <code>Candidate</code></p> 
  <pre class="language-text">+-----+---------+
| id  | Name    |
+-----+---------+
| 1   | A       |
| 2   | B       |
| 3   | C       |
| 4   | D       |
| 5   | E       |
+-----+---------+  
</pre> 
  <p>表: <code>Vote</code></p> 
  <pre class="language-text">+-----+--------------+
| id  | CandidateId  |
+-----+--------------+
| 1   |     2        |
| 2   |     4        |
| 3   |     3        |
| 4   |     2        |
| 5   |     5        |
+-----+--------------+
id 是自动递增的主键，
CandidateId 是 Candidate 表中的 id.
</pre> 
  <p>请编写 sql 语句来找到当选者的名字，上面的例子将返回当选者 <code>B</code>.</p> 
  <pre class="language-text">+------+
| Name |
+------+
| B    |
+------+
</pre> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>你可以假设<strong>没有平局</strong>，换言之，<strong>最多</strong>只有一位当选者。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
```