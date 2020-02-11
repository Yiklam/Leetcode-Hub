// .vuepress/config.js
module.exports = {
  title: "Leetcode 题解",
  base: "/doc3-leetcode/",
  themeConfig: {
    repo: "gdut-yy/leetcode-hub",
    repoLabel: "Github",
    docsRepo: "gdut-yy/leetcode-hub",
    docsBranch: "master/part3/docs",
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
          text: "801-900",
          link:
            "/801-900/leetcode_801_minimum-swaps-to-make-sequences-increasing/"
        },
        {
          text: "901-1000",
          link: "/901-1000/leetcode_901_online-stock-span/"
        },
        {
          text: "1001-1100",
          link: "/1001-1100/leetcode_1001_grid-illumination/"
        },
        {
          text: "1101-1200",
          link:
            "/1101-1200/leetcode_1101_the-earliest-moment-when-everyone-become-friends/"
        }
      ]
    }
  ];
}

function getSidebar() {
  return [
    {
      title: "801-900",
      children: require("./sidebar/sidebarOf801To900")
    },
    {
      title: "901-1000",
      children: require("./sidebar/sidebarOf901To1000")
    },
    {
      title: "1001-1100",
      children: require("./sidebar/sidebarOf1001To1100")
    },
    {
      title: "1101-1200",
      children: require("./sidebar/sidebarOf1101To1200")
    }
  ];
}
