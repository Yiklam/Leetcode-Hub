# 17. [中等] 电话号码的字母组合

**题目链接：**[https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个仅包含数字&nbsp;<code>2-9</code>&nbsp;的字符串，返回所有它能表示的字母组合。</p> 
  <p>给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。</p> 
  <p><img style="width: 200px;" src="/aliyun-lc-upload/original_images/17_telephone_keypad.png"></p> 
  <p><strong>示例:</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"23"
<strong>输出：</strong>["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
</pre> 
  <p><strong>说明:</strong><br> 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。</p> 
 </div>
</div>

---

```java
class Solution {
    public List<String> letterCombinations(String digits) {
        
    }
}
```

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class Solution {
    // 8 * 4
    private static final String[][] keyboardArr = new String[][]{
            {"a", "b", "c"},
            {"d", "e", "f"},
            {"g", "h", "i"},
            {"j", "k", "l"},
            {"m", "n", "o"},
            {"p", "q", "r", "s"},
            {"t", "u", "v"},
            {"w", "x", "y", "z"}
    };

    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0) {
            return Collections.emptyList();
        }
        // char - '2' 适配数组下标
        String[] res = keyboardArr[digits.charAt(0) - '2'];
        for (int i = 1; i < digits.length(); i++) {
            res = getCartesianProduct(res, keyboardArr[digits.charAt(i) - '2']);
        }
        // 转 List
        List<String> list = new ArrayList<>(res.length);
        list.addAll(Arrays.asList(res));
        return list;
    }

    /**
     * 笛卡尔积
     */
    private String[] getCartesianProduct(String[] arr1, String[] arr2) {
        int lenTotal = arr1.length * arr2.length;
        String[] arrRes = new String[lenTotal];
        for (int k = 0; k < lenTotal; ) {
            for (String ch1 : arr1) {
                for (String ch2 : arr2) {
                    arrRes[k] = ch1 + ch2;
                    k++;
                }
            }
        }
        return arrRes;
    }

//    public static void main(String[] args) {
//        String digits1 = "23";
//        String digits2 = "";
//
//        Solution17 solution = new Solution17();
//
//        System.out.println(solution.letterCombinations(digits1)); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//        System.out.println(solution.letterCombinations(digits2)); // []
//    }
}
```