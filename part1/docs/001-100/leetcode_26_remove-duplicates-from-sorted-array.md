# 26. [简单] 删除排序数组中的重复项

**题目链接：**[https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)

---

<Cards card="leetcode_26_remove-duplicates-from-sorted-array"></Cards>

---

```java
class Solution {
    public int removeDuplicates(int[] nums) {

    }
}
```

```java
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Solution26 {
    // 返回移除后数组重复项后的新长度
    public int removeDuplicates(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        Object[] newNums = set.toArray();
        Arrays.sort(newNums);
        for (int i = 0; i < set.size(); i++) {
            nums[i] = (int) newNums[i];
        }
        return set.size();
    }

//    public static void main(String[] args) {
//        int[] nums1 = {1, 1, 2};
//        int[] nums2 = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
//        Solution26 solution = new Solution26();
//        System.out.println(solution.removeDuplicates(nums1)); // 2
//        System.out.println(solution.removeDuplicates(nums2)); // 5
//    }
}
```
