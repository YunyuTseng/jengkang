import { NuxtConfig } from '@nuxt/types'
import i18nConfig from './i18n/i18nConfig'

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  server: {
    host: '0.0.0.0',
  },
  env: {
    version: JSON.stringify(require('./package.json').version),
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '鉦剛國際有限公司',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/smoothscroll-polyfill', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/lazysizes', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  i18n: i18nConfig,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default config
