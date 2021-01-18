module.exports = {
  base: '/',
  title: 'Dead Coffin - Rust',
  description: 'A lightly modded Rust server with a shop and better life mods.',

  plugins: [
    ['@vuepress/google-analytics', {
      'ga': '',
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
    }],
  ],

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'shortcut icon', href: '/icon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: 'https://github.com/Dead-Coffin',
    docsRepo: 'Dead-Coffin/Dead-Coffin.github.io',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    lastUpdated: true,
    logo: '/icon.png',
    nav: [
      {
        text: 'Documentation',
        link: '/project/intro.md',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/Z4bGRtg'
      },
      {
        text: 'Join Server',
        link: 'steam://connect/104.217.248.10:27514'
      },
    ],
    sidebar: {
      '/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '/project/intro.md',
            '/project/rules.md',
            '/project/commands.md',
          ]
        }
      ],
      '/staff/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '/staff/info/commands.md',
          ]
        }
      ],
    }
  },
}
