# 183. 从不订购的客户

**题目链接：**[https://leetcode-cn.com/problems/customers-who-never-order](https://leetcode-cn.com/problems/customers-who-never-order)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>某网站包含两个表，<code>Customers</code> 表和 <code>Orders</code> 表。编写一个 SQL 查询，找出所有从不订购任何东西的客户。</p> 
  <p><code>Customers</code> 表：</p> 
  <pre class="language-text">+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
</pre> 
  <p><code>Orders</code> 表：</p> 
  <pre class="language-text">+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
</pre> 
  <p>例如给定上述表格，你的查询应返回：</p> 
  <pre class="language-text">+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</pre> 
 </div>
</div>

---

**AC 代码：**

```java

```