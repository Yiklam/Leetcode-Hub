# 620. 有趣的电影

**题目链接：**[https://leetcode-cn.com/problems/not-boring-movies](https://leetcode-cn.com/problems/not-boring-movies)

---

<div class="content__1Y2H">
 <div class="sql-schema-wrapper__1jqS">
  <a class="sql-schema-link__1VAC">SQL架构
   <svg viewbox="0 0 24 24" width="1em" height="1em" class="css-1lc17o4-icon">
    <path fill-rule="evenodd" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
   </svg></a>
 </div>
 <div class="notranslate">
  <p>某城市开了一家新的电影院，吸引了很多人过来看电影。该电影院特别注意用户体验，专门有个 LED显示板做电影推荐，上面公布着影评和相关电影描述。</p> 
  <p>作为该电影院的信息部主管，您需要编写一个 SQL查询，找出所有影片描述为<strong>非</strong>&nbsp;<code>boring</code>&nbsp;(不无聊)&nbsp;的并且<strong> id 为奇数&nbsp;</strong>的影片，结果请按等级 <code>rating</code> 排列。</p> 
  <p>&nbsp;</p> 
  <p>例如，下表 <code>cinema</code>:</p> 
  <pre class="language-text">+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |
+---------+-----------+--------------+-----------+
</pre> 
  <p>对于上面的例子，则正确的输出是为：</p> 
  <pre class="language-text">+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |
+---------+-----------+--------------+-----------+
</pre> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```sh
# Write your MySQL query statement below
```