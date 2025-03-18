import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddJob from '../views/AddJob.vue';
import EditJob from '../views/EditJob.vue';
import JobDetail from '../components/JobDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetail',
    component: JobDetail,
  },
  {
    path: '/edit/:id',
    name: 'EditJob',
    component: EditJob,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;