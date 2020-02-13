# 937. [简单] 重新排列日志文件

**题目链接：**[https://leetcode-cn.com/problems/reorder-data-in-log-files](https://leetcode-cn.com/problems/reorder-data-in-log-files)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>你有一个日志数组 <code>logs</code>。每条日志都是以空格分隔的字串。</p> 
  <p>对于每条日志，其第一个字为字母数字<em>标识符</em>。然后，要么：</p> 
  <ul> 
   <li>标识符后面的每个字将仅由小写字母组成，或；</li> 
   <li>标识符后面的每个字将仅由数字组成。</li> 
  </ul> 
  <p>我们将这两种日志分别称为字母日志和数字日志。保证每个日志在其标识符后面至少有一个字。</p> 
  <p>将日志重新排序，使得所有字母日志都排在数字日志之前。字母日志按内容字母顺序排序，忽略标识符；在内容相同时，按标识符排序。数字日志应该按原来的顺序排列。</p> 
  <p>返回日志的最终顺序。</p> 
  <p>&nbsp;</p> 
  <p><strong>示例 ：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
<strong>输出：</strong>["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>0 &lt;= logs.length &lt;= 100</code></li> 
   <li><code>3 &lt;= logs[i].length &lt;= 100</code></li> 
   <li><code>logs[i]</code>&nbsp;保证有一个标识符，并且标识符后面有一个字。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String[] reorderLogFiles(String[] logs) {
        
    }
}
```