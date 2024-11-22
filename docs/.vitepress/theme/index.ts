// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme';
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";
import { h } from 'vue'
import '@theojs/lumen/custom-block'  //跑马灯边框 
//import '@theojs/lumen/Feature' //毛玻璃效果
import './Feature.css' //毛玻璃效果
import './test.css'  //移植效果
import './custom-block.css' //跑马灯边框 
//import './style.css'
import '@theojs/lumen/icon' /* 图标 */
import '@theojs/lumen/button' /* 按钮 */
import '@theojs/lumen/colors' /* 配色 */
import '@theojs/lumen/doc' /* 文档样式 */
//import '@theojs/lumen/doc-blocks' /* 容器(默认):左侧阴影样式 */
//import '@theojs/lumen/doc-blocks-border' /* 容器:边框样式 */
import '@theojs/lumen/home' /* 首页样式 */
import '@theojs/lumen/rainbow' //彩虹渐变效果
import '@theojs/lumen/home-blocks' /* 首页按钮 */
import './rainbow.css' //彩虹渐变效果
import '@theojs/lumen/pic' /* 图片样式 */
import '@theojs/lumen/badge' /* 徽章样式 */
import Confetti from "./components/Confetti.vue";
import { inBrowser } from "vitepress"
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
  enhanceApp: ({ app,router }) => { 
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      }
    }   
    app.component('Home', HomeUnderline) 
    app.component('Box', DocBox)
    app.component('Links', DocLinks)
    app.component('BoxCube', DocBoxCube)
    app.component('Twikoo', Twikoo)
    app.component("DataPanel", DataPanel)
    app.component("Confetti", Confetti)
    
  } 
} satisfies Theme