# 184. 部门工资最高的员工

**题目链接：**[https://leetcode-cn.com/problems/department-highest-salary](https://leetcode-cn.com/problems/department-highest-salary)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p><code>Employee</code> 表包含所有员工信息，每个员工有其对应的&nbsp;Id, salary 和 department Id。</p> 
  <pre class="language-text">+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
</pre> 
  <p><code>Department</code>&nbsp;表包含公司所有部门的信息。</p> 
  <pre class="language-text">+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
</pre> 
  <p>编写一个 SQL 查询，找出每个部门工资最高的员工。例如，根据上述给定的表格，Max 在 IT 部门有最高工资，Henry 在 Sales 部门有最高工资。</p> 
  <pre class="language-text">+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+
</pre> 
 </div>
</div>

---

**AC 代码：**

```java

```