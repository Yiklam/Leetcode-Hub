# 125. [简单] 验证回文串

**题目链接：**[https://leetcode-cn.com/problems/valid-palindrome](https://leetcode-cn.com/problems/valid-palindrome)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。</p> 
  <p><strong>说明：</strong>本题中，我们将空字符串定义为有效的回文串。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "A man, a plan, a canal: Panama"
<strong>输出:</strong> true
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "race a car"
<strong>输出:</strong> false
</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean isPalindrome(String s) {

    }
}
```

```java
public class Solution {
    public boolean isPalindrome(String s) {
        String str = dealWithStr(s);
        if (str.length() == 0) {
            return true;
        }
        String reverseStr = new StringBuilder(str).reverse().toString();
        for (int i = 0; i < str.length() / 2 + 1; i++) {
            if (str.charAt(i) != reverseStr.charAt(i)) {
                return false;
            }
        }
        return true;
    }

    private String dealWithStr(String s) {
        StringBuilder stringBuilder = new StringBuilder();
        for (char ch : s.toCharArray()) {
            if ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                stringBuilder.append(ch);
            }
        }
        return stringBuilder.toString().toLowerCase();
    }

//    public static void main(String[] args) {
//        String s1 = "A man, a plan, a canal: Panama";
//        String s2 = "race a car";
//        String s3 = " ";
//
//        Solution125 solution = new Solution125();
//        System.out.println(solution.isPalindrome(s1));
//        System.out.println(solution.isPalindrome(s2));
//        System.out.println(solution.isPalindrome(s3));
//    }
}
```
