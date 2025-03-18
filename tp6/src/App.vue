<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f4f4f9, #e0e0e8);
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  padding: 20px 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  animation: slideInDown 0.8s ease;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: 600;
  margin: 0 25px;
  font-size: 1.1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

nav a.router-link-exact-active {
  color: #42b983;
  transform: translateY(-2px);
}

.rm {
  margin-right: 25px;
}

nav a:hover {
  color: #42b983;
  transform: translateY(-2px);
}

.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 30px 0;
}

.single-post {
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

.single-post::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.1), rgba(58, 168, 118, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.single-post:hover::before {
  opacity: 1;
}

.single-post:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.single-post h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2c3e50;
  position: relative;
  z-index: 1;
}

.single-post p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 25px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.postpara {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.single-post a {
  color: #42b983;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.single-post a:hover {
  color: #3aa876;
  transform: translateX(5px);
}

.tag-cloud {
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
  animation: fadeIn 1s ease;
}

.tag-cloud h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: #2c3e50;
  text-align: center;
}

.tag-cloud a {
  display: inline-block;
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  margin: 10px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: 500;
}

.tag-cloud a:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

form {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 0 auto;
  animation: fadeInUp 0.8s ease;
}

form label {
  display: block;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

form input, form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 25px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

form input:focus, form textarea:focus {
  border-color: #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.3);
  outline: none;
}

form button {
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

form button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

form button[type="button"] {
  background: linear-gradient(135deg, #ff4d4d, #cc0000);
  margin-left: 15px;
}

form button[type="button"]:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

button {
  background: linear-gradient(135deg, #42b983, #3aa876);
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 25px;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .post-list {
    grid-template-columns: 1fr;
  }

  nav a {
    margin: 0 15px;
    font-size: 1rem;
  }

  form {
    padding: 30px;
  }

}

</style>