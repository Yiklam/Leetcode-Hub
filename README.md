# Leetcode-Hub

Leetcode 题解 In Java。

在线阅读：[http://gdut_yy.gitee.io/doc1-leetcode/](http://gdut_yy.gitee.io/doc1-leetcode/)

![](./part1/docs/.vuepress/public/leetcode.jpg)

## 介绍

世界上并没有完美的程序，但我们并不因此而沮丧，因为写程序本来就是一个不断追求完美的过程。

## 本地开发 & 阅读

本项目基于 vuepress 进行开发，以提供比 github mardown 更佳的阅读体验

依赖于 `node.js`、`yarn`、`vuepress` 等环境

```sh
# 全局安装 vuepress
yarn global add vuepress

# 克隆仓库
git clone https://github.com/gdut-yy/Leetcode-Hub.git
cd Leetcode-Hub/
mkdir assets/
cd assets/
git clone https://gitee.com/gdut_yy/aliyun-lc-upload.git
git clone https://gitee.com/gdut_yy/uploads.git
git clone https://gitee.com/gdut_yy/wikipedia.git

# 复制文件到目录
cp -r . ../part1/docs/.vuepress/public/
cp -r . ../part2/docs/.vuepress/public/
cp -r . ../part3/docs/.vuepress/public/
cp -r . ../part4/docs/.vuepress/public/

# 本地编译开发（以 part 1 为例）
cd ../part1/
yarn docs:dev
```

## License

[MIT](https://github.com/gdut-yy/Leetcode-Hub/blob/master/LICENSE)
