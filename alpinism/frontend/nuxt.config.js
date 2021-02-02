export default {
  server: {
    port: process.env.APP_PORT || 55505, // default: 3000
    host: process.env.APP_IP || '127.0.5.166', // default: localhost
  },
  ssr: true,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.META_SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/css/bootstrap.min.css',
    '~/assets/styles/css/fontawesome.css',
    '~/assets/styles/css/flaticon.css',
    '~/assets/styles/css/animate.min.css',
    '~/assets/styles/css/nice-select.css',
    '~/assets/styles/css/magnific-popup.min.css',
    '~/assets/styles/css/meanmenu.min.css',
    '~/assets/styles/css/style.css',
    '~/assets/styles/css/responsive.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/owl.js', mode: 'client' }, // Only works on client side
    { src: '~/plugins/gotop.js', ssr: false }, // Only works on client side
    { src: '~/plugins/yandexMaps.js', mode: 'client' },
    { src: '~/plugins/lightGallery.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    ['@nuxtjs/dotenv', { filename: '.envLocal' }],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/yandex-metrika',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
  ],
  yandexMetrika: {
    id: '71593546',
    webvisor: true,
    clickmap: true,
    useCDN: false,
    trackLinks: true,
    accurateTrackBounce: true,
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.specalp66.ru/api/v1/',
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    cssSourceMap: true,
  },
  render: {
    resourceHints: false,
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  },
  router: {
    trailingSlash: undefined,
  },
}
