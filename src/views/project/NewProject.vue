<template>
  <h1>Crear Proyecto</h1>
  <base-container>
    <ProjectForm/>
  </base-container>
</template>

<script setup>
import colors from "@/assets/colors";
import ProjectForm from "@/components/admin/ProjectForm";


</script>

<style scoped>
h1 {
  color: v-bind(colors.colorPrimario);
  margin-bottom: 20px;
}

.container {
  margin: 0 50px;
}


</style>