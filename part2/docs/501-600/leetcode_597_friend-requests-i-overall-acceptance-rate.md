# $597. 好友申请 I ：总体通过率

**题目链接：**[https://leetcode-cn.com/problems/friend-requests-i-overall-acceptance-rate](https://leetcode-cn.com/problems/friend-requests-i-overall-acceptance-rate)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>在 Facebook 或者 Twitter 这样的社交应用中，人们经常会发好友申请也会收到其他人的好友申请。现在给如下两个表：</p> 
  <p>&nbsp;</p> 
  <p>表：&nbsp;<code>friend_request</code></p> 
  <pre class="language-text">| sender_id | send_to_id |request_date|
|-----------|------------|------------|
| 1         | 2          | 2016_06-01 |
| 1         | 3          | 2016_06-01 |
| 1         | 4          | 2016_06-01 |
| 2         | 3          | 2016_06-02 |
| 3         | 4          | 2016-06-09 |
</pre> 
  <p>&nbsp;</p> 
  <p>表：&nbsp;<code>request_accepted</code></p> 
  <pre class="language-text">| requester_id | accepter_id |accept_date |
|--------------|-------------|------------|
| 1            | 2           | 2016_06-03 |
| 1            | 3           | 2016-06-08 |
| 2            | 3           | 2016-06-08 |
| 3            | 4           | 2016-06-09 |
| 3            | 4           | 2016-06-10 |
</pre> 
  <p>&nbsp;</p> 
  <p>写一个查询语句，求出好友申请的通过率，用 2 位小数表示。通过率由接受好友申请的数目除以申请总数。</p> 
  <p>&nbsp;</p> 
  <p>对于上面的样例数据，你的查询语句应该返回如下结果。</p> 
  <p>&nbsp;</p> 
  <pre class="language-text">|accept_rate|
|-----------|
|       0.80|
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意:</strong></p> 
  <ul> 
   <li>通过的好友申请不一定都在表&nbsp;<code>friend_request</code>&nbsp;中。在这种情况下，你只需要统计总的被通过的申请数（不管它们在不在原来的申请中），并将它除以申请总数，得到通过率</li> 
   <li>一个好友申请发送者有可能会给接受者发几条好友申请，也有可能一个好友申请会被通过好几次。这种情况下，重复的好友申请只统计一次。</li> 
   <li>如果一个好友申请都没有，通过率为 0.00 。</li> 
  </ul> 
  <p>&nbsp;</p> 
  <p><strong>解释：</strong>&nbsp;总共有 5 个申请，其中 4 个是不重复且被通过的好友申请，所以成功率是 0.80 。</p> 
  <p>&nbsp;</p> 
  <p><strong>进阶:</strong></p> 
  <ul> 
   <li>你能写一个查询语句得到每个月的通过率吗？</li> 
   <li>你能求出每一天的累计通过率吗？</li> 
  </ul> 
 </div>
</div>

---

**AC 代码：**

```java

```