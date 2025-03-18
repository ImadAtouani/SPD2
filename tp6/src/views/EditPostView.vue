<template>
    <div>
      <h2>Edit Post</h2>
      <form @submit.prevent="updatePost">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title" required />
        <label for="body">Body:</label>
        <textarea id="body" v-model="post.body" required></textarea>
        <label for="tags">Tags (comma separated):</label>
        <input type="text" id="tags" v-model="post.tags" required />
        <button type="submit">Update Post</button>
        <button type="button" @click="deletePost">Delete Post</button>
      </form>
    </div>
</template>
  
<script>
  import { getPost, updatePost, deletePost } from '../composables/getPosts';
  
  export default {
    data() {
      return {
        post: {
          id: null,
          title: '',
          body: '',
          tags: '',
        },
      };
    },
    async created() {
      const postId = this.$route.params.id;
      const post = await getPost(postId);
      this.post = {
        ...post,
        tags: post.tags.join(', '),
      };
    },
    methods: {
      async updatePost() {
        const updatedPost = {
          ...this.post,
          tags: this.post.tags.split(',').map(tag => tag.trim()),
        };
        await updatePost(updatedPost);
        this.$router.push('/');
      },
      async deletePost() {
        await deletePost(this.post.id);
        this.$router.push('/');
      },
    },
  };
</script>