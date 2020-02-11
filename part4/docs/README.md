---
home: true
heroImage: /leetcode.jpg
heroText: Leetcode 题集
tagline: 安全、可信。 当前进度：1345/1354
actionText: 开始刷题 →
actionLink: http://gdut_yy.gitee.io/doc1-leetcode/001-100/leetcode_1_two-sum.html
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: 码不停题
    details: 全球极客挚爱的高质量技术成长平台，想要学习和提升专业能力从这里开始。
  - title: 探索
    details: 从接触一门新语言，到不断接受技术挑战；从学习一项新技能到攻破专业技术面试。
footer: Copyright © 2018-present gdut-yy
---

## 本地开发 & 阅读

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
