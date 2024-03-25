module.exports = {
  title: 'Makabaka1880\'s Blog',
  description: '欢迎来到我的博客👏',
  themeConfig: {
    nav: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '计算机科学',
        link: "/CS/README.md",
        items: [
          { text: "CASIO", link: "/CS/CASIO.md"}
        ]
      },
      // NavbarGroup
      {
        text: '精神分析',
        items: [
          { text: "Freud 精神分析导论", link: "/Psychoanalysis/README.md"}
        ]
      }
    ],
    sidebar: [
      { title: "主页", link: "/"},
      // NavbarGroup
      {
        text: '计算机科学',
        link: "/CS/README.md",
        items: [
          { text: "CASIO", link: "/CS/CASIO.md"}
        ]
      },
    ]
  }
}