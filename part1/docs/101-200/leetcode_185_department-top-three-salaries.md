# 185. 部门工资前三高的所有员工

**题目链接：**[https://leetcode-cn.com/problems/department-top-three-salaries](https://leetcode-cn.com/problems/department-top-three-salaries)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p><code>Employee</code> 表包含所有员工信息，每个员工有其对应的工号&nbsp;<code>Id</code>，姓名 <code>Name</code>，工资 <code>Salary</code> 和部门编号 <code>DepartmentId</code> 。</p> 
  <pre class="language-text">+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |
+----+-------+--------+--------------+</pre> 
  <p><code>Department</code> 表包含公司所有部门的信息。</p> 
  <pre class="language-text">+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+</pre> 
  <p>编写一个&nbsp;SQL 查询，找出每个部门获得前三高工资的所有员工。例如，根据上述给定的表，查询结果应返回：</p> 
  <pre class="language-text">+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| IT         | Randy    | 85000  |
| IT         | Joe      | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+</pre> 
  <p><strong>解释：</strong></p> 
  <p>IT 部门中，Max 获得了最高的工资，Randy 和 Joe 都拿到了第二高的工资，Will 的工资排第三。销售部门（Sales）只有两名员工，Henry 的工资最高，Sam 的工资排第二。</p> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```