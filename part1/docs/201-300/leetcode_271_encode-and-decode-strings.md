# $271. 字符串的编码与解码

**题目链接：**[https://leetcode-cn.com/problems/encode-and-decode-strings](https://leetcode-cn.com/problems/encode-and-decode-strings)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>请你设计一个算法，可以将一个&nbsp;<strong>字符串列表&nbsp;</strong>编码成为一个&nbsp;<strong>字符串</strong>。这个编码后的字符串是可以通过网络进行高效传送的，并且可以在接收端被解码回原来的字符串列表。</p> 
  <p>1 号机（发送方）有如下函数：</p> 
  <pre class="language-text">string encode(vector&lt;string&gt; strs) {
  // ... your code
  return encoded_string;
}</pre> 
  <p>2 号机（接收方）有如下函数：</p> 
  <pre class="language-text">vector&lt;string&gt; decode(string s) {
  //... your code
  return strs;
}
</pre> 
  <p>1 号机（发送方）执行：</p> 
  <pre class="language-text">string encoded_string = encode(strs);
</pre> 
  <p>2 号机（接收方）执行：</p> 
  <pre class="language-text">vector&lt;string&gt; strs2 = decode(encoded_string);
</pre> 
  <p>此时，2 号机（接收方）的 <code>strs2</code>&nbsp;需要和 1 号机（发送方）的 <code>strs</code> 相同。</p> 
  <p>请你来实现这个&nbsp;<code>encode</code> 和&nbsp;<code>decode</code> 方法。</p> 
  <p><strong>注意：</strong></p> 
  <ul> 
   <li>因为字符串可能会包含 256 个合法&nbsp;ascii 字符中的任何字符，所以您的算法必须要能够处理任何可能会出现的字符。</li> 
   <li>请勿使用 “类成员”、“全局变量” 或 “静态变量” 来存储这些状态，您的编码和解码算法应该是非状态依赖的。</li> 
   <li>请不要依赖任何方法库，例如 <code>eval</code>&nbsp;又或者是&nbsp;<code>serialize</code>&nbsp;之类的方法。本题的宗旨是需要您自己实现 “编码” 和 “解码” 算法。</li> 
  </ul> 
 </div>
</div>

---

```java
public class Codec {

    // Encodes a list of strings to a single string.
    public String encode(List<String> strs) {
        
    }

    // Decodes a single string to a list of strings.
    public List<String> decode(String s) {
        
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(strs));
```