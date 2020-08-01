# 205. [简单] 同构字符串

**题目链接：**[https://leetcode-cn.com/problems/isomorphic-strings](https://leetcode-cn.com/problems/isomorphic-strings)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定两个字符串&nbsp;<em><strong>s&nbsp;</strong></em>和&nbsp;<strong><em>t</em></strong>，判断它们是否是同构的。</p> 
  <p>如果&nbsp;<em><strong>s&nbsp;</strong></em>中的字符可以被替换得到&nbsp;<strong><em>t&nbsp;</em></strong>，那么这两个字符串是同构的。</p> 
  <p>所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <strong><em>s</em></strong> = <code>"egg", </code><strong><em>t = </em></strong><code>"add"</code>
<strong>输出:</strong> true
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <strong><em>s</em></strong> = <code>"foo", </code><strong><em>t = </em></strong><code>"bar"</code>
<strong>输出:</strong> false</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> <strong><em>s</em></strong> = <code>"paper", </code><strong><em>t = </em></strong><code>"title"</code>
<strong>输出:</strong> true</pre> 
  <p><strong>说明:</strong><br> 你可以假设&nbsp;<em><strong>s&nbsp;</strong></em>和 <strong><em>t </em></strong>具有相同的长度。</p> 
 </div>
</div>

---

```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        
    }
}
```

```java
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Solution {
    // 是否同构
    // HashMap 和 HashSet 运用
    public boolean isIsomorphic(String s, String t) {
        if (s == null || t == null || s.length() != t.length()) {
            return false;
        }
        Map<Character, Character> kvMap = new HashMap<>();
        Set<Character> singleSet = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
            char key = s.charAt(i);
            char value = t.charAt(i);
            if (!kvMap.containsKey(key) && !singleSet.contains(value)) {
                kvMap.put(key, value);
                singleSet.add(value);
            } else {
                if (!kvMap.containsKey(key) || (kvMap.get(key) != value)) {
                    return false;
                }
            }
        }
        return true;
    }

//    public static void main(String[] args) {
//        String s1 = "egg", t1 = "add";
//        String s2 = "foo", t2 = "bar";
//        String s3 = "paper", t3 = "title";
//        String s4 = "aab", t4 = "aaa";
//        Solution205 solution = new Solution205();
//        System.out.println(solution.isIsomorphic(s1, t1));
//        System.out.println(solution.isIsomorphic(s2, t2));
//        System.out.println(solution.isIsomorphic(s3, t3));
//        System.out.println(solution.isIsomorphic(s4, t4));
//    }
}
```