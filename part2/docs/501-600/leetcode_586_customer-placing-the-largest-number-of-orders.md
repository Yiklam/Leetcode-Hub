# $586. [简单] 订单最多的客户

**题目链接：**[https://leetcode-cn.com/problems/customer-placing-the-largest-number-of-orders](https://leetcode-cn.com/problems/customer-placing-the-largest-number-of-orders)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>在表&nbsp;<strong>orders</strong>&nbsp;中找到订单数最多客户对应的&nbsp;<strong>customer_number</strong>&nbsp;。</p> 
  <p>数据保证订单数最多的顾客恰好只有一位。</p> 
  <p>表&nbsp;<strong><em>orders</em></strong> 定义如下：</p> 
  <pre class="language-text">| Column            | Type      |
|-------------------|-----------|
| order_number (PK) | int       |
| customer_number   | int       |
| order_date        | date      |
| required_date     | date      |
| shipped_date      | date      |
| status            | char(15)  |
| comment           | char(200) |
</pre> 
  <p><strong>样例输入</strong></p> 
  <pre class="language-text">| order_number | customer_number | order_date | required_date | shipped_date | status | comment |
|--------------|-----------------|------------|---------------|--------------|--------|---------|
| 1            | 1               | 2017-04-09 | 2017-04-13    | 2017-04-12   | Closed |         |
| 2            | 2               | 2017-04-15 | 2017-04-20    | 2017-04-18   | Closed |         |
| 3            | 3               | 2017-04-16 | 2017-04-25    | 2017-04-20   | Closed |         |
| 4            | 3               | 2017-04-18 | 2017-04-28    | 2017-04-25   | Closed |         |
</pre> 
  <p><strong>样例输出</strong></p> 
  <pre class="language-text">| customer_number |
|-----------------|
| 3               |
</pre> 
  <p><strong>解释</strong></p> 
  <pre class="language-text">customer_number 为 '3' 的顾客有两个订单，比顾客 '1' 或者 '2' 都要多，因为他们只有一个订单
所以结果是该顾客的 customer_number ，也就是 3 。
</pre> 
  <p><em><strong>进阶：</strong> 如果有多位顾客订单数并列最多，你能找到他们所有的 customer_number 吗？</em></p> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
```