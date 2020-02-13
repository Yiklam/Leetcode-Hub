# 838. [中等] 推多米诺

**题目链接：**[https://leetcode-cn.com/problems/push-dominoes](https://leetcode-cn.com/problems/push-dominoes)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>一行中有 <code>N</code> 张多米诺骨牌，我们将每张多米诺骨牌垂直竖立。</p> 
  <p>在开始时，我们同时把一些多米诺骨牌向左或向右推。</p> 
  <p><img style="height: 160px; width: 418px;" src="/aliyun-lc-upload/uploads/2018/05/19/domino.png" alt=""></p> 
  <p>每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。</p> 
  <p>同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。</p> 
  <p>如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡， 该骨牌仍然保持不变。</p> 
  <p>就这个问题而言，我们会认为正在下降的多米诺骨牌不会对其它正在下降或已经下降的多米诺骨牌施加额外的力。</p> 
  <p>给定表示初始状态的字符串 "S" 。如果第 i 张多米诺骨牌被推向左边，则 <code>S[i] = 'L'</code>；如果第 i 张多米诺骨牌被推向右边，则 <code>S[i] = 'R'</code>；如果第 i 张多米诺骨牌没有被推动，则 <code>S[i] = '.'</code>。</p> 
  <p>返回表示最终状态的字符串。</p> 
  <p><strong>示例 </strong><strong>1</strong><strong>：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>".L.R...LR..L.."
<strong>输出：</strong>"LL.RR.LLRRLL.."</pre> 
  <p><strong>示例 </strong><strong>2</strong><strong>：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>"RR.L"
<strong>输出：</strong>"RR.L"
<strong>说明：</strong>第一张多米诺骨牌没有给第二张施加额外的力。</pre> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li><code>0 &lt;= N &lt;= 10^5</code></li> 
   <li>表示多米诺骨牌状态的字符串只含有 <code>'L'</code>，<code>'R'</code>; 以及 <code>'.'</code>;</li> 
  </ol> 
 </div>
</div>

---

```java
class Solution {
    public String pushDominoes(String dominoes) {
        
    }
}
```