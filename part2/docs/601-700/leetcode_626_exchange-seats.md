# 626. [中等] 换座位

**题目链接：**[https://leetcode-cn.com/problems/exchange-seats](https://leetcode-cn.com/problems/exchange-seats)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>小美是一所中学的信息科技老师，她有一张 <code>seat</code>&nbsp;座位表，平时用来储存学生名字和与他们相对应的座位 id。</p> 
  <p>其中纵列的&nbsp;<strong>id&nbsp;</strong>是连续递增的</p> 
  <p>小美想改变相邻俩学生的座位。</p> 
  <p>你能不能帮她写一个 SQL query&nbsp;来输出小美想要的结果呢？</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text">+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+
</pre> 
  <p>假如数据输入的是上表，则输出结果如下：</p> 
  <pre class="language-text">+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+</pre> 
  <p><strong>注意：</strong></p> 
  <p>如果学生人数是奇数，则不需要改变最后一个同学的座位。</p> 
 </div>
</div>

---

```sql
# Write your MySQL query statement below
```