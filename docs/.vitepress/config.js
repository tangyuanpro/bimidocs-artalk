import { defineConfig } from 'vitepress'
import * as ArtalkCDN from '../code/ArtalkCDN.json'
import * as Versions from '../code/ArtalkVersion.json'

export default {
  // These are app level configs.
  lang: 'zh-CN',
  title: 'BimiLinux',
  description: '一个全新的linux系统',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
}
