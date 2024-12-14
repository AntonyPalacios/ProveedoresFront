<template>
  <div>
  <el-table :data="tableData" border style="width: 100%;" height="auto">
    <el-table-column fixed prop="providerId" label="Id" width="100" />
    <el-table-column prop="pg" label="PG" width="50">
      <template  v-slot:default="table">
        <font-awesome-icon v-if="table.row.pg" icon="fa-solid fa-circle-check" class="pgGood"/>
        <font-awesome-icon v-else icon="fa-solid fa-circle-xmark" class="pgBad"/>
      </template>
    </el-table-column>
    <el-table-column label="Tipo de Persona" width="100" resizable>
      <template v-slot:default="table" >
        {{setTipoPersona(table)}}
      </template>
    </el-table-column>
    <el-table-column prop="providerName" label="Nombre / Razón Social" width="auto" resizable/>
    <el-table-column prop="ttipoidentificacion" label="Tipo de identificación" width="100" resizable/>
    <el-table-column prop="identififcaion" label="Identificacion" width="100" resizable/>
    <el-table-column prop="phone" label="Telefono" width="100" resizable/>
    <el-table-column prop="evalState" label="Estado Evaluación" width="100" resizable/>
    <el-table-column prop="evalDate" label="Fecha Evaluación" width="100" resizable/>
    <el-table-column prop="fillState" label="Estado Rellenado" width="100" resizable/>
    <el-table-column label="Estado" width="100" resizable>
      <template v-slot:default="table" >
        {{setState(table)}}
      </template>
    </el-table-column>
    <el-table-column prop="fdesde" label="Fecha de creación" width="100" resizable/>
    <el-table-column prop="fultimamodificacion" label="Última modificación" width="100" resizable/>
    <el-table-column width="250" fixed="right" >
      <template v-slot:default="table" >
        <div class="options">
        <router-link :to="{name:'infoProject',params:{id:parseInt(table.row.id)}}">
          <base-button color="colorGris" size="x-small" style="margin: 0 auto">
            <font-awesome-icon icon="fa-solid fa-pen" class="buttonIcon"/>Editar
          </base-button>
        </router-link>
        <router-link :to="{name:'evaluateProvider',params:{idProv:parseInt(table.row.id)}}">
          <base-button color="colorVerde" size="x-small" style="margin: 0 auto">
            <font-awesome-icon icon="fa-solid fa-pen" class="buttonIcon"/>Evaluar
          </base-button>
        </router-link>
        </div>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script setup>
// import {useStore} from "vuex";
// import {computed} from "vue";
//
// const store = useStore();

const tableData=[
  {
    providerId:'0001',
    pg:true,
    ttipopersona:'JUR',
    providerName: 'Bancom',
    ttipoidentificacion: 2,
    identificacion:'25635687458',
    phone:'987654321',
    evalState:'Aprovado',
    evalDate:'21/11/2023',
    fillState:'Terminado',
    state: 'Activo',
    fdesde:'01/01/2010',
    fultimamodificacion:'20/11/2023'
  },
  {
    providerId:'0002',
    pg:false,
    ttipopersona:'NAT',
    providerName: 'Antony Palacios Coronado',
    ttipoidentificacion: 2,
    identificacion:'72498155',
    phone:'987654321',
    evalState:'Aprovado',
    evalDate:'21/11/2023',
    fillState:'Terminado',
    state: 'Activo',
    fdesde:'01/01/2010',
    fultimamodificacion:'20/11/2023'
  },
];
// const tableData = computed(() => {
//   return store.getters['provider/getProviders'];
// })

function setState(table){
  return table.row.state?"Activo":"Inactivo";
}
function setTipoPersona(table){
  return table.row.ttipopersona==="NAT"?"Natural":"Jurídica";
}
</script>

<style scoped>
a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}
.options{
  display: flex;
  margin: 0 auto;
}
.options a:last-child{
  margin-left: 10px;
}
.buttonIcon {
  margin-right: 10px;
}
.pgGood{
  color: green;
}
.pgBad{
  color: red;
}
</style>