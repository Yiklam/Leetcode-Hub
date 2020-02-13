# 478. [中等] 在圆内随机生成点

**题目链接：**[https://leetcode-cn.com/problems/generate-random-point-in-a-circle](https://leetcode-cn.com/problems/generate-random-point-in-a-circle)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定圆的半径和圆心的 x、y 坐标，写一个在圆中产生均匀随机点的函数&nbsp;<code>randPoint</code>&nbsp;。</p> 
  <p>说明:</p> 
  <ol> 
   <li>输入值和输出值都将是<a href="https://baike.baidu.com/item/%E6%B5%AE%E7%82%B9%E6%95%B0/6162520">浮点数</a>。</li> 
   <li>圆的半径和圆心的 x、y 坐标将作为参数传递给类的构造函数。</li> 
   <li>圆周上的点也认为是在圆中。</li> 
   <li><code>randPoint</code>&nbsp;返回一个包含随机点的x坐标和y坐标的大小为2的数组。</li> 
  </ol> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入: 
</strong>["Solution","randPoint","randPoint","randPoint"]
[[1,0,0],[],[],[]]
<strong>输出: </strong>[null,[-0.72939,-0.65505],[-0.78502,-0.28626],[-0.83119,-0.19803]]
</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入: 
</strong>["Solution","randPoint","randPoint","randPoint"]
[[10,5,-7.5],[],[],[]]
<strong>输出: </strong>[null,[11.52438,-8.33273],[2.46992,-16.21705],[11.13430,-12.42337]]</pre> 
  <p><strong>输入语法说明：</strong></p> 
  <p>输入是两个列表：调用成员函数名和调用的参数。<code>Solution</code>&nbsp;的构造函数有三个参数，圆的半径、圆心的 x 坐标、圆心的 y 坐标。<code>randPoint</code>&nbsp;没有参数。输入参数是一个列表，即使参数为空，也会输入一个 [] 空列表。</p> 
 </div>
</div>

---

```java
class Solution {

    public Solution(double radius, double x_center, double y_center) {
        
    }
    
    public double[] randPoint() {
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(radius, x_center, y_center);
 * double[] param_1 = obj.randPoint();
 */
```