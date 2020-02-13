# 721. [中等] 账户合并

**题目链接：**[https://leetcode-cn.com/problems/accounts-merge](https://leetcode-cn.com/problems/accounts-merge)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定一个列表 <code>accounts</code>，每个元素 <code>accounts[i]</code>&nbsp;是一个字符串列表，其中第一个元素 <code>accounts[i][0]</code>&nbsp;是&nbsp;<em>名称 (name)</em>，其余元素是 <em>emails </em>表示该帐户的邮箱地址。</p> 
  <p>现在，我们想合并这些帐户。如果两个帐户都有一些共同的邮件地址，则两个帐户必定属于同一个人。请注意，即使两个帐户具有相同的名称，它们也可能属于不同的人，因为人们可能具有相同的名称。一个人最初可以拥有任意数量的帐户，但其所有帐户都具有相同的名称。</p> 
  <p>合并帐户后，按以下格式返回帐户：每个帐户的第一个元素是名称，其余元素是按顺序排列的邮箱地址。accounts 本身可以以任意顺序返回。</p> 
  <p><strong>例子 1:</strong></p> 
  <pre class="language-text"><strong>Input:</strong> 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
<strong>Output:</strong> [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
<strong>Explanation:</strong> 
  第一个和第三个 John 是同一个人，因为他们有共同的电子邮件 "johnsmith@mail.com"。 
  第二个 John 和 Mary 是不同的人，因为他们的电子邮件地址没有被其他帐户使用。
  我们可以以任何顺序返回这些列表，例如答案[['Mary'，'mary@mail.com']，['John'，'johnnybravo@mail.com']，
  ['John'，'john00@mail.com'，'john_newyork@mail.com'，'johnsmith@mail.com']]仍然会被接受。

</pre> 
  <p><strong>注意：</strong></p> 
  <ul> 
   <li><code>accounts</code>的长度将在<code>[1，1000]</code>的范围内。</li> 
   <li><code>accounts[i]</code>的长度将在<code>[1，10]</code>的范围内。</li> 
   <li><code>accounts[i][j]</code>的长度将在<code>[1，30]</code>的范围内。</li> 
  </ul> 
 </div>
</div>

---

```java
class Solution {
    public List<List<String>> accountsMerge(List<List<String>> accounts) {
        
    }
}
```