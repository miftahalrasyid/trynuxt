// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify']
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
    '@/plugins/fontawesome.ts'
  ],
  // css: ['~/assets/scss/main.scss'],

  routeRules: {
    '/': { prerender: true, ssr: false },
    // '/products/**': { swr: true },
    '/manatee': { isr: true },
    // '/blog/**': { isr: true },
    // '/admin/**': { ssr: false },
    // '/api/**': { cors: true },
    // '/old-page/': { redirect: '/new-page' }
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }, "@nuxt/image", '@pinia/nuxt', ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Caveat: [400],
        poppins: {
          wght: [100, 200, 300, 500, 600, 700, 800, 900],
          ital: [100]
        },
      }
    }],
    '@nuxtjs/i18n',
    'nuxt-vue3-google-signin'
  ],
  googleSignIn: {
    clientId: '742210396581-o9q56vmt23jfj94qqikrg293pbvotggp.apps.googleusercontent.com',
  },
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    detectBrowserLanguage: {
      useCookie: true,
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  nitro: {
    devProxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})