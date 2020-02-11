# Leetcode-Hub

Leetcode 题解 In Java。

在线阅读：[http://gdut_yy.gitee.io/doc1-leetcode/](http://gdut_yy.gitee.io/doc1-leetcode/)

![](./part1/docs/.vuepress/public/leetcode.jpg)

## 介绍

世界上并没有完美的程序，但我们并不因此而沮丧，因为写程序本来就是一个不断追求完美的过程。

## 静态资源仓库（GITEE.COM）

- [https://gitee.com/gdut_yy/aliyun-lc-upload](https://gitee.com/gdut_yy/aliyun-lc-upload)
- [https://gitee.com/gdut_yy/uploads](https://gitee.com/gdut_yy/uploads)
- [https://gitee.com/gdut_yy/wikipedia](https://gitee.com/gdut_yy/wikipedia)

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

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://gdut-yy.github.io/"><img src="https://avatars2.githubusercontent.com/u/33390928?s=460&v=4" width="100px;" /><br /><sub><b>gdut-yy</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/OpenSample"><img src="https://avatars3.githubusercontent.com/u/42914174?s=460&v=4" width="100px;" /><br /><sub><b>OpenSample</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/RxGirlz"><img src="https://avatars3.githubusercontent.com/u/51844789?s=460&v=4" width="100px;" /><br /><sub><b>RxGirlz</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/RxSQL"><img src="https://avatars2.githubusercontent.com/u/51400106?s=460&v=4" width="100px;" /><br /><sub><b>Nezha</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/MerchantOnline"><img src="https://avatars2.githubusercontent.com/u/51402172?s=460&v=4" width="100px;" /><br /><sub><b>MerchantOnline</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/csstdg4"><img src="https://avatars0.githubusercontent.com/u/57406972?s=460&v=4" width="100px;" /><br /><sub><b>huangmei</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/GeoQuiz-dev"><img src="https://avatars1.githubusercontent.com/u/47241483?s=460&v=4" width="100px;" /><br /><sub><b>GeoQuiz-dev</b></sub></a><br /></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/OpenJoinpay"><img src="https://avatars1.githubusercontent.com/u/57326067?s=460&v=4" width="100px;" /><br /><sub><b>Sahar</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Rxboyz"><img src="https://avatars0.githubusercontent.com/u/59510390?s=460&v=4" width="100px;" /><br /><sub><b>PeachA</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/OpenLuban"><img src="https://avatars0.githubusercontent.com/u/57326671?s=460&v=4" width="100px;" /><br /><sub><b>Ujia</b></sub></a><br /></td>
  </tr>
</table>

## License

[MIT](https://github.com/gdut-yy/Leetcode-Hub/blob/master/LICENSE)
