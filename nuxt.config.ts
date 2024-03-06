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
  ],
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