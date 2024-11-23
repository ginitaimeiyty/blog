import { defineConfig } from 'vitepress';
import { figure } from '@mdit/plugin-figure';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mr.🐟",
  titleTemplate: 'Home',
  lastUpdated:true,
  description: "技术博客",
  markdown: {
  config: (md) => { 
        md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) 
    } 
  },
  themeConfig: {
    // debug
    // editLink: {
    //   pattern: 'https://github.com/ginitaimeiyty/blog/tree/master/docs/:path',
    //   text: '在GitHub上编辑这个界面'
    // },
    lightModeSwitchTitle:'点击切换到浅色模式',
    darkModeSwitchTitle:'点击切换到深色模式',
    sidebarMenuLabel:'菜单',
    returnToTopLabel:'返回顶部',
    externalLinkIcon:true,
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    lastUpdated:{
      text:"最后更新时间"
    },
    logo: '/codepen-brands-solid.svg',
    //废了半个小时才看懂，服了
    outline:{
          label:'此文章目录',
          level: 'deep'
    },
    nav: [
      { text: '国内加速地址(审核原因,暂不支持评论区)', link:'https://www.一只杉鱼.site:8568/ '},
      { text: 'Home', link: '/' },
      { text: '文章', link: '/data' }
    ],

    sidebar: [
      {
        text: '🙄噩梦408',
        collapsed:true,
        items: [
          { text: '计算机组成原理', link: '/zucheng' },
          { text: '数据结构', link: '/data' },
          { text: '计算机网络', link: '/network' },
          { text: '操作系统', link: '/os' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ginitaimeiyty' },
      //{ icon: 'qq', link: '/qqlogin.php'}
    ],
    search: {
      provider: 'local'
    }
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/index'
    },
    root: {
      label: '简体中文',
      lang: 'cn',
      link: '/index'
    }
  }
  
})
