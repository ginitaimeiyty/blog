// .vitepress/data/footerData.ts

import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  author: { name: 'Power By 一只杉鱼', link: 'https://github.com/ginitaimeiyty' ,},
  group: [
    {
      title: 'My Space',
      icon: 'fas fa-share-from-square', // `iconify`或者 `fortawesome` 图标
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: 'CSDN', href: 'https://blog.csdn.net/m0_62508606?spm=1010.2135.3001.5343', icon: 'fas fa-handshake' },
        { name: 'GitHub', href: 'https://github.com/ginitaimeiyty',icon: 'fab fa-github' }
      ]
    },
    {
      title: '技术site',
      target: '_self', // `target`默认打开方式为 _blank , 为 _self 时不会显示外部链接图标
      icon: 'fas fa-link',
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', icon: 'fas fa-book', href: '/docs' },
        { name: '示例2', href: '/page' }
      ]
    }
  ]
  
}
