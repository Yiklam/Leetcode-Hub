# 893. 特殊等价字符串组

**题目链接：**[https://leetcode-cn.com/problems/groups-of-special-equivalent-strings](https://leetcode-cn.com/problems/groups-of-special-equivalent-strings)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>你将得到一个字符串数组 <code>A</code>。</p> 
  <p>如果经过任意次数的移动，S == T，那么两个字符串 <code>S</code> 和 <code>T</code> 是<strong>特殊等价</strong>的。</p> 
  <p>一次<strong>移动</strong>包括选择两个索引 <code>i</code> 和 <code>j</code>，且&nbsp;<code>i ％ 2 == j ％ 2</code>，交换 <code>S[j]</code> 和 <code>S [i]</code>。</p> 
  <p>现在规定，<strong><code>A</code> 中的特殊等价字符串组</strong>是 <code>A</code> 的非空子集 <code>S</code>，这样不在 <code>S</code> 中的任何字符串与 <code>S</code> 中的任何字符串都不是特殊等价的。</p> 
  <p>返回 <code>A</code>&nbsp;中特殊等价字符串组的数量。</p> 
  <p>&nbsp;</p> 
  <ul> 
  </ul> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["a","b","c","a","c","c"]
<strong>输出：</strong>3
<strong>解释：</strong>3<strong> </strong>组 ["a","a"]，["b"]，["c","c","c"]
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["aa","bb","ab","ba"]
<strong>输出：</strong>4
<strong>解释：</strong>4 组 ["aa"]，["bb"]，["ab"]，["ba"]
</pre> 
  <p><strong>示例 3：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["abc","acb","bac","bca","cab","cba"]
<strong>输出：</strong>3
<strong>解释：</strong>3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"]
</pre> 
  <p><strong>示例 4：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["abcd","cdab","adcb","cbad"]
<strong>输出：</strong>1
<strong>解释：</strong>1 组 ["abcd","cdab","adcb","cbad"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= A.length &lt;= 1000</code></li> 
   <li><code>1 &lt;= A[i].length &lt;= 20</code></li> 
   <li>所有&nbsp;<code>A[i]</code>&nbsp;都具有相同的长度。</li> 
   <li>所有&nbsp;<code>A[i]</code>&nbsp;都只由小写字母组成。</li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public int numSpecialEquivGroups(String[] A) {
        
    }
}
```