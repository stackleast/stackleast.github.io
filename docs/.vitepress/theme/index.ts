// .vitepress/theme/index.ts
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// Import komponen kustom jika ada
// import MyCustomComponent from './MyCustomComponent.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Anda bisa menambahkan slot di sini untuk kustomisasi layout
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Mendaftarkan komponen kustom secara global
    // app.component('MyCustomComponent', MyCustomComponent)
  }
} satisfies Theme