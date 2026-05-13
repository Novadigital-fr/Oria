// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
  image: {
    domains: ['picsum.photos', 'fastly.picsum.photos', 'images.unsplash.com']
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Oria — Studio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Oria — studio indépendant. Stratégie, identité et mise en œuvre pour des marques qui veulent compter.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/img/oria-logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})