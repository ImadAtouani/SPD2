import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePostView from '../views/CreatePostView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import EditPostView from '../views/EditPostView.vue';
import TagPostsView from '../views/TagPostsView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-post', component: CreatePostView },
  { path: '/post/:id', component: PostDetailView, props: true },
  { path: '/edit-post/:id', component: EditPostView, props: true },
  { path: '/tags/:tag', component: TagPostsView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;