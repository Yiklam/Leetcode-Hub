# 981. [中等] 基于时间的键值存储

**题目链接：**[https://leetcode-cn.com/problems/time-based-key-value-store](https://leetcode-cn.com/problems/time-based-key-value-store)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>创建一个基于时间的键值存储类&nbsp;<code>TimeMap</code>，它支持下面两个操作：</p> 
  <p>1. <code>set(string key, string value, int timestamp)</code></p> 
  <ul> 
   <li>存储键&nbsp;<code>key</code>、值&nbsp;<code>value</code>，以及给定的时间戳&nbsp;<code>timestamp</code>。</li> 
  </ul> 
  <p>2. <code>get(string key, int timestamp)</code></p> 
  <ul> 
   <li>返回先前调用&nbsp;<code>set(key, value, timestamp_prev)</code>&nbsp;所存储的值，其中&nbsp;<code>timestamp_prev &lt;= timestamp</code>。</li> 
   <li>如果有多个这样的值，则返回对应最大的&nbsp;&nbsp;<code>timestamp_prev</code>&nbsp;的那个值。</li> 
   <li>如果没有值，则返回空字符串（<code>""</code>）。</li> 
  </ul> 
  <p>&nbsp;</p> 
  <p><strong>示例 1：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
<strong>输出：</strong>[null,null,"bar","bar",null,"bar2","bar2"]
<strong>解释：</strong>&nbsp; 
TimeMap kv; &nbsp; 
kv.set("foo", "bar", 1); // 存储键 "foo" 和值 "bar" 以及时间戳 timestamp = 1 &nbsp; 
kv.get("foo", 1);  // 输出 "bar" &nbsp; 
kv.get("foo", 3); // 输出 "bar" 因为在时间戳 3 和时间戳 2 处没有对应 "foo" 的值，所以唯一的值位于时间戳 1 处（即 "bar"） &nbsp; 
kv.set("foo", "bar2", 4); &nbsp; 
kv.get("foo", 4); // 输出 "bar2" &nbsp; 
kv.get("foo", 5); // 输出 "bar2" &nbsp; 

</pre> 
  <p><strong>示例 2：</strong></p> 
  <pre class="language-text"><strong>输入：</strong>inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
<strong>输出：</strong>[null,null,null,"","high","high","low","low"]
</pre> 
  <p>&nbsp;</p> 
  <p><strong>提示：</strong></p> 
  <ol> 
   <li>所有的键/值字符串都是小写的。</li> 
   <li>所有的键/值字符串长度都在&nbsp;<code>[1, 100]</code>&nbsp;范围内。</li> 
   <li>所有&nbsp;<code>TimeMap.set</code>&nbsp;操作中的时间戳&nbsp;<code>timestamps</code> 都是严格递增的。</li> 
   <li><code>1 &lt;= timestamp &lt;= 10^7</code></li> 
   <li><code>TimeMap.set</code> 和&nbsp;<code>TimeMap.get</code>&nbsp;函数在每个测试用例中将（组合）调用总计&nbsp;<code>120000</code> 次。</li> 
  </ol> 
 </div>
</div>

---

```java
class TimeMap {

    /** Initialize your data structure here. */
    public TimeMap() {
        
    }
    
    public void set(String key, String value, int timestamp) {
        
    }
    
    public String get(String key, int timestamp) {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
```