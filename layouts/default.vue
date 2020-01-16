<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'portfolio top',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'portfolio top en',
          to: '/index_en'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>