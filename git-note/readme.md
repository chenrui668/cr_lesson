# git rebase 
    让我们的提交记录更干净，因为有很多人一起开发

    git checkout -b branch1 创建分支branch1

    git checkout master 切换回主分支

    在branch1下:
    git rebase master 更改基点为主分支(master)最新版本

    在master下:
    git merge branch1 将branch1分支融合到主分支

    git log --oneline --graph 以图形且一行的形式查看版本更新记录 


# git reflog
    git 小白的代码在哪里

    hash码
    git reset --hard 回滚 
    feature-2 -> feature-6 丢失了

    此时又更新版本
    git add feature-7.md
    git commit -m "add feature-7.md"

    需要回到回滚前的版本并加上新版本的feature-7.md

    git reflog 查看所有修改的版本号（包括回滚版本号）
    
    先用：
    git reset --hard 版本号 回到回滚前的版本
    再用：
    git cherry-pick 版本号 加上feature-7.md