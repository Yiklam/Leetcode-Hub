# 1235. [困难] 规划兼职工作

**题目链接：**[https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling](https://leetcode-cn.com/problems/maximum-profit-in-job-scheduling)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>你打算利用空闲时间来做兼职工作赚些零花钱。</p> 
  <p>这里有&nbsp;<code>n</code>&nbsp;份兼职工作，每份工作预计从&nbsp;<code>startTime[i]</code>&nbsp;开始到&nbsp;<code>endTime[i]</code>&nbsp;结束，报酬为&nbsp;<code>profit[i]</code>。</p> 
  <p>给你一份兼职工作表，包含开始时间&nbsp;<code>startTime</code>，结束时间&nbsp;<code>endTime</code>&nbsp;和预计报酬&nbsp;<code>profit</code>&nbsp;三个数组，请你计算并返回可以获得的最大报酬。</p> 
  <p>注意，时间上出现重叠的 2 份工作不能同时进行。</p> 
  <p>如果你选择的工作在时间&nbsp;<code>X</code>&nbsp;结束，那么你可以立刻进行在时间&nbsp;<code>X</code>&nbsp;开始的下一份工作。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <p><strong><img style="width: 300px;" src="/aliyun-lc-upload/uploads/2019/10/19/sample1_1584.png" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
<strong>输出：</strong>120
<strong>解释：
</strong>我们选出第 1 份和第 4 份工作， 
时间范围是 [1-3]+[3-6]，共获得报酬 120 = 50 + 70。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <p><strong><img style="height: 112px; width: 600px;" src="/aliyun-lc-upload/uploads/2019/10/19/sample22_1584.png" alt=""> </strong></p> 
  <pre class="language-text"><strong>输入：</strong>startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
<strong>输出：</strong>150
<strong>解释：
</strong>我们选择第 1，4，5 份工作。 
共获得报酬 150 = 20 + 70 + 60。
</pre> 
  <p><strong>示例 3：</strong></p> 
  <p><strong><img style="height: 112px; width: 400px;" src="/aliyun-lc-upload/uploads/2019/10/19/sample3_1584.png" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
<strong>输出：</strong>6
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= startTime.length == endTime.length ==&nbsp;profit.length&nbsp;&lt;= 5 * 10^4</code></li> 
   <li><code>1 &lt;=&nbsp;startTime[i] &lt;&nbsp;endTime[i] &lt;= 10^9</code></li> 
   <li><code>1 &lt;=&nbsp;profit[i] &lt;= 10^4</code></li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        
    }
}
```