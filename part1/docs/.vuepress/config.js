// .vuepress/config.js
module.exports = {
  title: "Leetcode 题解",
  base: "/doc1-leetcode/",
  themeConfig: {
    repo: "gdut-yy/leetcode-hub",
    repoLabel: "Github",
    docsRepo: "gdut-yy/leetcode-hub",
    docsBranch: "master/part1/docs",
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
        "/001-100/leetcode_1_two-sum.html"
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
        { text: "001-100", link: "/001-100/leetcode_1_two-sum/" },
        { text: "101-200", link: "/101-200/leetcode_101_symmetric-tree/" },
        {
          text: "201-300",
          link: "/201-300/leetcode_201_bitwise-and-of-numbers-range/"
        },
        {
          text: "301-400",
          link: "/301-400/leetcode_301_remove-invalid-parentheses/"
        }
      ]
    }
  ];
}

function getSidebar() {
  return [
    {
      title: "001-100",
      children: require("./sidebar/sidebarOf001To100")
    },
    {
      title: "101-200",
      children: require("./sidebar/sidebarOf101To200")
    },
    {
      title: "201-300",
      children: require("./sidebar/sidebarOf201To300")
    },
    {
      title: "301-400",
      children: require("./sidebar/sidebarOf301To400")
    }
  ];
}
