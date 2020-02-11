# $602. 好友申请 II ：谁有最多的好友

**题目链接：**[https://leetcode-cn.com/problems/friend-requests-ii-who-has-the-most-friends](https://leetcode-cn.com/problems/friend-requests-ii-who-has-the-most-friends)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>在 Facebook 或者 Twitter 这样的社交应用中，人们经常会发好友申请也会收到其他人的好友申请。</p> 
  <p>&nbsp;</p> 
  <p>表&nbsp;<code>request_accepted</code>&nbsp;存储了所有好友申请通过的数据记录，其中， <strong>requester_id</strong>&nbsp;和 <strong>accepter_id</strong>&nbsp;都是用户的编号。</p> 
  <p>&nbsp;</p> 
  <pre class="language-text">| requester_id | accepter_id | accept_date|
|--------------|-------------|------------|
| 1            | 2           | 2016_06-03 |
| 1            | 3           | 2016-06-08 |
| 2            | 3           | 2016-06-08 |
| 3            | 4           | 2016-06-09 |
</pre> 
  <p>写一个查询语句，求出谁拥有最多的好友和他拥有的好友数目。对于上面的样例数据，结果为：</p> 
  <pre class="language-text">| id | num |
|----|-----|
| 3  | 3   |
</pre> 
  <p><strong>注意：</strong></p> 
  <ul> 
   <li>保证拥有最多好友数目的只有 1 个人。</li> 
   <li>好友申请只会被接受一次，所以不会有&nbsp;<strong>requester_id</strong>&nbsp;和&nbsp;<strong>accepter_id</strong>&nbsp;值都相同的重复记录。</li> 
  </ul> 
  <p>&nbsp;</p> 
  <p><strong>解释：</strong></p> 
  <p>编号为 '3' 的人是编号为 '1'，'2' 和 '4' 的好友，所以他总共有 3 个好友，比其他人都多。</p> 
  <p>&nbsp;</p> 
  <p><strong>进阶：</strong></p> 
  <p>在真实世界里，可能会有多个人拥有好友数相同且最多，你能找到所有这些人吗？</p> 
 </div>
</div>

---

**AC 代码：**

```java

```