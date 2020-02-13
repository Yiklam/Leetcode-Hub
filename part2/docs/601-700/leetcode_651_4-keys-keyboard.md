# $651. [中等] 4键键盘

**题目链接：**[https://leetcode-cn.com/problems/4-keys-keyboard](https://leetcode-cn.com/problems/4-keys-keyboard)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>假设你有一个特殊的键盘包含下面的按键：</p> 
  <p><code>Key 1: (A)</code>：在屏幕上打印一个 'A'。</p> 
  <p><code>Key 2: (Ctrl-A)</code>：选中整个屏幕。</p> 
  <p><code>Key 3: (Ctrl-C)</code>：复制选中区域到缓冲区。</p> 
  <p><code>Key 4: (Ctrl-V)</code>：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。</p> 
  <p>现在，你只可以按键 <strong>N</strong> 次（使用上述四种按键），请问屏幕上最多可以显示几个 'A'呢？</p> 
  <p><strong>样例 1:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> N = 3
<strong>输出:</strong> 3
<strong>解释:</strong> 
我们最多可以在屏幕上显示三个'A'通过如下顺序按键：
A, A, A
</pre> 
  <p>&nbsp;</p> 
  <p><strong>样例 2:</strong></p> 
  <pre class="language-text"><strong>输入:</strong> N = 7
<strong>输出:</strong> 9
<strong>解释:</strong> 
我们最多可以在屏幕上显示九个'A'通过如下顺序按键：
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
</pre> 
  <p>&nbsp;</p> 
  <p><strong>注释:</strong></p> 
  <ol> 
   <li>1 &lt;= N &lt;= 50</li> 
   <li>结果不会超过 32 位有符号整数范围。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class Solution {
    public int maxA(int N) {
        
    }
}
```