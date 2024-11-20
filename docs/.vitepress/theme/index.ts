// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './test.css'
import './style.css'
import '@theojs/lumen/theme'
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