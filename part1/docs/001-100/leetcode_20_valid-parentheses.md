# 20. [简单] 有效的括号

**题目链接：**[https://leetcode-cn.com/problems/valid-parentheses](https://leetcode-cn.com/problems/valid-parentheses)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个只包括 <code>'('</code>，<code>')'</code>，<code>'{'</code>，<code>'}'</code>，<code>'['</code>，<code>']'</code>&nbsp;的字符串，判断字符串是否有效。</p> 
  <p>有效字符串需满足：</p> 
  <ol> 
   <li>左括号必须用相同类型的右括号闭合。</li> 
   <li>左括号必须以正确的顺序闭合。</li> 
  </ol> 
  <p>注意空字符串可被认为是有效字符串。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "()"
<strong>输出:</strong> true
</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "()[]{}"
<strong>输出:</strong> true
</pre> 
  <p><strong>示例&nbsp;3:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "(]"
<strong>输出:</strong> false
</pre> 
  <p><strong>示例&nbsp;4:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "([)]"
<strong>输出:</strong> false
</pre> 
  <p><strong>示例&nbsp;5:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "{[]}"
<strong>输出:</strong> true</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean isValid(String s) {
        
    }
}
```

```java
import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        // 使用栈
        Stack<Character> stack = new Stack<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else if (!stack.empty()
                    && ((ch == ')' && stack.peek() == '(')
                    || (ch == ']' && stack.peek() == '[')
                    || (ch == '}' && stack.peek() == '{'))
            ) {
                stack.push(ch);
                stack.pop();
                stack.pop();
            } else {
                return false;
            }
        }
        return stack.empty();
    }

//    public static void main(String[] args) {
//        String s1 = "()";
//        String s2 = "()[]{}";
//        String s3 = "(]";
//        String s4 = "([)]";
//        String s5 = "{[]}";
//        String s6 = "}";
//
//        Solution20 solution = new Solution20();
//
//        System.out.println(solution.isValid(s1)); // true
//        System.out.println(solution.isValid(s2)); // true
//        System.out.println(solution.isValid(s3)); // false
//        System.out.println(solution.isValid(s4)); // false
//        System.out.println(solution.isValid(s5)); // true
//        System.out.println(solution.isValid(s6));
//    }
}
```