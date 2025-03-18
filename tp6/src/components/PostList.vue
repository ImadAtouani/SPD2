<template>
  <div class="post-list">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';

export default {
  components: {
    SinglePost,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>