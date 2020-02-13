# 639. [困难] 解码方法 2

**题目链接：**[https://leetcode-cn.com/problems/decode-ways-ii](https://leetcode-cn.com/problems/decode-ways-ii)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>一条包含字母&nbsp;<code>A-Z</code> 的消息通过以下的方式进行了编码：</p> 
  <pre class="language-text">'A' -&gt; 1
'B' -&gt; 2
...
'Z' -&gt; 26
</pre> 
  <p>除了上述的条件以外，现在加密字符串可以包含字符 '*'了，字符'*'可以被当做1到9当中的任意一个数字。</p> 
  <p>给定一条包含数字和字符'*'的加密信息，请确定解码方法的总数。</p> 
  <p>同时，由于结果值可能会相当的大，所以你应当对10<sup>9</sup>&nbsp;+ 7取模。（翻译者标注：此处取模主要是为了防止溢出）</p> 
  <p><strong>示例 1 :</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "*"
<strong>输出:</strong> 9
<strong>解释:</strong> 加密的信息可以被解密为: "A", "B", "C", "D", "E", "F", "G", "H", "I".
</pre> 
  <p><strong>示例 2 :</strong></p> 
  <pre class="language-text"><strong>输入:</strong> "1*"
<strong>输出:</strong> 9 + 9 = 18（翻译者标注：这里1*可以分解为1,* 或者当做1*来处理，所以结果是9+9=18）
</pre> 
  <p><strong>说明 :</strong></p> 
  <ol> 
   <li>输入的字符串长度范围是 [1, 10<sup>5</sup>]。</li> 
   <li>输入的字符串只会包含字符 '*' 和 数字'0' - '9'。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public int numDecodings(String s) {
        
    }
}
```