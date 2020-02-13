# $339. [简单] 嵌套列表权重和

**题目链接：**[https://leetcode-cn.com/problems/nested-list-weight-sum](https://leetcode-cn.com/problems/nested-list-weight-sum)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个嵌套的整数列表，请返回该列表按深度加权后所有整数的总和。</p> 
  <p>每个元素要么是整数，要么是列表。同时，列表中元素同样也可以是整数或者是另一个列表。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>[[1,1],2,[1,1]]
<strong>输出: </strong>10 
<strong>解释: </strong>因为列表中有四个深度为 2 的 1 ，和一个深度为 1 的 2。</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong>[1,[4,[6]]]
<strong>输出: </strong>27 
<strong>解释: </strong>一个深度为 1 的 1，一个深度为 2 的 4，一个深度为 3 的 6。所以，1 + 4*2 + 6*3 = 27。</pre> 
 </div>
</div>

---

```java
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void setInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
class Solution {
    public int depthSum(List<NestedInteger> nestedList) {
        
    }
}
```