# 676. [中等] 实现一个魔法字典

**题目链接：**[https://leetcode-cn.com/problems/implement-magic-dictionary](https://leetcode-cn.com/problems/implement-magic-dictionary)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>实现一个带有<code>buildDict</code>, 以及&nbsp;<code>search</code>方法的魔法字典。</p> 
  <p>对于<code>buildDict</code>方法，你将被给定一串不重复的单词来构建一个字典。</p> 
  <p>对于<code>search</code>方法，你将被给定一个单词，并且判定能否只将这个单词中<strong>一个</strong>字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。</p> 
  <p><strong>示例 1:</strong></p> 
  <pre class="language-text">Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
</pre> 
  <p><strong>注意:</strong></p> 
  <ol> 
   <li>你可以假设所有输入都是小写字母&nbsp;<code>a-z</code>。</li> 
   <li>为了便于竞赛，测试所用的数据量很小。你可以在竞赛结束后，考虑更高效的算法。</li> 
   <li>请记住<strong>重置</strong>MagicDictionary类中声明的类变量，因为静态/类变量会在多个测试用例中保留。 请参阅<a href="http://leetcode.com/faq/#different-output">这里</a>了解更多详情。</li> 
  </ol> 
 </div>
</div>

---

```java
class MagicDictionary {

    /** Initialize your data structure here. */
    public MagicDictionary() {
        
    }
    
    /** Build a dictionary through a list of words */
    public void buildDict(String[] dict) {
        
    }
    
    /** Returns if there is any word in the trie that equals to the given word after modifying exactly one character */
    public boolean search(String word) {
        
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * MagicDictionary obj = new MagicDictionary();
 * obj.buildDict(dict);
 * boolean param_2 = obj.search(word);
 */
```