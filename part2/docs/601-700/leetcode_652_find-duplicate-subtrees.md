# 652. 寻找重复的子树

**题目链接：**[https://leetcode-cn.com/problems/find-duplicate-subtrees](https://leetcode-cn.com/problems/find-duplicate-subtrees)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意<strong>一棵</strong>的根结点即可。</p> 
  <p>两棵树重复是指它们具有相同的结构以及相同的结点值。</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text">        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
</pre> 
  <p>下面是两个重复的子树：</p> 
  <pre class="language-text">      2
     /
    4
</pre> 
  <p>和</p> 
  <pre class="language-text">    4
</pre> 
  <p>因此，你需要以列表的形式返回上述重复子树的根结点。</p> 
 </div>
</div>

---

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        
    }
}
```