# 241. 为运算表达式设计优先级

**题目链接：**[https://leetcode-cn.com/problems/different-ways-to-add-parentheses](https://leetcode-cn.com/problems/different-ways-to-add-parentheses)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 <code>+</code>,&nbsp;<code>-</code>&nbsp;以及&nbsp;<code>*</code>&nbsp;。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <code>"2-1-1"</code>
<strong>输出:</strong> <code>[0, 2]</code>
<strong>解释: </strong>
((2-1)-1) = 0 
(2-(1-1)) = 2</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong><code>"2*3-4*5"</code>
<strong>输出:</strong> <code>[-34, -14, -10, -10, 10]</code>
<strong>解释: 
</strong>(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10</pre> 
 </div>
</div>

---

```java
class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        
    }
}
```