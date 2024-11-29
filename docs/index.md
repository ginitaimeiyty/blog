---
layout: home

hero:
  name: "Mr.🐟 Blog"
  text: "进来看看吧👀"
  textsuffix: '..'
  tagline: 内心湛然，则无往而不乐。
  prelink:
    title: '<p>🔧本站使用Github Action自动部署</p>🔑仓库地址:https://github.com/ginitaimeiyty/blog'
    
  image:
    src: /pAWw6pV.png
    ALT: Man!
  actions:
    - theme: brand
      text: 🕹️技术博客
      link: https://blog.csdn.net/m0_62508606?spm=1010.2135.3001.5343
    - theme: alt
      text: 💯Never give up
      link: /introduce

features:
  - title: 数据结构
    details: 数据结构是一种数据组织、管理和存储的格式
    icon: 🛡️
    link: '/data'
  - title: 计算机网络
    details: 将地理位置不同的具有独立功能的多台计算机及其外部设备连接起来
    icon: 📡
    link: '/network'
  - title: 计算机组成原理
    details: 一门重要的计算机科学基础课程，主要讲述计算机系统的基本组成结构、工作原理和设计方法
    icon: ⚙️
    link: /zucheng
  - title: 操作系统
    details: 操作系统是人与计算机之间的接口，也是计算机的灵魂
    icon: 🖥️
    link: '/os'
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
   {
    avatar: '/Young.jpg',
    name: '一只杉鱼',
    title: '死亡不是重点，遗忘才是',
    links: [
      { icon: 'github', link: 'https://github.com/ginitaimeiyty' },
      /*{ icon: 'bilibili', link: 'https://space.bilibili.com/1929518127?spm_id_from=333.1007.0.0' }*/
    ]
  },
  {
    avatar: '/feng.jpg',
    name: '艾伦耶鸽尔',
    title: '海的那边是什么',
    links: [
      { icon: 'github', link: 'https://github.com/lakkla' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1929518127?spm_id_from=333.1007.0.0' }
    ]
  },
  {
    avatar: '/sheng.jpg',
    name: 'shengkio',
    title: '物质之外亦有精神的世界',
    links: [
      { icon: 'github', link: 'https://github.com/shengkio' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1826740720?spm_id_from=333.1007.0.0' }
    ]
  }
  ]
</script>


<Confetti /> 
::: info 团队 :
<VPTeamMembers size="small" :members="members" />
  <!-- <box :items="[ 
   {
      name: 'lakkla',
      link: 'https://github.com/lakkla',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
     {
      name: 'shengkio',
      link: 'https://github.com/shengkio',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    }
  ]"/>
   -->
:::
<Home />
<DataPanel />


