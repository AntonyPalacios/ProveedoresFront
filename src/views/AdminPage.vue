<template>
<div>
  <the-header/>
  <main>
    <router-view/>
  </main>
  <the-footer/>
</div>
</template>

<script setup>

</script>

<style scoped>
main {
  flex: 1; /* Ocupa todo el espacio disponible entre header y footer */
  overflow-y: auto; /* Agrega desplazamiento vertical si es necesario */
  margin-bottom: 75px;
}
</style>