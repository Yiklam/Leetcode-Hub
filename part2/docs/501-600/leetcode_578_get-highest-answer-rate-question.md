# $578. 查询回答率最高的问题

**题目链接：**[https://leetcode-cn.com/problems/get-highest-answer-rate-question](https://leetcode-cn.com/problems/get-highest-answer-rate-question)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>从 <code>survey_log</code> 表中获得回答率最高的问题，<code>survey_log</code> 表包含这些列<strong>：uid</strong>, <strong>action</strong>, <strong>question_id</strong>, <strong>answer_id</strong>, <strong>q_num</strong>, <strong>timestamp</strong>。</p> 
  <p>uid 表示用户 id；action 有以下几种值："show"，"answer"，"skip"；当 action 值为 "answer" 时 answer_id 非空，而 action 值为 "show" 或者 "skip" 时 answer_id 为空；q_num 表示当前会话中问题的编号。</p> 
  <p>请编写SQL查询来找到具有最高回答率的问题。</p> 
  <p><strong>示例:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
+------+-----------+--------------+------------+-----------+------------+
| uid  | action    | question_id  | answer_id  | q_num     | timestamp  |
+------+-----------+--------------+------------+-----------+------------+
| 5    | show      | 285          | null       | 1         | 123        |
| 5    | answer    | 285          | 124124     | 1         | 124        |
| 5    | show      | 369          | null       | 2         | 125        |
| 5    | skip      | 369          | null       | 2         | 126        |
+------+-----------+--------------+------------+-----------+------------+
<strong>输出:</strong>
+-------------+
| survey_log  |
+-------------+
|    285      |
+-------------+
<strong>解释:</strong>
问题285的回答率为 1/1，而问题369回答率为 0/1，因此输出285。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意:</strong> 回答率最高的含义是：同一问题编号中回答数占显示数的比例。</p> 
 </div>
</div>

---

**AC 代码：**

```java

```