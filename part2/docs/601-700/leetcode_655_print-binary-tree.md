# 655. [中等] 输出二叉树

**题目链接：**[https://leetcode-cn.com/problems/print-binary-tree](https://leetcode-cn.com/problems/print-binary-tree)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：</p> 
  <ol> 
   <li>行数&nbsp;<code>m</code>&nbsp;应当等于给定二叉树的高度。</li> 
   <li>列数&nbsp;<code>n</code>&nbsp;应当总是奇数。</li> 
   <li>根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（<strong>左下部分和右下部分</strong>）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。</li> 
   <li>每个未使用的空间应包含一个空的字符串<code>""</code>。</li> 
   <li>使用相同的规则输出子树。</li> 
  </ol> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
     1
    /
   2
<strong>输出:</strong>
[["", "1", ""],
 ["2", "", ""]]
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
     1
    / \
   2   3
    \
     4
<strong>输出:</strong>
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入:</strong>
      1
     / \
    2   5
   / 
  3 
 / 
4 
<strong>输出:</strong>
[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
</pre> 
  <p><strong>注意:</strong> 二叉树的高度在范围 [1, 10] 中。</p> 
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
    public List<List<String>> printTree(TreeNode root) {
        
    }
}
```