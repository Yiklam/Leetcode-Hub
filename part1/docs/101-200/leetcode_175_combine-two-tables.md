# 175. 组合两个表

**题目链接：**[https://leetcode-cn.com/problems/combine-two-tables](https://leetcode-cn.com/problems/combine-two-tables)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>表1: <code>Person</code></p> 
  <pre class="language-text">+-------------+---------+
| 列名         | 类型     |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId 是上表主键
</pre> 
  <p>表2: <code>Address</code></p> 
  <pre class="language-text">+-------------+---------+
| 列名         | 类型    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId 是上表主键
</pre> 
  <p>&nbsp;</p> 
  <p>编写一个 SQL 查询，满足条件：无论 person 是否有地址信息，都需要基于上述两表提供&nbsp;person 的以下信息：</p> 
  <p>&nbsp;</p> 
  <pre class="language-text">FirstName, LastName, City, State
</pre> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```