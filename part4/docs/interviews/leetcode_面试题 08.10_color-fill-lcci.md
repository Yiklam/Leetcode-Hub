# 面试题 08.10. [简单] 颜色填充

**题目链接：**[https://leetcode-cn.com/problems/color-fill-lcci](https://leetcode-cn.com/problems/color-fill-lcci)

---

<div class="content__1Y2H">
 <div class="notranslate">
  <p>颜色填充。编写函数，实现许多图片编辑软件都支持的“颜色填充”功能。给定一个屏幕（以二维数组表示，元素为颜色值）、一个点和一个新的颜色值，将新颜色值填入这个点的周围区域，直到原来的颜色值全都改变。</p> 
  <p> <strong>示例1:</strong></p> 
  <pre class="language-text"><strong> 输入</strong>：
image = [[1,1,1],[1,1,0],[1,0,1]] 
sr = 1, sc = 1, newColor = 2
<strong> 输出</strong>：[[2,2,2],[2,2,0],[2,0,1]]
<strong> 解释</strong>: 
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
</pre> 
  <p> <strong>说明：</strong></p> 
  <ol> 
   <li>image 和&nbsp;image[0]&nbsp;的长度在范围&nbsp;[1, 50] 内。</li> 
   <li>给出的初始点将满足&nbsp;0 &lt;= sr &lt; image.length 和&nbsp;0 &lt;= sc &lt; image[0].length。</li> 
   <li>image[i][j] 和&nbsp;newColor&nbsp;表示的颜色值在范围&nbsp;[0, 65535]内。</li> 
  </ol> 
 </div>
</div>

---

```

```