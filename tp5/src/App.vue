<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/add">Ajouter un emploi</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f4f4f9, #e0e0e8);
  color: #333;
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background: linear-gradient(135deg, #42b983, #3aa876);
  padding: 15px 20px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  margin: 0 20px;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ffdd57;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

nav a:hover::after {
  width: 100%;
}

nav a.router-link-exact-active {
  color: #ffdd57;
  background: rgba(255, 221, 87, 0.1);
}

.container {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease-out;
}

button {
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

input:focus, textarea:focus {
  border-color: #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.3);
  outline: none;
  background: white;
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

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 10px;
  }

  nav a {
    margin: 10px 0;
  }

  .container {
    padding: 20px;
  }

  li {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>