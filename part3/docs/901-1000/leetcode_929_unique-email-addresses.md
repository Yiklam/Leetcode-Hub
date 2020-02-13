# 929. [简单] 独特的电子邮件地址

**题目链接：**[https://leetcode-cn.com/problems/unique-email-addresses](https://leetcode-cn.com/problems/unique-email-addresses)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>每封电子邮件都由一个本地名称和一个域名组成，以 @ 符号分隔。</p> 
  <p>例如，在&nbsp;<code>alice@leetcode.com</code>中，&nbsp;<code>alice</code>&nbsp;是本地名称，而&nbsp;<code>leetcode.com</code>&nbsp;是域名。</p> 
  <p>除了小写字母，这些电子邮件还可能包含 <code>'.'</code> 或 <code>'+'</code>。</p> 
  <p>如果在电子邮件地址的<strong>本地名称</strong>部分中的某些字符之间添加句点（<code>'.'</code>），则发往那里的邮件将会转发到本地名称中没有点的同一地址。例如，<code>"alice.z@leetcode.com”</code> 和 <code>“alicez@leetcode.com”</code>&nbsp;会转发到同一电子邮件地址。 （请注意，此规则不适用于域名。）</p> 
  <p>如果在<strong>本地名称</strong>中添加加号（<code>'+'</code>），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件，例如 <code>m.y+name@email.com</code> 将转发到 <code>my@email.com</code>。 （同样，此规则不适用于域名。）</p> 
  <p>可以同时使用这两个规则。</p> 
  <p>给定电子邮件列表 <code>emails</code>，我们会向列表中的每个地址发送一封电子邮件。实际收到邮件的不同地址有多少？</p> 
  <p>&nbsp;</p> 
  <p><strong>示例：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
<strong>输出：</strong>2
<strong>解释：</strong>实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ul> 
   <li><code>1 &lt;= emails[i].length&nbsp;&lt;= 100</code></li> 
   <li><code>1 &lt;= emails.length &lt;= 100</code></li> 
   <li>每封 <code>emails[i]</code> 都包含有且仅有一个 <code>'@'</code> 字符。</li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public int numUniqueEmails(String[] emails) {
        
    }
}
```