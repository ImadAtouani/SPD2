<template>
  <div class="single-post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
    <p><strong>Tags:</strong> {{ post.tags.join(', ') }}</p>
    <router-link class="rm" :to="`/post/${post.id}`">Read more</router-link>
    <router-link class="edit" :to="`/edit-post/${post.id}`">Edit</router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    snippet() {
      return this.post.body.substring(0, 50) + '...';
    },
  },
};
</script>