import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laravel 文档",
  description: "Laravel 文档中文版",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '12.x', link: '/12.x/installation.md',
      },
    ],

    sidebar:  {
      "/12.x": [
        {
          text: "序言",
          items: [
            {
              text: "发行说明",
              link: "/12.x/releases.md"
            },
            {
              text: "升级指南",
              link: "/12.x/upgrade.md"
            },
            {
              text: "贡献指南",
              link: "/12.x/contributions.md"
            }
          ]
        },
        {
          text: "新手入门",
          items: [
            {
              text: "安装",
              link: "/12.x/installation.md"
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mowangjuanzi/laravel-doc' }
    ]
  },

  ignoreDeadLinks: true,
})
