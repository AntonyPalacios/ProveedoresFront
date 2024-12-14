<template>
  <div>
    <h1>{{projectToEdit.projectName}}</h1>
    <ProjectInfo class="info" :data="projectToEdit"/>
    <div class="actions">
      <base-button @click="editProject">Editar Proyecto</base-button>
      <base-button @click="newProvider">Ingresar Proveedores</base-button>
    </div>
    <div class="proveedores">
      <section>
        <label>Potenciales Proveedores asignados</label>
      </section>
      <base-container>
        <ListProvidersProject/>
      </base-container>
    </div>

  </div>
</template>

<script setup>
import colors from "@/assets/colors";
import ListProvidersProject from '../../components/admin/ListProvidersProject';
import ProjectInfo from "@/components/admin/ProjectInfo";
import {useRouter, useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed} from "vue";

const router = useRouter();
const route = useRoute();
const store = useStore();

function editProject(){
  router.push({name:'editProject'})
}
function newProvider(){
  router.push({name:'newProvider',params:{id:route.params.id}})
}

const projectToEdit = computed(()=>{
  return store.getters['project/getProjectToEdit'];
})
</script>

<style scoped>
h1 {
  color: v-bind(colors.colorPrimario);
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: medium;
  text-align: left;
}

.info {
  width: 75%;
  margin: 0 auto;
}

section {
  text-align: left;
  margin-bottom: 10px;
}
.proveedores{
  margin: 0 10px;
}
.actions{
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  width: 50%;
}
</style>