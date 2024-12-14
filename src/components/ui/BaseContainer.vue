<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup>
import colors from "@/assets/colors";

</script>

<style scoped>
.container{
  padding: 10px;
  border: solid 1px v-bind(colors.colorPrimario);
}
</style>