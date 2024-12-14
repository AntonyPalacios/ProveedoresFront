<template>
  <div>
    <h1>Administrar Proyectos</h1>
    <base-container class="container">
      <div class="optionsContainer">
        <div class="options">
          <base-button class="elemento" @click="createNewProject">
            <font-awesome-icon icon="fa-solid fa-pen" class="buttonIcon"/>
            Crear
          </base-button>
          <el-input
              class="elemento"
              placeholder="Buscar"
          />
        </div>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="projectId" fixed label="Id" width="50px"/>
        <el-table-column prop="projectType" label="Tipo proyecto" width="150px"/>
        <el-table-column prop="projectName" label="Nombre proyecto" width="150px"/>
        <el-table-column prop="projectCode" label="Código" width="150px"/>
        <el-table-column prop="analystName" label="Analista Encargado" width="170px"/>
        <el-table-column label="Estado" width="100px">
          <template v-slot:default="table">
            {{setState(table)}}
          </template>
        </el-table-column>
        <el-table-column prop="fdesde" label="Fecha de creación" width="170px"/>
        <el-table-column prop="fhasta" label="Fecha de caducidad" width="170px"/>
        <el-table-column width="150px" fixed="right">
          <template v-slot:default="table">
            <router-link :to="{name:'infoProject',params:{id:parseInt(table.row.projectId)}}" @click="setProjectToEdit(table.row)">
              <base-button color="colorGris" size="small" style="margin: 0 auto">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="buttonIcon"/>
                Ver
              </base-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
    </base-container>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed} from "vue";
import colors from "@/assets/colors";

const router = useRouter();
const store = useStore();

const tableData = computed(() => {
  return store.getters['project/getProjects'];
})

function createNewProject() {
  router.push({name: 'newProject'});
}

function setProjectToEdit(row){
  store.dispatch('project/setProjectToEdit', row)
}

function setState(table){
  return table.row.state?"Activo":"Inactivo";
}


</script>

<style scoped>
.container {
  margin: 0 50px;
}

.optionsContainer {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.options {
  display: flex;
  align-items: center;
  width: fit-content;
}

.elemento {
  margin-right: 15px;
}

.options .elemento:last-child {
  margin-right: 0;
}

.buttonIcon {
  margin-right: 10px;
}

h1 {
  color: v-bind(colors.colorPrimario);
  margin-bottom: 20px;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}
</style>