<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <router-link v-for="tag in tags" :key="tag" :to="`/tags/${tag}`">{{ tag }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    tags() {
      const allTags = this.posts.flatMap(post => post.tags);
      return [...new Set(allTags)];
    },
  },
};
</script>