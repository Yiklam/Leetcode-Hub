# $510. 二叉搜索树中的中序后继 II

**题目链接：**[https://leetcode-cn.com/problems/inorder-successor-in-bst-ii](https://leetcode-cn.com/problems/inorder-successor-in-bst-ii)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一棵二叉搜索树和其中的一个节点，找到该节点在树中的中序后继。</p> 
  <p>一个结点&nbsp;<code>p</code>&nbsp;的中序后继是键值比&nbsp;<code>p.val</code>大所有的结点中键值最小的那个。</p> 
  <p>你可以直接访问结点，但无法直接访问树。每个节点都会有其父节点的引用。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1:</strong></p> 
  <p><img style="height: 117px; width: 122px;" src="../uploads/2019/01/23/285_example_1.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>
root = {"$id":"1","left":{"$id":"2","left":null,"parent":{"$ref":"1"},"right":null,"val":1},"parent":null,"right":{"$id":"3","left":null,"parent":{"$ref":"1"},"right":null,"val":3},"val":2}
p = 1
<strong>输出: </strong>2
<strong>解析: </strong>1的中序后继结点是2。注意p和返回值都是Node类型的。
</pre> 
  <p><strong>示例 2:</strong></p> 
  <p><img style="height: 229px; width: 246px;" src="../uploads/2019/01/23/285_example_2.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":1},"parent":{"$ref":"2"},"right":null,"val":2},"parent":{"$ref":"1"},"right":{"$id":"5","left":null,"parent":{"$ref":"2"},"right":null,"val":4},"val":3},"parent":null,"right":{"$id":"6","left":null,"parent":{"$ref":"1"},"right":null,"val":6},"val":5}
p = 6
<strong>输出: </strong>null
<strong>解析: </strong>该结点没有中序后继，因此返回<code>null。</code>
</pre> 
  <p><strong>示例&nbsp;3:</strong></p> 
  <p><img style="height: 335px; width: 438px;" src="../uploads/2019/02/02/285_example_34.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}
p = 15
<strong>输出: </strong>17
</pre> 
  <p><strong>示例&nbsp;4:</strong></p> 
  <p><img style="height: 335px; width: 438px;" src="../uploads/2019/02/02/285_example_34.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>
root = {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"parent":{"$ref":"3"},"right":null,"val":2},"parent":{"$ref":"2"},"right":{"$id":"5","left":null,"parent":{"$ref":"3"},"right":null,"val":4},"val":3},"parent":{"$ref":"1"},"right":{"$id":"6","left":null,"parent":{"$ref":"2"},"right":{"$id":"7","left":{"$id":"8","left":null,"parent":{"$ref":"7"},"right":null,"val":9},"parent":{"$ref":"6"},"right":null,"val":13},"val":7},"val":6},"parent":null,"right":{"$id":"9","left":{"$id":"10","left":null,"parent":{"$ref":"9"},"right":null,"val":17},"parent":{"$ref":"1"},"right":{"$id":"11","left":null,"parent":{"$ref":"9"},"right":null,"val":20},"val":18},"val":15}
p = 13
<strong>输出: </strong>15
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>如果给定结点不存在中序后继，返回<code>null</code>。</li> 
   <li>树中各结点的值均保证唯一。</li> 
   <li><code>&lt;font color="#333333" face="Helvetica Neue, Helvetica, Arial, sans-serif"&gt;<span style="">注意我们使用的是</span>&lt;/font&gt;Node</code>类型而不是<code>TreeNode</code>类型，它们的字符串表示不一样。</li> 
  </ol> 
  <p>&nbsp;</p> 
  <p><strong>延伸:</strong></p> 
  <p>你能否在不访问任何结点的值的情况下解决问题?</p> 
 </div>
</div>

---

**AC 代码：**

```java

```