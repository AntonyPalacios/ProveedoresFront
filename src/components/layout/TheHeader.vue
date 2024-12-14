<template>
  <header>
    <!-- Sección 1: Logo -->
    <div class="logo-section">
      <img src="../../../public/logoBancom.png"  width="100" height="50"/>
    </div>

    <!-- Sección 2: Barra de opciones -->
    <div class="options-section" v-if="!isProvider">
      <router-link to="/project">Administrar proyectos</router-link>
      <router-link to="/reportes">Reportes de proveedores</router-link>
    </div>

    <!-- Sección 3: Menú desplegable -->
    <div class="menu-section">
      <button @click="toggleMenu">
<!--        <i class="fas fa-bars"></i>-->
        <p>{{username}}</p>
      </button>
      <!-- Menú desplegable -->
      <div v-if="isMenuOpen" class="dropdown-menu">
        <ul>
          <li v-if="!isProvider">Mi perfil</li>
          <li>Cerrar sesión</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const isMenuOpen = ref(false)
const username = store.getters.getUsername;

const isProvider = computed(()=>{
  return store.getters.getUserType === 'provider';
})
function toggleMenu(){
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid rgba(0,0,0,0.3);
}
a:link {
  text-decoration: none;
}
a:visited {
  color: black;
}
a:hover {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
.logo-section img {
  max-width: 100px;
}

.options-section {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.menu-section button {
  background: none;
  border: none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 10%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}

.dropdown-menu li {
  padding: 8px;
  cursor: pointer;
}

</style>