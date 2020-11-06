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
  head () {
    return {
      title: `${this.activePost.title}`,
      meta: [ // is an array for multiple tags of same kind
      // following merely for demon purpose; inspect page > Elements to confirm meta tag presence
        { name: 'twitter:title', content: this.activePost.title },
        { name: 'twitter:description', content: this.activePost.content }
      ]
    }
  },
  data() {
    return {
      id: this.$route.params.id
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
