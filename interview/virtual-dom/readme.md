- vue react mvvm
    不去做DOM这一非常耗费性能的事
    不用去直接操作DOM， 操作data... 将mvvm的修改 (DOM片断) 更新到页面上去。
    SPA -> PWA  Application 性能特别好

    DOM 树
    ComponentA  render(JSX) replaceChild()  -> DOM树
    性能 ？ 组件对应的树， 遍历
        Tag  node
        属性发生了改变 style
        文本改变  innerText
        append   li*n
        childTag


        oldState   oldTree
        newState  newTree? virtual DOM
        最后一站 DOM 树
        oldState  DOM树的  描述  JS版本的DOM树

        DOM 树， 内存中有JS Virtual DOM

- elementObj  => 新的virtualDOM
    diff  补丁 补到DOM上

- 先序深度优先遍历
- patches []  dom  diff
- 给DOM打补丁