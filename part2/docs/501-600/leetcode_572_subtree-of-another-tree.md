# 572. 另一个树的子树

**题目链接：**[https://leetcode-cn.com/problems/subtree-of-another-tree](https://leetcode-cn.com/problems/subtree-of-another-tree)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定两个非空二叉树 <strong>s</strong> 和 <strong>t</strong>，检验&nbsp;<strong>s</strong> 中是否包含和 <strong>t</strong> 具有相同结构和节点值的子树。<strong>s</strong> 的一个子树包括 <strong>s</strong> 的一个节点和这个节点的所有子孙。<strong>s</strong> 也可以看做它自身的一棵子树。</p> 
  <p><strong>示例 1:</strong><br> 给定的树 s:</p> 
  <pre class="language-text">     3
    / \
   4   5
  / \
 1   2
</pre> 
  <p>给定的树 t：</p> 
  <pre class="language-text">   4 
  / \
 1   2
</pre> 
  <p>返回 <strong>true</strong>，因为 t 与 s 的一个子树拥有相同的结构和节点值。</p> 
  <p><strong>示例 2:</strong><br> 给定的树 s：</p> 
  <pre class="language-text">     3
    / \
   4   5
  / \
 1   2
    /
   0
</pre> 
  <p>给定的树 t：</p> 
  <pre class="language-text">   4
  / \
 1   2
</pre> 
  <p>返回 <strong>false</strong>。</p> 
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
    public boolean isSubtree(TreeNode s, TreeNode t) {
        
    }
}
```