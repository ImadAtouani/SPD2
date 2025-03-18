<template>
    <div>
      <input type="text" v-model="filter" @input="updateFilter" placeholder="Filtrer par titre" />
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        filter: '',
      };
    },
    methods: {
      updateFilter() {
        this.$emit('filter', this.filter);
      },
    },
  };
</script>
  
<style scoped>
  input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px;
  }
</style>