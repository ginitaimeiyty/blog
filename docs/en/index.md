---
layout: home

hero:
  name: "Mr.🐟 Blog"
  text: "进来看看吧👀"
  textsuffix: '..'
  tagline: 内心湛然，则无往而不乐。
  prelink:
    title: '<p>🔧This site is automatically deployed using GitHub Actions</p>🔑Repository address:https://github.com/ginitaimeiyty/blog'
    
  image:
    src: https://s21.ax1x.com/2024/11/20/pAWw6pV.png
    ALT: Man!
  actions:
    - theme: brand
      text: 🕹️Technical blog
      link: /
    - theme: alt
      text: 💯Never give up
      link: /api-examples

features:
  - title: Data Structures
    details: A data structure is a format for organizing, managing and storing data
    icon: 🛡️
    link: '/en/data'
  - title: Computer network
    details: Connect geographically different computers with independent functions and their external devices
    icon: 📡
    link: '/en/network'
  - title: Principles of computer composition
    details: An important basic course in computer science, mainly describes the basic structure of computer systems, working principles and design methods
    icon: ⚙️
    link: /en/zucheng
  - title: Operating system
    details: Operating system is the interface between human and computer, but also the soul of the computer
    icon: 🖥️
    link: '/en/os'
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
::: info Team:
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

