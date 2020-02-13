# $681. [中等] 最近时刻

**题目链接：**[https://leetcode-cn.com/problems/next-closest-time](https://leetcode-cn.com/problems/next-closest-time)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个形如 “HH:MM” 表示的时刻，利用当前出现过的数字构造下一个距离当前时间最近的时刻。每个出现数字都可以被无限次使用。</p> 
  <p>你可以认为给定的字符串一定是合法的。例如，“01:34” 和 “12:09” 是合法的，“1:34” 和 “12:9” 是不合法的。</p> 
  <p>&nbsp;</p> 
  <p><strong>样例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "19:34"
<strong>输出:</strong> "19:39"
<strong>解释:</strong> 利用数字 <strong>1, 9, 3, 4</strong> 构造出来的最近时刻是 <strong>19:39</strong>，是 5 分钟之后。结果不是 <strong>19:33</strong> 因为这个时刻是 23 小时 59 分钟之后。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>样例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "23:59"
<strong>输出:</strong> "22:22"
<strong>解释:</strong> 利用数字 <strong>2, 3, 5, 9</strong> 构造出来的最近时刻是 <strong>22:22</strong>。 答案一定是第二天的某一时刻，所以选择可构造的最小时刻。
</pre> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public String nextClosestTime(String time) {
        
    }
}
```