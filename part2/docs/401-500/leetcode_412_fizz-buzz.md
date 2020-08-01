# 412. [简单] Fizz Buzz

**题目链接：**[https://leetcode-cn.com/problems/fizz-buzz](https://leetcode-cn.com/problems/fizz-buzz)

---

<Cards card="leetcode_412_fizz-buzz"></Cards>

---

```java
class Solution {
    public List<String> fizzBuzz(int n) {

    }
}
```

```java
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> list = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                list.add("FizzBuzz");
            } else if (i % 3 == 0) {
                list.add("Fizz");
            } else if (i % 5 == 0) {
                list.add("Buzz");
            } else {
                list.add(String.valueOf(i));
            }
        }
        return list;
    }

//    public static void main(String[] args) {
//        new Solution412().fizzBuzz(15).forEach(System.out::println);
//    }
}
```
