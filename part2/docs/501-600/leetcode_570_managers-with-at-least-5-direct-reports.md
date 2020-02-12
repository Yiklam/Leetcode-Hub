# $570. 至少有5名直接下属的经理

**题目链接：**[https://leetcode-cn.com/problems/managers-with-at-least-5-direct-reports](https://leetcode-cn.com/problems/managers-with-at-least-5-direct-reports)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p><code>Employee</code> 表包含所有员工和他们的经理。每个员工都有一个 Id，并且还有一列是经理的 Id。</p> 
  <pre class="language-text">+------+----------+-----------+----------+
|Id    |Name 	  |Department |ManagerId |
+------+----------+-----------+----------+
|101   |John 	  |A 	      |null      |
|102   |Dan 	  |A 	      |101       |
|103   |James 	  |A 	      |101       |
|104   |Amy 	  |A 	      |101       |
|105   |Anne 	  |A 	      |101       |
|106   |Ron 	  |B 	      |101       |
+------+----------+-----------+----------+
</pre> 
  <p>给定 <code>Employee</code> 表，请编写一个SQL查询来查找至少有5名直接下属的经理。对于上表，您的SQL查询应该返回：</p> 
  <pre class="language-text">+-------+
| Name  |
+-------+
| John  |
+-------+
</pre> 
  <p><strong>注意:</strong><br> 没有人是自己的下属。</p> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```