# 202. [简单] 快乐数

**题目链接：**[https://leetcode-cn.com/problems/happy-number](https://leetcode-cn.com/problems/happy-number)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>编写一个算法来判断一个数是不是“快乐数”。</p> 
  <p>一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。</p> 
  <p><strong>示例:&nbsp;</strong></p> 
  <pre class="language-text"><strong>输入:</strong> 19
<strong>输出:</strong> true
<strong>解释: 
</strong>1<sup>2</sup> + 9<sup>2</sup> = 82
8<sup>2</sup> + 2<sup>2</sup> = 68
6<sup>2</sup> + 8<sup>2</sup> = 100
1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1
</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean isHappy(int n) {
        
    }
}
```

```java
import java.util.HashSet;
import java.util.Set;

public class Solution {
    // 快乐数 判断链表是否存在环
    public boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();
        // 116, 38, 73
        // 58, 89, 145, 42, 20, 4, 16, 37,
        while (n != 1 && !seen.contains(n)) {
            seen.add(n);
            n = getNext(n);
        }
        return n == 1;
    }

    private int getNext(int n) {
        int totalSum = 0;
        while (n > 0) {
            int d = n % 10;
            n = n / 10;
            totalSum += d * d;
        }
        return totalSum;
    }

//    public static void main(String[] args) {
//        System.out.println(new Solution202().isHappy(19));
//        System.out.println(new Solution202().isHappy(116));
//    }
}
```