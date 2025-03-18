<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p class="postpara">{{ post.body }}</p>
    <TagCloud :posts="[post]" />
    <button @click="deletePost">Delete Post</button>
  </div>
</template>

<script>
import { getPost, deletePost } from '../composables/getPosts';
import TagCloud from '../components/TagCloud.vue';

export default {
  components: {
    TagCloud,
  },
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const postId = this.$route.params.id;
    this.post = await getPost(postId);
  },
  methods: {
    async deletePost() {
      await deletePost(this.post.id);
      this.$router.push('/');
    },
  },
};
</script>