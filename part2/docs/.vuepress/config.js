// .vuepress/config.js
module.exports = {
  title: "Leetcode 题解",
  base: "/doc2-leetcode/",
  themeConfig: {
    repo: "gdut-yy/leetcode-hub",
    repoLabel: "Github",
    docsRepo: "gdut-yy/leetcode-hub",
    docsBranch: "master/part2/docs",
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
        { text: "401-500", link: "/401-500/leetcode_401_binary-watch/" },
        {
          text: "501-600",
          link: "/501-600/leetcode_501_find-mode-in-binary-search-tree/"
        },
        {
          text: "601-700",
          link: "/601-700/leetcode_601_human-traffic-of-stadium/"
        },
        {
          text: "701-800",
          link: "/701-800/leetcode_701_insert-into-a-binary-search-tree/"
        }
      ]
    }
  ];
}

function getSidebar() {
  return [
    {
      title: "401-500",
      children: require("./sidebar/sidebarOf401To500")
    },
    {
      title: "501-600",
      children: require("./sidebar/sidebarOf501To600")
    },
    {
      title: "601-700",
      children: require("./sidebar/sidebarOf601To700")
    },
    {
      title: "701-800",
      children: require("./sidebar/sidebarOf701To800")
    }
  ];
}
