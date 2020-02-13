# 432. [困难] 全 O(1) 的数据结构

**题目链接：**[https://leetcode-cn.com/problems/all-oone-data-structure](https://leetcode-cn.com/problems/all-oone-data-structure)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>实现一个数据结构支持以下操作：</p> 
  <ol> 
   <li>Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。</li> 
   <li>Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否者使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。</li> 
   <li>GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串<code>""</code>。</li> 
   <li>GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串<code>""</code>。</li> 
  </ol> 
  <p>挑战：以 O(1) 的时间复杂度实现所有操作。</p> 
 </div>
</div>

---

```java
class AllOne {

    /** Initialize your data structure here. */
    public AllOne() {
        
    }
    
    /** Inserts a new key <Key> with value 1. Or increments an existing key by 1. */
    public void inc(String key) {
        
    }
    
    /** Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. */
    public void dec(String key) {
        
    }
    
    /** Returns one of the keys with maximal value. */
    public String getMaxKey() {
        
    }
    
    /** Returns one of the keys with Minimal value. */
    public String getMinKey() {
        
    }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * AllOne obj = new AllOne();
 * obj.inc(key);
 * obj.dec(key);
 * String param_3 = obj.getMaxKey();
 * String param_4 = obj.getMinKey();
 */
```