# 595. [简单] 大的国家

**题目链接：**[https://leetcode-cn.com/problems/big-countries](https://leetcode-cn.com/problems/big-countries)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>这里有张&nbsp;<code>World</code> 表</p> 
  <pre class="language-text">+-----------------+------------+------------+--------------+---------------+
| name            | continent  | area       | population   | gdp           |
+-----------------+------------+------------+--------------+---------------+
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |
+-----------------+------------+------------+--------------+---------------+
</pre> 
  <p>如果一个国家的面积超过300万平方公里，或者人口超过2500万，那么这个国家就是大国家。</p> 
  <p>编写一个SQL查询，输出表中所有大国家的名称、人口和面积。</p> 
  <p>例如，根据上表，我们应该输出:</p> 
  <pre class="language-text">+--------------+-------------+--------------+
| name         | population  | area         |
+--------------+-------------+--------------+
| Afghanistan  | 25500100    | 652230       |
| Algeria      | 37100000    | 2381741      |
+--------------+-------------+--------------+
</pre> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
```