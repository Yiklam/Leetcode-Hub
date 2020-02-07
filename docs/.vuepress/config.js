// .vuepress/config.js
module.exports = {
  title: "Leetcode 题解",
  base: "/doc-leetcode/",
  themeConfig: {
    repo: "gdut-yy/leetcode-hub",
    repoLabel: "Github",
    docsRepo: "gdut-yy/leetcode-hub",
    docsBranch: "master/docs",
    editLinks: true,
    editLinkText: "帮助我们改善此页面！",
    lastUpdated: "Last Updated",
    sidebarDepth: 4,
    nav: getNav(),
    sidebar: getSidebar()
  }
};

function getNav() {
  return [
    {
      text: "题集",
      items: [
        { text: "001-100", link: "/001-100/leetcode_2_add-two-numbers/" },
        { text: "101-200", link: "/101-200/leetcode_101_symmetric-tree/" },
        {
          text: "201-300",
          link: "/201-300/leetcode_201_bitwise-and-of-numbers-range/"
        },
        {
          text: "301-400",
          link: "/301-400/leetcode_301_remove-invalid-parentheses/"
        },
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
          link: "/701-800/leetcode_703_kth-largest-element-in-a-stream/"
        },
        {
          text: "801-900",
          link:
            "/801-900/leetcode_801_minimum-swaps-to-make-sequences-increasing/"
        },
        {
          text: "901-1000",
          link: "/901-1000/leetcode_902_numbers-at-most-n-given-digit-set/"
        },
        {
          text: "1001-1100",
          link: "/1001-1100/leetcode_1001_grid-illumination/"
        },
        {
          text: "1101-1200",
          link: "/1101-1200/leetcode_1103_distribute-candies-to-people/"
        },
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
    },
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
    },
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
    },
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
