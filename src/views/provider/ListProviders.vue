<template>
<div>
  <h1>Administrar Proveedores</h1>
  <base-container class="container">
    <div class="optionsContainer">
      <div class="options">
        <base-button class="elemento" @click="createNewProvider">
          <font-awesome-icon icon="fa-solid fa-pen" class="buttonIcon"/>
          Crear
        </base-button>
        <el-input
            class="elemento"
            placeholder="Buscar"
        />
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%;" height="auto">
      <el-table-column fixed prop="id" label="Id" width="fit" resizable/>
      <el-table-column prop="personType" label="Tipo de Persona" width="100" resizable/>
      <el-table-column prop="name" label="Nombre / Razón Social" width="auto" resizable/>
      <el-table-column prop="idType" label="Tipo de identificación" width="100" resizable/>
      <el-table-column prop="idData" label="Identificacion" width="100" resizable/>
      <el-table-column prop="phone" label="Telefono" width="100" resizable/>
      <el-table-column prop="email" label="Email" width="100" resizable/>
      <el-table-column prop="creator" label="Analista Creador" width="100" resizable/>
      <el-table-column prop="state" label="Estado" width="100" resizable/>
      <el-table-column prop="creationDate" label="Fecha de creación" width="100" resizable/>
      <el-table-column prop="modifiedDate" label="Última modificación" width="100" resizable/>
      <el-table-column width="auto" fixed="right" >
        <template v-slot:default="table" >
          <div class="options">
            <router-link :to="{name:'infoProject',params:{id:parseInt(table.row.id)}}">
              <base-button color="colorGris" size="x-small" style="margin: 0 auto">
                <font-awesome-icon icon="fa-solid fa-pen" class="buttonIcon"/>Editar
              </base-button>
            </router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </base-container>
</div>
</template>

<script setup>
import colors from "@/assets/colors";
import {useRouter} from "vue-router";

const router = useRouter();
const tableData = [
  {
    id:'0001',
    personType:'Jurídica',
    name: 'Bancom',
    idType: 'RUC',
    idData:'25635687458',
    phone:'987654321',
    email:'prueba@gmail.com',
    creator:'Analista 1',
    fillState:'Terminado',
    state: 'Activo',
    creationDate:'01/01/2010',
    modifiedDate:'20/11/2023'
  },
  {
    id:'0002',
    personType:'Natural',
    name: 'Antony Palacios Coronado',
    idType: 'DNI',
    idData:'72498155',
    phone:'955110168',
    email:'prueba@gmail.com',
    creator:'Analista 1',
    fillState:'Incompleto',
    state: 'Inactivo',
    creationDate:'01/09/1997',
    modifiedDate:'20/11/2023'
  },
  {
    id:'0003',
    personType:'Jurídica',
    name: 'Bancom',
    idType: 'RUC',
    idData:'25635687458',
    phone:'987654321',
    email:'prueba@gmail.com',
    creator:'Analista 2',
    fillState:'Terminado',
    state: 'Activo',
    creationDate:'01/01/2010',
    modifiedDate:'20/11/2023'
  },
]

function createNewProvider() {
  router.push({name: 'newProvider'});
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