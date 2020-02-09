# $580. 统计各专业学生人数

**题目链接：**[https://leetcode-cn.com/problems/count-student-number-in-departments](https://leetcode-cn.com/problems/count-student-number-in-departments)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>一所大学有 2 个数据表，分别是&nbsp;<em><strong>student</strong></em>&nbsp;和&nbsp;<em><strong>department</strong></em>&nbsp;，这两个表保存着每个专业的学生数据和院系数据。</p> 
  <p>写一个查询语句，查询&nbsp;<em><strong>department&nbsp;</strong></em>表中每个专业的学生人数 （即使没有学生的专业也需列出）。</p> 
  <p>将你的查询结果按照学生人数降序排列。 如果有两个或两个以上专业有相同的学生数目，将这些部门按照部门名字的字典序从小到大排列。</p> 
  <p><strong><em>student</em></strong> 表格如下：</p> 
  <pre class="language-text">| Column Name  | Type      |
|--------------|-----------|
| student_id   | Integer   |
| student_name | String    |
| gender       | Character |
| dept_id      | Integer   |
</pre> 
  <p>其中， student_id 是学生的学号， student_name 是学生的姓名， gender 是学生的性别， dept_id 是学生所属专业的专业编号。</p> 
  <p><strong><em>department</em></strong> 表格如下：</p> 
  <pre class="language-text">| Column Name | Type    |
|-------------|---------|
| dept_id     | Integer |
| dept_name   | String  |
</pre> 
  <p>dept_id 是专业编号， dept_name 是专业名字。</p> 
  <p>这里是一个示例输入：<br> <strong><em>student</em></strong>&nbsp;表格：</p> 
  <pre class="language-text">| student_id | student_name | gender | dept_id |
|------------|--------------|--------|---------|
| 1          | Jack         | M      | 1       |
| 2          | Jane         | F      | 1       |
| 3          | Mark         | M      | 2       |
</pre> 
  <p><strong><em>department</em></strong> 表格：</p> 
  <pre class="language-text">| dept_id | dept_name   |
|---------|-------------|
| 1       | Engineering |
| 2       | Science     |
| 3       | Law         |
</pre> 
  <p>示例输出为：</p> 
  <pre class="language-text">| dept_name   | student_number |
|-------------|----------------|
| Engineering | 2              |
| Science     | 1              |
| Law         | 0              |
</pre> 
 </div>
</div>

---

**AC 代码：**

```java

```