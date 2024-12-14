<template>
<div>
  <h1>Crear potencial proveedor</h1>
  <base-container>
    <ProviderForm/>
  </base-container>
</div>
</template>

<script setup>
import colors from "@/assets/colors";
import ProviderForm from "@/components/provider/ProviderForm";


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