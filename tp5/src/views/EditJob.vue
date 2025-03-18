<template>
    <div>
      <h1>Modifier l'emploi</h1>
      <form @submit.prevent="updateJob">
        <label for="title">Titre:</label>
        <input type="text" v-model="job.title" required />
        <label for="description">Description:</label>
        <textarea v-model="job.description" required></textarea>
        <label for="salary">Salaire:</label>
        <input type="number" v-model="job.salary" required />
        <label for="date_of_creation">Date de création:</label>
        <input type="date" v-model="job.date_of_creation" required />
        <label for="years_of_experience">Années d'expérience:</label>
        <input type="number" v-model="job.years_of_experience" required />
        <button type="submit">Mettre à jour</button>
      </form>
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
      updateJob() {
        const index = jobs.findIndex(job => job.id === this.job.id);
        jobs[index] = this.job;
        this.$router.push('/');
      },
    },
  };
</script>
  
<style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }
  
  label {
    margin-top: 10px;
  }
  
  input, textarea {
    padding: 10px;
    margin-top: 5px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>