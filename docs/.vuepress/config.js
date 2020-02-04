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
    nav: [],
    sidebar: getSidebar()
  }
};

function getSidebar() {
  return [
    {
      title: "001-050",
      children: sidebarOf001To050()
    },
    {
      title: "051-100",
      children: sidebarOf051To100()
    }
  ];
}

function sidebarOf001To050() {
  return [
    "/001-050/leetcode-1-two-sum",
    "/001-050/leetcode-2-add-two-numbers",
    "/001-050/leetcode-3-longest-substring-without-repeating-characters"
  ];
}

function sidebarOf051To100() {
  return ["/051-100/leetcode-51-n-queens", "/051-100/leetcode-52-n-queens-ii"];
}
