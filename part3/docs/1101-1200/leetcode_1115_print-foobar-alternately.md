# 1115. 交替打印FooBar

**题目链接：**[https://leetcode-cn.com/problems/print-foobar-alternately](https://leetcode-cn.com/problems/print-foobar-alternately)

---

<Cards card="leetcode_1115_print-foobar-alternately"></Cards>

---

```java
class FooBar {
    private int n;

    public FooBar(int n) {
        this.n = n;
    }

    public void foo(Runnable printFoo) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            
        	// printFoo.run() outputs "foo". Do not change or remove this line.
        	printFoo.run();
        }
    }

    public void bar(Runnable printBar) throws InterruptedException {
        
        for (int i = 0; i < n; i++) {
            
            // printBar.run() outputs "bar". Do not change or remove this line.
        	printBar.run();
        }
    }
}
```