# $642. [困难] 设计搜索自动补全系统

**题目链接：**[https://leetcode-cn.com/problems/design-search-autocomplete-system](https://leetcode-cn.com/problems/design-search-autocomplete-system)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>为搜索引擎设计一个搜索自动补全系统。用户会输入一条语句（最少包含一个字母，以特殊字符 <code>'#'</code> 结尾）。除 '#' 以外用户输入的每个字符，返回历史中热度前三并以当前输入部分为前缀的句子。下面是详细规则：</p> 
  <ol> 
   <li>一条句子的热度定义为历史上用户输入这个句子的总次数。</li> 
   <li>返回前三的句子需要按照热度从高到低排序（第一个是最热门的）。如果有多条热度相同的句子，请按照 ASCII 码的顺序输出（ASCII 码越小排名越前）。</li> 
   <li>如果满足条件的句子个数少于 3，将它们全部输出。</li> 
   <li>如果输入了特殊字符，意味着句子结束了，请返回一个空集合。</li> 
  </ol> 
  <p>你的工作是实现以下功能：</p> 
  <p>构造函数：</p> 
  <p><code>AutocompleteSystem(String[] sentences, int[] times):</code>&nbsp;这是构造函数，输入的是<code>历史数据</code>。&nbsp;<code>Sentences</code>&nbsp;是之前输入过的所有句子，<code>Times</code>&nbsp;是每条句子输入的次数，你的系统需要记录这些历史信息。</p> 
  <p>现在，用户输入一条新的句子，下面的函数会提供用户输入的下一个字符：</p> 
  <p><code>List&lt;String&gt; input(char c):</code>&nbsp;其中&nbsp;<code>c</code>&nbsp;是用户输入的下一个字符。字符只会是小写英文字母（<code>'a' </code>到<code> 'z' </code>），空格（<code>' '</code>）和特殊字符（<code>'#'</code>）。输出历史热度前三的具有相同前缀的句子。</p> 
  <p>&nbsp;</p> 
  <p><strong>样例 ：</strong><br> <strong>操作 ：&nbsp;</strong>AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])<br> 系统记录下所有的句子和出现的次数：<br> <code>"i love you"</code> : <code>5</code>&nbsp;次<br> <code>"island"</code> : <code>3</code>&nbsp;次<br> <code>"ironman"</code> : <code>2</code>&nbsp;次<br> <code>"i love leetcode"</code> : <code>2</code>&nbsp;次<br> 现在，用户开始新的键入：</p> 
  <p><br> <strong>输入 ：</strong>&nbsp;input('i')<br> <strong>输出 ：</strong>&nbsp;["i love you", "island","i love leetcode"]<br> <strong>解释 ：</strong><br> 有四个句子含有前缀 <code>"i"</code>。其中&nbsp;"ironman" 和 "i love leetcode" 有相同的热度，由于&nbsp;<code>' '</code> 的 ASCII 码是 32 而&nbsp;<code>'r'</code>&nbsp;的 ASCII 码是&nbsp;114，所以&nbsp;"i love leetcode" 在 "ironman" 前面。同时我们只输出前三的句子，所以 "ironman" 被舍弃。<br> <br> <strong>输入 ：</strong>&nbsp;input(' ')<br> <strong>输出 ：</strong>&nbsp;["i love you","i love leetcode"]<br> <strong>解释:</strong><br> 只有两个句子含有前缀&nbsp;<code>"i "</code>。<br> <br> <strong>输入 ：</strong>&nbsp;input('a')<br> <strong>输出 ：</strong> []<br> <strong>解释 ：</strong><br> 没有句子有前缀&nbsp;<code>"i a"</code>。<br> <br> <strong>输入 ：</strong>&nbsp;input('#')<br> <strong>输出 ：</strong> []<br> <strong>解释 ：</strong></p> 
  <p>用户输入结束，<code>"i a"</code>&nbsp;被存到系统中，后面的输入被认为是下一次搜索。</p> 
  <p>&nbsp;</p> 
  <p><strong>注释 ：</strong></p> 
  <ol> 
   <li>输入的句子以字母开头，以 '#' 结尾，两个字母之间最多只会出现一个空格。</li> 
   <li>即将搜索的句子总数不会超过 100。每条句子的长度（包括已经搜索的和即将搜索的）也不会超过 100。</li> 
   <li>即使只有一个字母，输出的时候请使用双引号而不是单引号。</li> 
   <li>请记住<strong>清零</strong>&nbsp;AutocompleteSystem 类中的变量，因为静态变量、类变量会在多组测试数据中保存之前结果。详情请看<a href="http://leetcode.com/faq/#different-output">这里</a>。</li> 
  </ol> 
  <p>&nbsp;</p> 
 </div>
</div>

---

```java
class AutocompleteSystem {

    public AutocompleteSystem(String[] sentences, int[] times) {
        
    }
    
    public List<String> input(char c) {
        
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * AutocompleteSystem obj = new AutocompleteSystem(sentences, times);
 * List<String> param_1 = obj.input(c);
 */
```