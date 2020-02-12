# $277. 搜寻名人

**题目链接：**[https://leetcode-cn.com/problems/find-the-celebrity](https://leetcode-cn.com/problems/find-the-celebrity)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>假设你是一个专业的狗仔，参加了一个&nbsp;<code>n</code>&nbsp;人派对，其中每个人被从&nbsp;<code>0</code>&nbsp;到&nbsp;<code>n - 1</code>&nbsp;标号。在这个派对人群当中可能存在一位&nbsp;“名人”。所谓 “名人” 的定义是：其他所有&nbsp;<code>n - 1</code>&nbsp;个人都认识他/她，而他/她并不认识其他任何人。</p> 
  <p>现在你想要确认这个 “名人” 是谁，或者确定这里没有&nbsp;“名人”。而你唯一能做的就是问诸如 “A&nbsp;你好呀，请问你认不认识&nbsp;B呀？”&nbsp;的问题，以确定 A 是否认识 B。你需要在（渐近意义上）尽可能少的问题内来确定这位 “名人” 是谁（或者确定这里没有 “名人”）。</p> 
  <p>在本题中，你可以使用辅助函数&nbsp;<code>bool knows(a, b)</code>&nbsp;获取到 A&nbsp;是否认识 B。请你来实现一个函数&nbsp;<code>int findCelebrity(n)</code>。</p> 
  <p>派对最多只会有一个 “名人” 参加。若&nbsp;“名人” 存在，请返回他/她的编号；若&nbsp;“名人”&nbsp;不存在，请返回&nbsp;<code>-1</code>。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 1:</strong></p> 
  <p><img style="height: 181px; width: 186px;" src="/uploads/2019/02/02/277_example_1_bold.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>graph = [
&nbsp; [1,1,0],
&nbsp; [0,1,0],
&nbsp; [1,1,1]
]
<strong>输出: </strong>1
<strong>解析: </strong>有编号分别为 0、1 和 2 的三个人。graph[i][j] = 1 代表编号为 i 的人认识编号为 j 的人，而 graph[i][j] = 0 则代表编号为 i 的人不认识编号为 j 的人。“名人” 是编号 1 的人，因为 0 和 2 均认识他/她，但 1 不认识任何人。
</pre> 
  <p><strong>示例&nbsp;2:</strong></p> 
  <p><img style="height: 192px; width: 193px;" src="/uploads/2019/02/02/277_example_2.PNG" alt=""></p> 
  <pre class="language-text"><strong>输入: </strong>graph = [
&nbsp; [1,0,1],
&nbsp; [1,1,0],
&nbsp; [0,1,1]
]
<strong>输出: </strong>-1
<strong>解析: 没有 “名人”</strong>
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>该有向图是以邻接矩阵的形式给出的，是一个&nbsp;<code>n ×&nbsp;n</code>&nbsp;的矩阵，&nbsp;<code>a[i][j] = 1</code>&nbsp;代表&nbsp;<code>i</code>&nbsp;与&nbsp;<code>j</code>&nbsp;认识，<code>a[i][j] = 0</code>&nbsp;则代表&nbsp;<code>i</code>&nbsp;与&nbsp;<code>j</code>&nbsp;不认识。</li> 
   <li>请记住，您是无法直接访问邻接矩阵的。</li> 
  </ol> 
 </div>
</div>

---

```java
/* The knows API is defined in the parent class Relation.
      boolean knows(int a, int b); */

public class Solution extends Relation {
    public int findCelebrity(int n) {
        
    }
}
```