<template>
    <div>
      <h1>Ajouter un nouvel emploi</h1>
      <form @submit.prevent="addJob">
        <label for="title">Titre:</label>
        <input type="text" v-model="title" required />
        <label for="description">Description:</label>
        <textarea v-model="description" required></textarea>
        <label for="salary">Salaire:</label>
        <input type="number" v-model="salary" required />
        <label for="date_of_creation">Date de création:</label>
        <input type="date" v-model="date_of_creation" required />
        <label for="years_of_experience">Années d'expérience:</label>
        <input type="number" v-model="years_of_experience" required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
</template>
  
<script>
  import jobs from '../data/jobs.json';
  
  export default {
    data() {
      return {
        title: '',
        description: '',
        salary: null,
        date_of_creation: '',
        years_of_experience: null,
      };
    },
    methods: {
      addJob() {
        const newJob = {
          id: (jobs.length + 1).toString(),
          title: this.title,
          description: this.description,
          salary: this.salary,
          date_of_creation: this.date_of_creation,
          years_of_experience: this.years_of_experience,
        };
        jobs.push(newJob);
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