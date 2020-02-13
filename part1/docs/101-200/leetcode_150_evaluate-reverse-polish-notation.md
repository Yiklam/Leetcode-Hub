# 150. [中等] 逆波兰表达式求值

**题目链接：**[https://leetcode-cn.com/problems/evaluate-reverse-polish-notation](https://leetcode-cn.com/problems/evaluate-reverse-polish-notation)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>根据<a href="https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437">逆波兰表示法</a>，求表达式的值。</p> 
  <p>有效的运算符包括&nbsp;<code>+</code>,&nbsp;<code>-</code>,&nbsp;<code>*</code>,&nbsp;<code>/</code>&nbsp;。每个运算对象可以是整数，也可以是另一个逆波兰表达式。</p> 
  <p><strong>说明：</strong></p> 
  <ul> 
   <li>整数除法只保留整数部分。</li> 
   <li>给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。</li> 
  </ul> 
  <p><strong>示例&nbsp;1：</strong></p> 
  <pre class="language-text"><strong>输入:</strong> ["2", "1", "+", "3", "*"]
<strong>输出:</strong> 9
<strong>解释:</strong> ((2 + 1) * 3) = 9
</pre> 
  <p><strong>示例&nbsp;2：</strong></p> 
  <pre class="language-text"><strong>输入:</strong> ["4", "13", "5", "/", "+"]
<strong>输出:</strong> 6
<strong>解释:</strong> (4 + (13 / 5)) = 6
</pre> 
  <p><strong>示例&nbsp;3：</strong></p> 
  <pre class="language-text"><strong>输入:</strong> ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
<strong>输出:</strong> 22
<strong>解释:</strong> 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22</pre> 
 </div>
</div>

---

```java
class Solution {
    public int evalRPN(String[] tokens) {
        
    }
}
```