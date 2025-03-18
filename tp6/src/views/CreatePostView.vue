<template>
  <div>
    <h2>Create a New Post</h2>
    <form @submit.prevent="addPost">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required />
      <label for="body">Body:</label>
      <textarea id="body" v-model="body" required></textarea>
      <label for="tags">Tags (comma separated):</label>
      <input type="text" id="tags" v-model="tags" required />
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
import { getPosts } from '../composables/getPosts';

export default {
  data() {
    return {
      title: '',
      body: '',
      tags: '',
    };
  },
  methods: {
    async addPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim()),
      };
      const posts = await getPosts();
      posts.push(newPost);
      this.$router.push('/');
    },
  },
};
</script>