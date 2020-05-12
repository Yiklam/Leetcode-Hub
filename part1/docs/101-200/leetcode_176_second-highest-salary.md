# 176. [简单] 第二高的薪水

**题目链接：**[https://leetcode-cn.com/problems/second-highest-salary](https://leetcode-cn.com/problems/second-highest-salary)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>编写一个 SQL 查询，获取 <code>Employee</code>&nbsp;表中第二高的薪水（Salary）&nbsp;。</p> 
  <pre class="language-text">+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
</pre> 
  <p>例如上述&nbsp;<code>Employee</code>&nbsp;表，SQL查询应该返回&nbsp;<code>200</code> 作为第二高的薪水。如果不存在第二高的薪水，那么查询应返回 <code>null</code>。</p> 
  <pre class="language-text">+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
</pre> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
-- 解法一
select
  (
    select
      salary
    from
      employee
    where
      salary <(
        select
          max(salary) as salary
        from
          employee
      )
    order by
      salary desc
    limit
      1
  ) as secondhighestsalary;

-- 解法二
select
  (
    select
      distinct salary
    from
      employee
    order by
      salary desc
    limit
      1 offset 1
  ) as secondhighestsalary;
```
