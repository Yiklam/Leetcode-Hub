# $161. 相隔为 1 的编辑距离

**题目链接：**[https://leetcode-cn.com/problems/one-edit-distance](https://leetcode-cn.com/problems/one-edit-distance)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>给定两个字符串&nbsp;<strong><em>s </em></strong>和<strong><em> t</em></strong>，判断他们的编辑距离是否为 1。</p> 
  <p><strong>注意：</strong></p> 
  <p>满足编辑距离等于 1 有三种可能的情形：</p> 
  <ol> 
   <li>往 <em><strong>s</strong></em>&nbsp;中插入一个字符得到 <em><strong>t</strong></em></li> 
   <li>从<em><strong> s</strong></em>&nbsp;中删除一个字符得到 <em><strong>t</strong></em></li> 
   <li>在 <em><strong>s</strong></em>&nbsp;中替换一个字符得到 <em><strong>t</strong></em></li> 
  </ol> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入: </strong><strong><em>s</em></strong> = "ab", <strong><em>t</em></strong> = "acb"
<strong>输出: </strong>true
<strong>解释: </strong>可以将 'c' 插入字符串 <strong><em>s</em></strong>&nbsp;来得到 <em><strong>t</strong></em>。
</pre> 
  <p><strong>示例 2:</strong></p> 
  <pre class="language-text"><strong>输入: </strong><strong><em>s</em></strong> = "cab", <strong><em>t</em></strong> = "ad"
<strong>输出: </strong>false
<strong>解释: </strong>无法通过 1 步操作使 <em><strong>s</strong></em> 变为 <em><strong>t</strong></em>。</pre> 
  <p><strong>示例 3:</strong></p> 
  <pre class="language-text"><strong>输入: <em>s</em></strong> = "1203", <strong><em>t</em></strong> = "1213"
<strong>输出: </strong>true
<strong>解释: </strong>可以将字符串 <strong><em>s</em></strong>&nbsp;中的 '0' 替换为 '1' 来得到 <em><strong>t</strong></em>。</pre> 
 </div>
</div>

---

```java
class Solution {
    public boolean isOneEditDistance(String s, String t) {
        
    }
}
```