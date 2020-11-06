<template>
  <nav class="nav">
    <div class="margin-auto">
      <p class="logo">
        <nuxt-link :to="{ name: 'index' }">Nuxt Fundamentals:</nuxt-link>
        <span class="subheader">A VueSchool.io Course</span>
      </p>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 2em;
  background: linear-gradient(skyblue, steelblue);
  border-bottom: 1px solid navy;
}

.subheader {
  font-style: italic;
}

.logo {
  position: relative;
  padding: 0.5em;
}
</style>
