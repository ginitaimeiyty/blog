// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './test.css'
//import './style.css'
import '@theojs/lumen/icon' /* 图标 */
import '@theojs/lumen/button' /* 按钮 */
import '@theojs/lumen/colors' /* 配色 */
import '@theojs/lumen/doc' /* 文档样式 */
import '@theojs/lumen/doc-blocks' /* 容器(默认):左侧阴影样式 */
import '@theojs/lumen/doc-blocks-border' /* 容器:边框样式 */
import '@theojs/lumen/home' /* 首页样式 */
import '@theojs/lumen/home-blocks' /* 首页按钮 */
import '@theojs/lumen/pic' /* 图片样式 */
import '@theojs/lumen/badge' /* 徽章样式 */
import { Twikoo } from '@theojs/lumen'
import { Twikoo_Data } from '../data/Twikoo'
import { Announcement } from '@theojs/lumen'
import { HomeUnderline } from '@theojs/lumen'
import { DocAsideLogo } from '@theojs/lumen'
import { Aside_Data } from '../data/AsideData'
import { HomeFooter } from '@theojs/lumen'
import { Footer_Data } from '../data/footerData'
import { DocBox, DocLinks, DocBoxCube } from '@theojs/lumen'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Twikoo, { Twikoo_Data }),
      'home-hero-info-before': () => h(Announcement) ,
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }),
      'layout-bottom': () => h(HomeFooter, { Footer_Data }) 
      
    }) 
    
  },
  enhanceApp: ({ app }) => {    
    app.component('Home', HomeUnderline) 
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Twikoo', Twikoo)
  } 
} satisfies Theme