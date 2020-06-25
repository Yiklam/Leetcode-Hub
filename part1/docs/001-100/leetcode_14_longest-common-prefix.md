# 14. [简单] 最长公共前缀

**题目链接：**[https://leetcode-cn.com/problems/longest-common-prefix](https://leetcode-cn.com/problems/longest-common-prefix)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>编写一个函数来查找字符串数组中的最长公共前缀。</p> 
  <p>如果不存在公共前缀，返回空字符串&nbsp;<code>""</code>。</p> 
  <p><strong>示例&nbsp;1:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>["flower","flow","flight"]
<strong>输出:</strong> "fl"
</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>["dog","racecar","car"]
<strong>输出:</strong> ""
<strong>解释:</strong> 输入不存在公共前缀。
</pre> 
  <p><strong>说明:</strong></p> 
  <p>所有输入只包含小写字母&nbsp;<code>a-z</code>&nbsp;。</p> 
 </div>
</div>

---

```java
class Solution {
    public String longestCommonPrefix(String[] strs) {
        
    }
}
```

```java
class Solution {
    // 横向扫描
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        String res = strs[0];
        for (int i = 1; !res.equals("") && i < strs.length; i++) {
            res = strs[i].length() == 0 ? "" : getLongestCommonPrefix(res, strs[i]);
        }
        return res;
    }

    private String getLongestCommonPrefix(String str1, String str2) {
        int minLen = Math.min(str1.length(), str2.length());
        int curLen = 0;
        for (int i = 0; i < minLen; i++) {
            if (str1.charAt(i) != str2.charAt(i)) {
                break;
            }
            curLen++;
        }
        return str1.substring(0, curLen);
    }

//    public static void main(String[] args) {
//        String[] strs1 = new String[]{"flower", "flow", "flight"};
//        String[] strs2 = new String[]{"dog", "racecar", "car"};
//
//        // 所有输入只包含小写字母 a-z
//        String[] strs3 = new String[]{"aca", "cba"};
//
//        Solution14 solution = new Solution14();
//
//        System.out.println(solution.longestCommonPrefix(strs1)); // "fl"
//        System.out.println(solution.longestCommonPrefix(strs2)); // ""
//        System.out.println(solution.longestCommonPrefix(strs3)); // ""
//    }
}
```