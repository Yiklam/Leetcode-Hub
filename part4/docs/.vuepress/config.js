// .vuepress/config.js
module.exports = {
  title: "Leetcode 题解",
  base: "/doc4-leetcode/",
  themeConfig: {
    repo: "gdut-yy/leetcode-hub",
    repoLabel: "Github",
    docsRepo: "gdut-yy/leetcode-hub",
    docsBranch: "master/part4/docs",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    lastUpdated: "Last Updated",
    sidebarDepth: 4,
    nav: getNav(),
    sidebar: getSidebar()
  },
  evergreen: true
};

function getNav() {
  return [
    {
      text: "001-400",
      link:
        "http://gdut_yy.gitee.io/doc1-leetcode/001-100/leetcode_1_two-sum.html"
    },
    {
      text: "401-800",
      link:
        "http://gdut_yy.gitee.io/doc2-leetcode/401-500/leetcode_401_binary-watch.html"
    },
    {
      text: "801-1200",
      link:
        "http://gdut_yy.gitee.io/doc3-leetcode/801-900/leetcode_801_minimum-swaps-to-make-sequences-increasing.html"
    },
    {
      text: "1201-1600",
      link:
        "http://gdut_yy.gitee.io/doc4-leetcode/1201-1300/leetcode_1201_ugly-number-iii.html"
    },
    {
      text: "题集",
      items: [
        {
          text: "1201-1300",
          link: "/1201-1300/leetcode_1201_ugly-number-iii/"
        },
        {
          text: "1301-1400",
          link: "/1301-1400/leetcode_1301_number-of-paths-with-max-score/"
        }
      ]
    }
  ];
}

function getSidebar() {
  return [
    {
      title: "1201-1300",
      children: require("./sidebar/sidebarOf1201To1300")
    },
    {
      title: "1301-1400",
      children: require("./sidebar/sidebarOf1301To1400")
    }
  ];
}
