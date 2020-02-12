# $577. 员工奖金

**题目链接：**[https://leetcode-cn.com/problems/employee-bonus](https://leetcode-cn.com/problems/employee-bonus)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>选出所有 bonus &lt; 1000 的员工的 name 及其 bonus。</p> 
  <p><code>Employee</code> 表单</p> 
  <pre class="language-text">+-------+--------+-----------+--------+
| empId |  name  | supervisor| salary |
+-------+--------+-----------+--------+
|   1   | John   |  3        | 1000   |
|   2   | Dan    |  3        | 2000   |
|   3   | Brad   |  null     | 4000   |
|   4   | Thomas |  3        | 4000   |
+-------+--------+-----------+--------+
empId 是这张表单的主关键字
</pre> 
  <p><code>Bonus</code> 表单</p> 
  <pre class="language-text">+-------+-------+
| empId | bonus |
+-------+-------+
| 2     | 500   |
| 4     | 2000  |
+-------+-------+
empId 是这张表单的主关键字
</pre> 
  <p>输出示例：</p> 
  <pre class="language-text">+-------+-------+
| name  | bonus |
+-------+-------+
| John  | null  |
| Dan   | 500   |
| Brad  | null  |
+-------+-------+
</pre> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```