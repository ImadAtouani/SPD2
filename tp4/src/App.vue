<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" alt="LOGO">
      <h1>Les Bonnes Pièces</h1>
    </header>
    <Pieces />
  </div>
</template>

<script>
import Pieces from './components/Pieces.vue';

export default {
  name: 'App',
  components: {
    Pieces
  }
};
</script>

<style>
</style>