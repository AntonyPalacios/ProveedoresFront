<template>
<div>
  <h1>Evaluación de posible proveedor</h1>
  <ProjectInfo class="info" :data="projectToEdit"/>
  <ProviderInfo class="info"/>
</div>
</template>

<script setup>
import colors from "@/assets/colors";
import ProjectInfo from "@/components/admin/ProjectInfo";
import ProviderInfo from "@/views/provider/ProviderInfo";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const projectToEdit = computed(()=>{
  return store.getters['project/getProjectToEdit'];
})
</script>

<style scoped>
.info {
  width: 90%;
  margin: 15px auto;
}
h1 {
  color: v-bind(colors.colorPrimario);
  margin-bottom: 20px;
}
</style>