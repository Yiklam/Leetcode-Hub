# $716. [简单] 最大栈

**题目链接：**[https://leetcode-cn.com/problems/max-stack](https://leetcode-cn.com/problems/max-stack)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>设计一个最大栈，支持 push、pop、top、peekMax 和 popMax 操作。</p> 
  <p>&nbsp;</p> 
  <ol> 
   <li>push(x) -- 将元素 x 压入栈中。</li> 
   <li>pop() -- 移除栈顶元素并返回这个值。</li> 
   <li>top() -- 返回栈顶元素。</li> 
   <li>peekMax() -- 返回栈中最大元素。</li> 
   <li>popMax() -- 返回栈中最大的元素，并将其删除。如果有多个最大元素，只要删除最靠近栈顶的那个。</li> 
  </ol> 
  <p>&nbsp;</p> 
  <p><strong>样例 1:</strong></p> 
  <pre class="language-text">MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -&gt; 5
stack.popMax(); -&gt; 5
stack.top(); -&gt; 1
stack.peekMax(); -&gt; 5
stack.pop(); -&gt; 1
stack.top(); -&gt; 5
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注释:</strong></p> 
  <ol> 
   <li>-1e7 &lt;= x &lt;= 1e7</li> 
   <li>操作次数不会超过 10000。</li> 
   <li>当栈为空的时候不会出现后四个操作。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class MaxStack {

    /** initialize your data structure here. */
    public MaxStack() {
        
    }
    
    public void push(int x) {
        
    }
    
    public int pop() {
        
    }
    
    public int top() {
        
    }
    
    public int peekMax() {
        
    }
    
    public int popMax() {
        
    }
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
 */
```