<!-- for Nuxt apps, `/layouts/*.vue` file(s) are like `App.vue` in Vue apps -->
<template>
  <div class="application">
    <TheNavbar />
    <Nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default { 
  components: {
    TheNavbar
  }
}
</script>

<style scoped>
.application {
  content: contain;
  overscroll-behavior-y: contain;
  background: limegreen;
}
</style>
