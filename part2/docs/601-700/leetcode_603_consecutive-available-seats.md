# $603. [简单] 连续空余座位

**题目链接：**[https://leetcode-cn.com/problems/consecutive-available-seats](https://leetcode-cn.com/problems/consecutive-available-seats)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>几个朋友来到电影院的售票处，准备预约连续空余座位。</p> 
  <p>你能利用表&nbsp;<code>cinema</code>&nbsp;，帮他们写一个查询语句，获取所有空余座位，并将它们按照 seat_id 排序后返回吗？</p> 
  <pre class="language-text">| seat_id | free |
|---------|------|
| 1       | 1    |
| 2       | 0    |
| 3       | 1    |
| 4       | 1    |
| 5       | 1    |
</pre> 
  <p>&nbsp;</p> 
  <p>对于如上样例，你的查询语句应该返回如下结果。</p> 
  <p>&nbsp;</p> 
  <pre class="language-text">| seat_id |
|---------|
| 3       |
| 4       |
| 5       |
</pre> 
  <p><strong>注意：</strong></p> 
  <ul> 
   <li>seat_id 字段是一个自增的整数，free 字段是布尔类型（'1' 表示空余， '0' 表示已被占据）。</li> 
   <li>连续空余座位的定义是大于等于 2 个连续空余的座位。</li> 
  </ul> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
```