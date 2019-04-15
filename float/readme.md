## 清除浮动的五种方法
1. 在父元素底部加上一行代码
    <div style="clear: both"></div>

2. 在父元素css上也加上浮动
    不推荐使用。

3. 使用css中的伪类after，给父元素div添加一个clearFix的class类
    .clearFix::after {
      content: "";
      clear: both;
      display: block;
    }

4. 利用BFC简称(块级格式化上下文) 的效果来弥补父容器的高度塌陷
    overflow: hidden;
    overflow: auto;
    overflow: scroll;

5. 尼古拉斯大师 方法，把父容器的display设置为table, 可以创建一个匿名表格单元，直接触发BFC效果
    display: table;
    不推荐使用此方法。