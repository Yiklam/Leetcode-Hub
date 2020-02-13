# $428. [困难] 序列化和反序列化 N 叉树

**题目链接：**[https://leetcode-cn.com/problems/serialize-and-deserialize-n-ary-tree](https://leetcode-cn.com/problems/serialize-and-deserialize-n-ary-tree)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>序列化是指将一个数据结构转化为位序列的过程，因此可以将其存储在文件中或内存缓冲区中，以便稍后在相同或不同的计算机环境中恢复结构。</p> 
  <p>设计一个序列化和反序列化 N 叉树的算法。一个 N 叉树是指每个节点都有不超过 N 个孩子节点的有根树。序列化 / 反序列化算法的算法实现没有限制。你只需要保证 N 叉树可以被序列化为一个字符串并且该字符串可以被反序列化成原树结构即可。</p> 
  <p>例如，你需要序列化下面的 <code>3-叉</code> 树。</p> 
  <p>&nbsp;</p> 
  <p><img style="width: 250px;" src="/uploads/2018/10/12/narytreeexample.png"></p> 
  <p>&nbsp;</p> 
  <p>为&nbsp;<code>[1 [3[5 6] 2 4]]</code>。你不需要以这种形式完成，你可以自己创造和实现不同的方法。</p> 
  <p>&nbsp;</p> 
  <p><strong>注意：</strong></p> 
  <ol> 
   <li><code>N</code>&nbsp;的范围在 <code>[1, 1000]</code></li> 
   <li>不要使用类成员 / 全局变量 / 静态变量来存储状态。你的序列化和反序列化算法应是无状态的。</li> 
  </ol> 
 </div>
</div>

---

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Codec {

    // Encodes a tree to a single string.
    public String serialize(Node root) {
        
    }

    // Decodes your encoded data to tree.
    public Node deserialize(String data) {
        
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```