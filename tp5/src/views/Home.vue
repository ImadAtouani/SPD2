<template>
  <div class="container fade-in">
    <h1>Liste des emplois</h1>
    <FilterNav @filter="handleFilter" />
    <ul>
      <li v-for="job in filteredJobs" :key="job.id" class="fade-in hover-scale">
        <router-link :to="`/jobs/${job.id}`">{{ job.title }}</router-link>
        <div class="actions">
          <router-link :to="`/edit/${job.id}`" class="edit-btn">Modifier</router-link>
          <button @click="deleteJob(job.id)" class="delete-btn">Supprimer</button>
        </div>
      </li>
    </ul>
    <router-link to="/add" class="add-job-btn">Ajouter un emploi</router-link>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue';
import jobs from '../data/jobs.json';

export default {
  name: 'HomeView',
  components: {
    FilterNav,
  },
  data() {
    return {
      jobs: jobs,
      filter: '',
    };
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter(job => job.title.toLowerCase().includes(this.filter.toLowerCase()));
    },
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    deleteJob(id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
        this.jobs = this.jobs.filter(job => job.id !== id);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  margin: 15px 0;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

li a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

li a:hover {
  color: #3aa876;
}

.actions {
  display: flex;
  gap: 10px;
}

.edit-btn, .delete-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
}

.edit-btn {
  background: linear-gradient(135deg, #42b983, #3aa876);
}

.delete-btn {
  background: linear-gradient(135deg, #ff4d4d, #ff1a1a);
}

.edit-btn:hover, .delete-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  color: white;
}

.edit-btn:active, .delete-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.add-job-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.add-job-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.hover-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>