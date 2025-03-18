<template>
  <div class="job-detail">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }}</p>
    <p>Salaire: {{ job.salary }}</p>
    <p>Date de création: {{ job.date_of_creation }}</p>
    <p>Années d'expérience: {{ job.years_of_experience }}</p>
    <div class="actions">
      <router-link :to="`/edit/${job.id}`" class="edit-btn">Modifier</router-link>
      <button @click="deleteJob" class="delete-btn">Supprimer</button>
    </div>
  </div>
</template>

<script>
import jobs from '../data/jobs.json';

export default {
  data() {
    return {
      job: {},
    };
  },
  created() {
    const jobId = this.$route.params.id;
    this.job = jobs.find(job => job.id === jobId);
  },
  methods: {
    deleteJob() {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet emploi ?')) {
        const index = jobs.findIndex(job => job.id === this.job.id);
        jobs.splice(index, 1);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.job-detail {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
}

.actions {
  margin-top: 20px;
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
}

.edit-btn {
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: white;
}

.delete-btn {
  background: linear-gradient(135deg, #ff4d4d, #ff1a1a);
  color: white;
}

.edit-btn:hover, .delete-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.edit-btn:active, .delete-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Animation */
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
</style>