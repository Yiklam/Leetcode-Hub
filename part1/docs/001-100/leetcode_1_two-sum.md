# 1. [简单] 两数之和

**题目链接：**[https://leetcode-cn.com/problems/two-sum](https://leetcode-cn.com/problems/two-sum)

---

<Cards card="leetcode_1_two-sum"></Cards>

---

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {

    }
}
```

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            map.put(nums[i], i);
            // 0 => 2
            // 1 => 7
            // 2 => 11
            // 3 => 15
        }
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            // complement => 9 - 2 = 7
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[]{i, map.get(complement)};
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }
}
```
