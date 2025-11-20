// config.mts
import { defineConfig } from 'vitepress'
import markdownItMermaid from '@markslides/markdown-it-mermaid';

export default defineConfig({
  title: "Stackless",
  description: "A comprehensive resource for Windows and Office activation guides and tools",
  lang: 'id-ID',
  lastUpdated: true,
  appearance: 'dark',
  
  // 🔥 PERBAIKAN PENTING: Base URL untuk GitHub Pages
  base: '/', // Untuk user site (username.github.io)
  
  head: [
    ['link',{ rel: 'icon', href: '/assets/images/logo.svg'}],
  ],
  
  // ... rest of your config tetap sama
  themeConfig: {
    logo: '/assets/images/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Guides',
        items: [
          { text: 'Instal Ulang Windows', link: '/guides/windows/installUlang' },
          { text: 'Windows Activation', link: '/guides/windows/' },
          { text: 'Office Activation', link: '/guides/office/' },
          { text: 'Other Software', link: '/guides/other/' }
        ] 
      },
      { text: 'Verification', link: '/verification/' },
      { text: 'Community', link: '/community/' },
      { text: 'About', link: '/about/' }
    ],

    sidebar: {
      '/guides/windows/': [
        {
          text: 'Windows Activation',
          items: [
            { text: 'Overview', link: '/guides/windows/' },
            { text: 'Instal Ulang Windows', link: '/guides/windows/installUlang' },
            { text: 'KMS-Based Activation', link: '/guides/windows/kmspico' },
            { text: 'HWID Activation', link: '/guides/windows/hwid' }
          ]
        }
      ],
      '/guides/office/': [
        {
          text: 'Office Activation',
          items: [
            { text: 'Overview', link: '/guides/office/' },
            { text: 'Using Office Tool', link: '/guides/office/office-tool' }
          ]
        }
      ],
      '/guides/other/': [
        {
          text: 'Other Software Activation',
          items: [
            { text: 'Overview', link: '/guides/other/' },
            { text: 'Windows Server', link: '/guides/other/windows-server' },
            { text: 'Adobe Creative Cloud', link: '/guides/other/adobe' },
            { text: 'VMware Workstation', link: '/guides/other/vmware' },
            { text: 'JetBrains IDE', link: '/guides/other/jetbrains' }
          ]
        }
      ],
      '/verification/': []
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/stackleast/stackleast.github.io' } // 🔥 Update dengan repo yang benar
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Stackless.dev'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItMermaid); 
    }
  }
})