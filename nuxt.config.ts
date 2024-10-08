// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  devtools: { enabled: true },
  serverHandlers: [
    {
      route: "/api/mpserver/",
      handler: "~~/p2pServer/mpserver.ts",
      middleware: true,
    },
  ],
});
