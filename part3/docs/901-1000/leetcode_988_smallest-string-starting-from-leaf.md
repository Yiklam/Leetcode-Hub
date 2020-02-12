# 988. 从叶结点开始的最小字符串

**题目链接：**[https://leetcode-cn.com/problems/smallest-string-starting-from-leaf](https://leetcode-cn.com/problems/smallest-string-starting-from-leaf)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一颗根结点为&nbsp;<code>root</code>&nbsp;的二叉树，书中的每个结点都有一个从&nbsp;<code>0</code> 到&nbsp;<code>25</code>&nbsp;的值，分别代表字母&nbsp;<code>'a'</code> 到&nbsp;<code>'z'</code>：值&nbsp;<code>0</code> 代表&nbsp;<code>'a'</code>，值&nbsp;<code>1</code>&nbsp;代表&nbsp;<code>'b'</code>，依此类推。</p> 
  <p>找出按字典序最小的字符串，该字符串从这棵树的一个叶结点开始，到根结点结束。</p> 
  <p><em>（小贴士：字符串中任何较短的前缀在字典序上都是较小的：例如，在字典序上&nbsp;<code>"ab"</code> 比&nbsp;<code>"aba"</code>&nbsp;要小。叶结点是指没有子结点的结点。）</em></p> 
  <p>&nbsp;</p> 
  <ol> 
  </ol> 
  <p><strong>示例 1：</strong></p> 
  <p><strong><img style="height: 107px; width: 160px;" src="/aliyun-lc-upload/uploads/2019/02/02/tree1.png" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>[0,1,2,3,4,3,4]
<strong>输出：</strong>"dba"
</pre> 
  <p><strong>示例 2：</strong></p> 
  <p><strong><img style="height: 107px; width: 160px;" src="/aliyun-lc-upload/uploads/2019/02/02/tree2.png" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>[25,1,3,1,3,0,2]
<strong>输出：</strong>"adz"
</pre> 
  <p><strong>示例 3：</strong></p> 
  <p><strong><img style="height: 180px; width: 172px;" src="/aliyun-lc-upload/uploads/2019/02/02/tree3.png" alt=""></strong></p> 
  <pre class="language-text"><strong>输入：</strong>[2,2,1,null,1,0,null,0]
<strong>输出：</strong>"abc"
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li>给定树的结点数介于&nbsp;<code>1</code> 和&nbsp;<code>8500</code>&nbsp;之间。</li> 
   <li>树中的每个结点都有一个介于&nbsp;<code>0</code>&nbsp;和&nbsp;<code>25</code>&nbsp;之间的值。</li> 
  </ol> 
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
    public String smallestFromLeaf(TreeNode root) {
        
    }
}
```