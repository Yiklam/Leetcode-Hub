# 791. [中等] 自定义字符串排序

**题目链接：**[https://leetcode-cn.com/problems/custom-sort-string](https://leetcode-cn.com/problems/custom-sort-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>字符串<code>S</code>和 <code>T</code> 只包含小写字符。在<code>S</code>中，所有字符只会出现一次。</p> 
  <p><code>S</code> 已经根据某种规则进行了排序。我们要根据<code>S</code>中的字符顺序对<code>T</code>进行排序。更具体地说，如果<code>S</code>中<code>x</code>在<code>y</code>之前出现，那么返回的字符串中<code>x</code>也应出现在<code>y</code>之前。</p> 
  <p>返回任意一种符合条件的字符串<code>T</code>。</p> 
  <pre class="language-text"><strong>示例:</strong>
<strong>输入:</strong>
S = "cba"
T = "abcd"
<strong>输出:</strong> "cbad"
<strong>解释:</strong> 
S中出现了字符 "a", "b", "c", 所以 "a", "b", "c" 的顺序应该是 "c", "b", "a". 
由于 "d" 没有在S中出现, 它可以放在T的任意位置. "dcba", "cdba", "cbda" 都是合法的输出。
</pre> 
  <p><strong>注意:</strong></p> 
  <ul> 
   <li><code>S</code>的最大长度为<code>26</code>，其中没有重复的字符。</li> 
   <li><code>T</code>的最大长度为<code>200</code>。</li> 
   <li><code>S</code>和<code>T</code>只包含小写字符。</li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public String customSortString(String S, String T) {
        
    }
}
```