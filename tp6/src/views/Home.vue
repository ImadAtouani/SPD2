<template>
    <div>
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
</template>
  
<script>
  import PostList from '../components/PostList.vue';
  import TagCloud from '../components/TagCloud.vue';
  import { getPosts } from '../composables/getPosts';
  
  export default {
    name: 'HomeView',
    components: {
      PostList,
      TagCloud,
    },
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await getPosts();
    },
  };
</script>