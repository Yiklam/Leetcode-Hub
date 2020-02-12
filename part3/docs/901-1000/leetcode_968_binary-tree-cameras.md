# 968. 监控二叉树

**题目链接：**[https://leetcode-cn.com/problems/binary-tree-cameras](https://leetcode-cn.com/problems/binary-tree-cameras)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个二叉树，我们在树的节点上安装摄像头。</p> 
  <p>节点上的每个摄影头都可以监视<strong>其父对象、自身及其直接子对象。</strong></p> 
  <p>计算监控树的所有节点所需的最小摄像头数量。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <p><img style="height: 163px; width: 138px;" src="/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_01.png" alt=""></p> 
  <pre class="language-text"><strong>输入：</strong>[0,0,null,0,0]
<strong>输出：</strong>1
<strong>解释：</strong>如图所示，一台摄像头足以监控所有节点。
</pre> 
  <p><strong>示例 2：</strong></p> 
  <p><img style="height: 312px; width: 139px;" src="/aliyun-lc-upload/uploads/2018/12/29/bst_cameras_02.png" alt=""></p> 
  <pre class="language-text"><strong>输入：</strong>[0,0,null,0,null,0,null,null,0]
<strong>输出：</strong>2
<strong>解释：</strong>需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。
</pre> 
  <p><br> <strong>提示：</strong></p> 
  <ol> 
   <li>给定树的节点数的范围是&nbsp;<code>[1, 1000]</code>。</li> 
   <li>每个节点的值都是 0。</li> 
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
    public int minCameraCover(TreeNode root) {
        
    }
}
```