export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Beldi - Espejismo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Generador de planetas online. Armá el tuyo y participá de la tapa de "Espejismo"' },
      { hid: 'og:image', property: 'og:image', content: '/beldi-espejismo.jpg' },
      { hid: 'og:url', property: 'og:url', content: 'https://beldi.netlify.app/' },
      { hid: 'og:description', property: 'og:description', content: 'Generador de planetas online. Armá el tuyo y participá de la tapa de "Espejismo"' },
      { hid: 'twitter:image', property: 'twitter:image', content: '/beldi-espejismo.jpg' },
      { hid: 'twitter:url', property: 'twitter:url', content: 'https://beldi.netlify.app/' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Generador de planetas online. Armá el tuyo y participá de la tapa de "Espejismo"' },
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Beldi - Espejismo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
