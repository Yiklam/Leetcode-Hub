# 面试题 03.01. [中等] 三合一

**题目链接：**[https://leetcode-cn.com/problems/triple-in-one-lcci](https://leetcode-cn.com/problems/triple-in-one-lcci)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>三合一。描述如何只用一个数组来实现三个栈。</p> 
  <p>你应该实现<code>push(stackNum, value)</code>、<code>pop(stackNum)</code>、<code>isEmpty(stackNum)</code>、<code>peek(stackNum)</code>方法。<code>stackNum</code>表示栈下标，<code>value</code>表示压入的值。</p> 
  <p>构造函数会传入一个<code>stackSize</code>参数，代表每个栈的大小。</p> 
  <p><strong>示例1:</strong></p> 
  <pre class="language-text"><strong> 输入</strong>：
["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
[[1], [0, 1], [0, 2], [0], [0], [0], [0]]
<strong> 输出</strong>：
[null, null, null, 1, -1, -1, true]
<strong>说明</strong>：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
</pre> 
  <p><strong>示例2:</strong></p> 
  <pre class="language-text"><strong> 输入</strong>：
["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
<strong> 输出</strong>：
[null, null, null, null, 2, 1, -1, -1]
</pre> 
 </div>
</div>

---

```

```