<template>
  <div class="container">
    <article class="auto-margin">
      <h1>{{ activePost.title }}</h1>
      <p>{{ activePost.content }}</p>
      <br />
      <hr />
      <aside>
        <h3>Other Posts:</h3>
        <ul>
          <li v-for="post in relatedPosts" :key="post.id">
            <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
            <!-- in :to, can use `/posts/${post.id}` or object syntax as above -->
          </li>
        </ul>
      </aside>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      // posts: 
    }
  },
  computed: {
    activePost: function () {
      return this.$store.state.posts.all.find(post => post.id === this.id)
    },
    relatedPosts: function () {
      return this.$store.state.posts.all.filter(post => post.id !== this.id)
    }
  }
}
</script>
