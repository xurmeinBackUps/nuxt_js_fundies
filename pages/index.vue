<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <h1 class="title">
        nuxt-tutorial
      </h1>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'posts-id', params: { id: post.id } }"
          class="button--grey"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue';

export default {
  components: {
    NuxtLogo
  },
  head () { // updates html <head></head> tags; works like component `data()`
    return {
      title: 'Home Page',
      meta: [
        { name: 'twitter:title', content: 'random words and stuff' },
        { name: 'twitter:description', content: 'look at this stuff nuxt does!' }
      ]
    }
  },
  computed: {
    posts: function() {
      return this.$store.state.posts.all
    }
  }
}
</script>
