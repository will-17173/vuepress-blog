module.exports = {
  theme: 'simple',
  title: 'Nothing Here',
  description: '什么都没有',
  base: '/vuepress-blog/',
  evergreen: true,
  themeConfig: {
    author: 'Will.H'
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-17647166-1'
      }
    ]
  ]
}
