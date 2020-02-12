# 777. 在LR字符串中交换相邻字符

**题目链接：**[https://leetcode-cn.com/problems/swap-adjacent-in-lr-string](https://leetcode-cn.com/problems/swap-adjacent-in-lr-string)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>在一个由 <code>'L'</code> , <code>'R'</code> 和 <code>'X'</code> 三个字符组成的字符串（例如<code>"RXXLRXRXL"</code>）中进行移动操作。一次移动操作指用一个<code>"LX"</code>替换一个<code>"XL"</code>，或者用一个<code>"XR"</code>替换一个<code>"RX"</code>。现给定起始字符串<code>start</code>和结束字符串<code>end</code>，请编写代码，当且仅当存在一系列移动操作使得<code>start</code>可以转换成<code>end</code>时， 返回<code>True</code>。</p> 
  <p><strong>示例 :</strong></p> 
  <pre class="language-text"><strong>输入:</strong> start = "RXXLRXRXL", end = "XRLXXRRLX"
<strong>输出:</strong> True
<strong>解释:</strong>
我们可以通过以下几步将start转换成end:
RXXLRXRXL -&gt;
XRXLRXRXL -&gt;
XRLXRXRXL -&gt;
XRLXXRRXL -&gt;
XRLXXRRLX
</pre> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li><code>1 &lt;= len(start) = len(end) &lt;= 10000</code>。</li> 
   <li><code>start</code>和<code>end</code>中的字符串仅限于<code>'L'</code>, <code>'R'</code>和<code>'X'</code>。</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public boolean canTransform(String start, String end) {
        
    }
}
```