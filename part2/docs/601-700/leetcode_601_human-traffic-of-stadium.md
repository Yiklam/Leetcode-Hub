# 601. 体育馆的人流量

**题目链接：**[https://leetcode-cn.com/problems/human-traffic-of-stadium](https://leetcode-cn.com/problems/human-traffic-of-stadium)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>X 市建了一个新的体育馆，每日人流量信息被记录在这三列信息中：<strong>序号</strong> (id)、<strong>日期</strong> (visit_date)、&nbsp;<strong>人流量</strong> (people)。</p> 
  <p>请编写一个查询语句，找出人流量的高峰期。高峰期时，至少连续三行记录中的人流量不少于100。</p> 
  <p>例如，表 <code>stadium</code>：</p> 
  <pre class="language-text">+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
</pre> 
  <p>对于上面的示例数据，输出为：</p> 
  <pre class="language-text">+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-08 | 188       |
+------+------------+-----------+
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong><br> 每天只有一行记录，日期随着 id 的增加而增加。</p> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```