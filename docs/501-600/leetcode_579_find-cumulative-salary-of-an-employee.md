# $579. 查询员工的累计薪水

**题目链接：**[https://leetcode-cn.com/problems/find-cumulative-salary-of-an-employee](https://leetcode-cn.com/problems/find-cumulative-salary-of-an-employee)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p><strong>Employee</strong> 表保存了一年内的薪水信息。</p> 
  <p>请你编写 SQL 语句，来查询每个员工每个月最近三个月的累计薪水（不包括当前统计月，不足三个月也要计算）。</p> 
  <p>结果请按 'Id' 升序，然后按 'Month' 降序显示。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong><br> <strong>输入：</strong></p> 
  <pre class="language-text">| Id | Month | Salary |
|----|-------|--------|
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 1  | 2     | 30     |
| 2  | 2     | 30     |
| 3  | 2     | 40     |
| 1  | 3     | 40     |
| 3  | 3     | 60     |
| 1  | 4     | 60     |
| 3  | 4     | 70     |
</pre> 
  <p><strong>输出：</strong></p> 
  <pre class="language-text">| Id | Month | Salary |
|----|-------|--------|
| 1  | 3     | 90     |
| 1  | 2     | 50     |
| 1  | 1     | 20     |
| 2  | 1     | 20     |
| 3  | 3     | 100    |
| 3  | 2     | 40     |
</pre> 
  <p>&nbsp;</p> 
  <p><strong>解释：</strong></p> 
  <p>员工 '1'&nbsp;除去最近一个月（月份 '4'），有三个月的薪水记录：月份 '3'&nbsp;薪水为&nbsp;40，月份 '2'&nbsp;薪水为 30，月份 '1'&nbsp;薪水为 20。</p> 
  <p>所以近 3 个月的薪水累计分别为&nbsp;(40 + 30 + 20) =&nbsp;90，(30 + 20) = 50 和 20。</p> 
  <pre class="language-text">| Id | Month | Salary |
|----|-------|--------|
| 1  | 3     | 90     |
| 1  | 2     | 50     |
| 1  | 1     | 20     |
</pre> 
  <p>员工 '2' 除去最近的一个月（月份 '2'）的话，只有月份 '1' 这一个月的薪水记录。</p> 
  <pre class="language-text">| Id | Month | Salary |
|----|-------|--------|
| 2  | 1     | 20     |
</pre> 
  <p>员工 '3' 除去最近一个月（月份 '4'）后有两个月，分别为：月份 '4' 薪水为 60 和 月份 '2' 薪水为 40。所以各月的累计情况如下：</p> 
  <pre class="language-text">| Id | Month | Salary |
|----|-------|--------|
| 3  | 3     | 100    |
| 3  | 2     | 40     |
</pre> 
  <p>&nbsp;</p> 
 </div>
</div>

---

**AC 代码：**

```java

```