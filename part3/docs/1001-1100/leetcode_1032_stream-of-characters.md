# 1032. [困难] 字符流

**题目链接：**[https://leetcode-cn.com/problems/stream-of-characters](https://leetcode-cn.com/problems/stream-of-characters)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>按下述要求实现 <code>StreamChecker</code> 类：</p> 
  <ul> 
   <li><code>StreamChecker(words)</code>：构造函数，用给定的字词初始化数据结构。</li> 
   <li><code>query(letter)</code>：如果存在某些 <code>k &gt;= 1</code>，可以用查询的最后 <code>k</code>个字符（按从旧到新顺序，包括刚刚查询的字母）拼写出给定字词表中的某一字词时，返回 <code>true</code>。否则，返回 <code>false</code>。</li> 
  </ul> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text">StreamChecker streamChecker = new StreamChecker(["cd","f","kl"]); // 初始化字典
streamChecker.query('a');          // 返回 false
streamChecker.query('b');          // 返回 false
streamChecker.query('c');          // 返回 false
streamChecker.query('d');          // 返回 true，因为 'cd' 在字词表中
streamChecker.query('e');          // 返回 false
streamChecker.query('f');          // 返回 true，因为 'f' 在字词表中
streamChecker.query('g');          // 返回 false
streamChecker.query('h');          // 返回 false
streamChecker.query('i');          // 返回 false
streamChecker.query('j');          // 返回 false
streamChecker.query('k');          // 返回 false
streamChecker.query('l');          // 返回 true，因为 'kl' 在字词表中。</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= words.length &lt;= 2000</code></li> 
   <li><code>1 &lt;= words[i].length &lt;= 2000</code></li> 
   <li>字词只包含小写英文字母。</li> 
   <li>待查项只包含小写英文字母。</li> 
   <li>待查项最多 40000 个。</li> 
  </ul> 
 </div>
</div>

---

```java
class StreamChecker {

    public StreamChecker(String[] words) {
        
    }
    
    public boolean query(char letter) {
        
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * StreamChecker obj = new StreamChecker(words);
 * boolean param_1 = obj.query(letter);
 */
```