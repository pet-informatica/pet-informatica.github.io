export default {
  target: 'static',

  head: {
    title: 'PET Informática - Ensino, Pesquisa e Extensão na UFPE',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'O PET-Informática é um programa da Universidade Federal de Pernambuco formado por pessoas alunas de Ciência da Computação. Organizamos cursos, palestras, workshops e olimpíadas para as pessoas alunas da graduação e toda a comunidade local.',
      },
      { property: 'og:title', content: 'PET-Informática' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content:
          'O PET-Informática é um programa da Universidade Federal de Pernambuco formado por pessoas alunas de Ciência da Computação.',
      },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: 'https://pet.cin.ufpe.br/' },
      {
        property: 'og:image',
        content: 'https://pet.cin.ufpe.br/www/images/artworks/app-cover.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'images/logos/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
      },
    ],
  },

  css: [],

  plugins: [
    { src: '~/plugins/vue-enlargeable-image.ts' },
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  modules: ['@nuxt/content'],

  content: {},

  build: {},

  router: {
    base: '/www',
  },

  googleAnalytics: {
    id: 'UA-109129944-5',
  },
}
