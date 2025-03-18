<template>
  <div>
    <h2>Posts with tag: {{ tag }}</h2>
    <PostList :posts="filteredPosts" />
    <TagCloud :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { getPosts } from '../composables/getPosts';

export default {
  components: {
    PostList,
    TagCloud,
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.tags.includes(this.tag));
    },
  },
  async created() {
    this.posts = await getPosts();
  },
};
</script>